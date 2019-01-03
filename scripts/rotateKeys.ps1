
$OptionalParameters = New-Object -TypeName Hashtable
$ResourceGroupLocation = "West US 2"
$ResourceGroupName = "jsstarter"
$secretsGuid = 'f986c0ad-1451-4764-ab20-4f8fb8512e46'

$secrets = Get-Content $env:APPDATA\Microsoft\UserSecrets\$secretsGuid\secrets.json | ConvertFrom-Json
#$SendGridKey="SG.xxxxxxxxxx-xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
#$SendGridUser="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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
$ObjectId = Get-AzureADApplication –SearchString $appName
$VaultEndpoint = "https://$KeyVaultName.vault.azure.net/"

Connect-AzureRmAccount

#if you have multiple subscriptions you will need to include this
Get-AzureRmSubscription | Where-Object {$_.Name -eq "Brian Harney"} | Set-AzureRmContext

$TenantId = Get-AzureRmSubscription | Where-Object {$_.Name -eq "Brian Harney"} | Select-Object -Property TenantId
$TenantId = $TenantId.TenantId
Connect-AzureAD -TenantId $TenantId
#$ObjectId = New-AzureADApplication -DisplayName $appName -IdentifierUris "https://www.$ResourceGroupName.azurewebsites.net" | Select-Object -Property ObjectId
$ObjectId = Get-AzureADApplication –SearchString $appName | Select -First 1
$ResourceGroupName = "jsstarter"
$KeyVaultName = -join("$ResourceGroupName","vault")
$VaultEndpoint = "https://$KeyVaultName.vault.azure.net/"

$ClientSecret = New-AzureADApplicationPasswordCredential -ObjectId $ObjectId.ObjectId | Select-Object -Property Value -First 1
$ClientSecret = $ClientSecret.Value

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
$secret | Set-Content $env:APPDATA\Microsoft\UserSecrets\$secretsGuid\secrets.json
