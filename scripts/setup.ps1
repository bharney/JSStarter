Param(
    [string] [Parameter(Mandatory=$true)] $ResourceGroupLocation = "West US 2",
    [string] [Parameter(Mandatory=$true)] $ResourceGroupName = "jsstarter",
    [string] [Parameter(Mandatory=$true)] $secretsGuid = "xxxxxxxxx-xxxx-xxxxx-xxxx-xxxxxxxxxx",
    [string] $TemplateFile = './WebSiteSQLDatabase.json',
    [string] $TemplateParametersFile = './WebSiteSQLDatabase.parameters.json'
)

try {
    [Microsoft.Azure.Common.Authentication.AzureSession]::ClientFactory.AddUserAgent("VSAzureTools-$UI$($host.name)".replace(' ','_'), '3.0.0')
} catch { }

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version 3


$OptionalParameters = New-Object -TypeName Hashtable


$secrets = Get-Content $env:APPDATA\Microsoft\UserSecrets\$secretsGuid\secrets.json | ConvertFrom-Json
$SendGridKey="SG.xxxxxxxxxx-xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$SendGridUser="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$SqlUserName = $ResourceGroupName
$sqlPassword = [system.web.security.membership]::generatepassword(16,3)
$secureSqlPassword = convertto-securestring -force -asplaintext -string $sqlPassword
$TokenKey = [system.web.security.membership]::generatepassword(16,3)
$secureTokenKey = convertto-securestring -force -asplaintext -string $TokenKey
$TokenIssuer= -join("https://www.","$ResourceGroupName",".azurewebsites.net")
$SeedUserName= -join("admin@","$ResourceGroupName",".com")
$SeedPassword = [system.web.security.membership]::generatepassword(16,3)
$secureSeedPassword = convertto-securestring -force -asplaintext -string $SeedPassword
$SqlServer = -join("$ResourceGroupName","sqlserver")
$SqlDB = -join("$ResourceGroupName","db")
$AppInsights = -join("$ResourceGroupName","appinsight")
$ServicePlan = -join("$ResourceGroupName","serviceplan")
$KeyVaultName = -join("$ResourceGroupName","vault")
$BlobStorageName = -join("$ResourceGroupName","blob")
$appName = -join("$ResourceGroupName","app")

############ Connect to Azure Subscription Context #############
Connect-AzureRmAccount

#if you have multiple subscriptions you will need to include this
Get-AzureRmSubscription | Where-Object {$_.Name -eq "Brian Harney"} | Set-AzureRmContext

########## Connect to AD #########
$TenantId = Get-AzureRmSubscription | Where-Object {$_.Name -eq "Brian Harney"} | Select-Object -Property TenantId
$TenantId = $TenantId.TenantId
Connect-AzureAD -TenantId $TenantId.TenantId
#Write-Host "tenantId: $TenantId"
# Obtain the security identifier(SID) of the active directory user
$ADUserObjectId =  (Get-AzureADUser)[0].ObjectId
Write-Host "getting AD user $ADUserObjectId..."

$JSON = (Get-Content -path $TemplateParametersFile -Raw) | ConvertFrom-Json 
$JSON.parameters.ADUserObjectId.value = $ADUserObjectId

#Write-Host "replace ADUser variable with value in arm template"
#$JSON | ConvertTo-Json -Depth 100 | Set-Content -Path $TemplateParametersFile

########### Create Resource Group ##########
# Create or update the resource group using the specified template file and template parameters file
New-AzureRmResourceGroup -Name $ResourceGroupName -Location $ResourceGroupLocation -Verbose -Force

########### Create Key Vault ###########
$keyVault = New-AzureRmKeyVault `
  -VaultName $KeyVaultName `
  -resourceGroupName $ResourceGroupName `
  -Location $ResourceGroupLocation `
  -EnabledForTemplateDeployment `

# Set the key vault access policy for your AD User
Set-AzureRmKeyVaultAccessPolicy -VaultName $KeyVaultName -ResourceGroupName $ResourceGroupName -ObjectId $ADUserObjectId -PermissionsToSecrets list, get, set

########## Create Application Registration within AD #########
$ObjectId = New-AzureADApplication -DisplayName $appName -IdentifierUris "https://www.$ResourceGroupName.azurewebsites.net" | Select-Object -Property ObjectId
#$ObjectId = Get-AzureADApplication –SearchString $appName

############ Service Principal for Application ##################
# Find and add your applications (ServicePrincipal ObjectID) as members to this group 
$appId = Get-AzureRmADApplication -DisplayNameStartWith $appName | Select-Object -Property ApplicationId

$spPassword = [system.web.security.membership]::generatepassword(16,3)
$securepassword = convertto-securestring -force -asplaintext -string $spPassword
$servicePrincipal = new-azurermadserviceprincipal -applicationid $appId.applicationid.guid -password $securepassword
Start-Sleep -s 25 # Wait till the ServicePrincipal is completely created. Usually takes 20+secs. Needed as Role assignment needs a fully deployed servicePrincipal

$servicePrincipal = $servicePrincipal.Id.Guid
$JSON.parameters.SPObjectId.value = $servicePrincipal
#Write-Host "replace ADUser variable with value in arm template"
$JSON | ConvertTo-Json -Depth 100 | Set-Content -Path $TemplateParametersFile

#$SPObjectId = Get-AzureRmADServicePrincipal –SearchString "JSStarter"| Where-Object {$_.ApplicationId -eq $appId.ApplicationId.Guid}
New-AzureRmRoleAssignment -ObjectId $servicePrincipal -RoleDefinitionName Reader -Scope $keyVault.ResourceId

# Set the key vault access policy for Application
Set-AzureRmKeyVaultAccessPolicy -VaultName $KeyVaultName -ResourceGroupName $ResourceGroupName -ObjectId $servicePrincipal -PermissionsToSecrets list, get

########## Allow Credentials for AD Application to access Key Vault ###########
$VaultEndpoint = "https://$KeyVaultName.vault.azure.net/"

$ClientSecret = New-AzureADApplicationPasswordCredential -ObjectId $ObjectId.ObjectId | Select-Object -Property Value
$ClientSecret = $ClientSecret.Value
#$ClientSecret = convertto-securestring -force -asplaintext -string $ClientSecret.Value

$ClientId = Get-AzureADApplication -ObjectId $ObjectId.ObjectId | Select-Object -Property AppId
$ClientId = $ClientId.AppId

#At this point we should be able to access KeyVault using the 3 keys above (ClientSecret, VaultEndpoint, and ClientId). 
$secret = 
@"
{
  "ClientSecret": "$ClientSecret",
  "VaultEndpoint": "$VaultEndpoint",
  "ClientId": "$ClientId"
}
"@
    
#Update your secrets.json based on the file below.
$secret | Set-Content $env:APPDATA\Microsoft\UserSecrets\$secretsGuid\secrets.json

########## Creat Blob Storage and Get Keys ##########
$StorageAccount = New-AzureRmStorageAccount -ResourceGroupName $ResourceGroupName `
  -Name "$BlobStorageName" `
  -SkuName Standard_LRS `
  -Location $ResourceGroupLocation `
  -Kind Storage

$ctx = $StorageAccount.Context

$ContainerName = "profile"
New-AzureStorageContainer -Name $ContainerName -Context $ctx -Permission blob

$BlobKey = `
	(Get-AzureRmStorageAccountKey `
	-ResourceGroupName $ResourceGroupName `
	-Name $BlobStorageName).Value[0]

# helper to turn PSCustomObject into a list of key/value pairs
function Get-ObjectMembers {
	[CmdletBinding()]
	Param(
		[Parameter(Mandatory=$True, ValueFromPipeline=$True)]
		[PSCustomObject]$obj
	)
	$obj | Get-Member -MemberType NoteProperty | ForEach-Object {
		$key = $_.Name
		[PSCustomObject]@{Key = $key; Value = $obj."$key"}
	}
}
    
$KeyVaultSecrets = @"
[{ 
"ConnectionStrings--DefaultConnection": "Server=tcp:$SqlServer.database.windows.net,1433;Initial Catalog=$SqlDB;Persist Security Info=False;User ID=$sqlUserName;Password=$secureSqlPassword;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;",
"Token--Key": "$secureTokenKey",                      
"Token--Issuer": "$TokenIssuer",                
"MailService--Key": "$SendGridKey",                
"MailService--User": "$SendGridUser",              
"BlobService--Account": "$BlobStorageName",        
"BlobService--Key": "$BlobKey",                
"SeedAccount--UserName": "$SeedUserName",    
"SeedAccount--Password": "$secureSeedPassword",
"ClientSecret": "$ClientSecret",
"VaultEndpoint": "$VaultEndpoint",
"ClientId": "$ClientId",
"sqlUserName": "$SqlUserName",
"sqlPassword": "$secureSqlPassword"
}] 
"@

$KeyVaultSecrets | ConvertFrom-Json | Get-ObjectMembers | foreach {
   $secretvalue = ConvertTo-SecureString $_.Value -AsPlainText -Force
	  Set-AzureKeyVaultSecret -VaultName $keyVaultName -Name $_.Key -SecretValue $secretvalue
}

New-AzureRmResourceGroupDeployment -Name ((Get-ChildItem $TemplateFile).BaseName + '-' + ((Get-Date).ToUniversalTime()).ToString('MMdd-HHmm')) `
                                   -ResourceGroupName $ResourceGroupName `
                                   -TemplateFile $TemplateFile `
                                   -TemplateParameterFile $TemplateParametersFile `
								   @OptionalParameters `
                                   -Force -Verbose `
                                   -ErrorVariable ErrorMessages
if ($ErrorMessages) {
    Write-Output '', 'Template deployment returned the following errors:', @(@($ErrorMessages) | ForEach-Object { $_.Exception.Message.TrimEnd("`r`n") })
}
