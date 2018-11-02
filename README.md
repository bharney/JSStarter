# JSStarter
JSStarter for creating a React App with Key Vault using ARM Template. Using Powershell we can leverage infrastructure as code and automate deployment, script configuration, and manage secrets. The AzureResourceGroup project handles the ARM template and configuration to manage the environment locally and during deployment. The readme explains how to setup the project to script your own Azure Resources with KeyVault, ultimately avoiding having to commit secrets to source control.

The Application uses a Front-End React/Redux and Back-End .Net Core 2.1 API with SQL Server/EF Core and .Net Core Identity Authentication/Authroization. The site takes advantage of Server-Side Rendering and Lazy Loading based on Routes. Authentication is built into the App with JWT and Authorize attributes on controllers. 
 
# Technology Stack
 - .NET Core/ C# 2.1
 - React 16.3/ JavaScript
 - TypeScript
 - Redux
 - Webpack 4
 - SCSS
 - Bootstrap 4
 - Font-Awesome 5
 - Server-Side Rendering(SSR)
 - Lazy Loading(React-Loadable)
 - Hot Module Reloading(HMR)
 - Azure Resourcee Manager(ARM) Template
 - Key Vault
 - JWT Bearer Token
 
# Dependencies/ Requirements
 - Azure Subscription
 - Azure PowerShell
 - VS 2017 or .Net Core Service Pack
 - Node >= 8.9.4
 - Webpack 4
 - Node-Sass

# Setup KeyVault and Azure Resources
Before you go any further. This template is built on the idea that you will be hosting the site in the cloud with Azure. This takes advantage of Azures Resource Manager, Key Vault, SQL Server, and App Services. Before you do anything you will need to have an azure subscription. Below walks through the commands. The entire [PowerShell Script can be found here](https://github.com/bharney/powershell).

## Set Subscription Context using PowerShell
Get started by connecting to your Azure subscription and setting the correct subscription context. Make sure you have the [Azure PowerShell Module installed](https://docs.microsoft.com/en-us/powershell/azure/install-azurerm-ps?view=azurermps-6.11.0) when running locally. If you have multiple subscriptions, simply run `Get-AzureRmSubscription` to return a list of your subscriptions with `subscriptionId` and `tenantId`. Copy and paste the values into the command below. Setting the context will make sure you run the commands against the correct subscription and tenant.

```
Connect-AzureRmAccount

Get-AzureRmSubscription -SubscriptionId "xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" -TenantId "xxxxxxx-xx
xx-xxxx-xxxx-xxxxxxxxx" | Set-AzureRmContext
```

## Create Resource Group using PowerShell 
Before we can create the KeyVault we need a Resource Group. Which is just a logical grouping. You can [create the ResourceGroup by running the following PowerShell command](https://docs.microsoft.com/en-us/powershell/module/azurerm.resources/new-azurermresourcegroup?view=azurermps-6.11.0).

```
$ResourceGroupName = 'JSStarter'
$ResourceGroupLocation = 'Central US'

New-AzureRmResourceGroup $ResourceGroupName $ResourceGroupLocation
```

## Create your Azure KeyVault
There is a dependency on KeyVault before you can create the other Azure Resources or even run the ARM template. So make sure to create the KeyVault first. See additional information about [how to create an Azure KeyVault](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-keyvault-parameter). Run the following command to create a KeyVault.

```
$KeyVaultName = "JSStarterVault"
$ResourceGroupName="JSStarter"
$ResourceGroupLocation="Central US"

New-AzureRmResourceGroup -Name $ResourceGroupName -Location $ResourceGroupLocation

New-AzureRmKeyVault `
  -VaultName $KeyVaultName `
  -resourceGroupName $ResourceGroupName `
  -Location $ResourceGroupLocation `
  -EnabledForTemplateDeployment

```
In a future step you will need this KeyVaults `ObjectId`. Copy and Paste the ObjectId for this KeyVault, so you can access it later.  

## Allow your Application to Access KeyVault
When the program starts, it will try to access KeyVault. But the Application needs to provide a Key, and have permissions to do that. To do this you will need make sure you have an Azure AD Application setup. You will need to install AD-Module for PowerShell, and create an AAD. Additional Resources can be found here about [how to install AzureAD Module to run these commands via PowerShell](http://blog.octavie.nl/index.php/2017/09/13/creating-azure-ad-app-registration-with-powershell-part-1). And please see [instructions on how to create an Azure AD Application here](https://blogs.msdn.microsoft.com/azuresqldbsupport/2017/09/01/how-to-create-an-azure-ad-application-in-powershell/). You will need the AAD tenantId. Simply run `Get-AzureRmSubscription` to return a list of your subscriptions with `tenantId`. Copy and paste that value into the command below to connect to your AzureAD.

```
Connect-AzureAD -TenantId "xxxxxx-xxxx-xxxx-xxxxxxxxxxx"
```

## Get the MSI_CLIENT / ClientId
We will grant the Application itself access to KeyVault. This is done through App Registration. Allowing your application to have its own Service Principal. This is what allows the app access to the KeyVault. Your authenticating the application through Azure AD using the Service Principal to access the KeyVault. Additionaly, the Application will need an appropriate Access Policy. [Read more about the auth flow here](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview). Create a new Appication Registration by running the command below. 

```
$appName = "JSStarter"
$appURI = "https://www.jsstarter.azurewebsites.net"
$appHomePageUrl = "https://JSStarter.azurewebsites.net"
$appReplyURLs = @($appURI, $appHomePageURL, "https://localhost:5000")
if(!($myApp = Get-AzureADApplication -Filter "DisplayName eq '$($appName)'"  -ErrorAction SilentlyContinue))
{
    $myApp = New-AzureADApplication -DisplayName $appName -IdentifierUris $appURI -Homepage $appHomePageUrl -ReplyUrls $appReplyURLs   
}
```
Copy and Paste the Application Id into your `secrets.json` file for the `MSI_CLIENT` value. 

## Generate MSI_SECRET
Once the App is registered we will need to get our KeyVaults ObjectId to add an Application Key. This is a randomly generated Guid that will be used by the application to access the KeyVault. Run the command below making sure to populate the value with your KeyVaults `ObjectId`

```
New-AzureADApplicationPasswordCredential -ObjectId "xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
```

We are going to call this generated Key the MSI_SECRET. Remember to copy the Key that is generated because you will not be able to access this later. IMPORTANT: It will forever be ******* after this point. 

## Add Secrets to KeyVault
Add the following secrets to the KeyVault. There is a file `scripts/secrets.json` containing a json object of key value pairs. You will replace the values in the file with your own.

```
{
  "ConnectionStrings--DefaultConnection": "Server=tcp:[sqlServer].database.windows.net,1433;Initial Catalog=[sqlDB];Persist Security Info=False;User ID=[sqlUserName];Password=[sqlPassword];MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;",
  "Token--Key": "[YOUR_KEY]",                      --Token Key is use for JWT to be used for cryptographic signiture.
  "Token--Issuer": "[YOUR_ISSUER]",                --Token Issuer is generally the authority issuing JWT or your domain.
  "MailService--Key": "[YOUR_KEY]",                --Mail Service Key is your SendGrid key.
  "MailService--User": "[YOUR_USER]",              --Mail Service User is the user for SendGrid.
  "BlobService--Account": "[YOUR_ACCOUNT]",        --Azure Blob Storage account.
  "BlobService--Key": "[YOUR_KEY]",                --Azure Blob storage Key.
  "SeedAccount--UserName": "[YOUR_SEED_EMAIL]",    --Admin Seed Data Account.
  "SeedAccount--Password": "[YOUR_SEED_PASSWORD]", --Admin Seed Data Account Password.
  "MSI_SECRET": "[YOUR_MSI_SECRET]",               --This the Application Credentials that you generated for Azure App Registration.
  "MSI_ENDPOINT": "[YOUR_KEY_VAULT_URL]/",         --Key Vault Endpoint Url.
  "MSI_CLIENT": "[YOUR_AZURE_AD_APP_ID]",          --Azure Active Directory App Id.
}
```

These need to be added to the KeyVault befor deploying the ARM template. After you have updated your `secrets.json` file with your own values, run the command below to add the secrets to your KeyVault.

```
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
	$secretsJson = Get-Content secrets.json
	$secrets = "[" + $secretsJson + "]"
	$secrets | ConvertFrom-Json | Get-ObjectMembers | foreach {
		   $secret = $_.Value
	   	$secretvalue = ConvertTo-SecureString $secret -AsPlainText -Force
   		Set-AzureKeyVaultSecret -VaultName $keyVaultName -Name $_.Key -SecretValue $secretvalue
 }
```
# Deploy Azure Resource Manager Template
Now that you have a KeyVault, Credentials for your app, and secrets in the KeyVault you will use these in combination with the ARM Template and set the resources up with correct access policies and credentials. When running locally we will pull the MSI_SECRET and MSI_CLIENT from `secrets.json`. And when deploying we are able to retrieve the values needed to access Key Vault, from `appsettings` in Azure. The appsettings are set and managed directly from the AzureResourceGroup project and ARM template is run during deployment in AzureDevOps. Deploy the Azure Resources by right clicking on the AzureResourceGroup project. 
 
 - AzureResourceGroup > Deploy > New... 
 
A user interface will popup to allow you to select your Subscription and Resource Group. Select the Resource Group you created earlier. And Deploy the template. More information can been found about [Azure Resource Manager templates here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates/). Once the deployment is completed, you now have the following infrastructure created in Azure:

 - App Service Plan
 - App Service
 - App Insights
 - SQL Server
 - SQL DB
 - Key Vault
 - Blob Storage
 
 Additionally, the App Service will have the corresponding App Settings defined based on the ARM Template.

## User Secrets Manager
One of the main problems with handling secrets in .NET Core has been working locally vs deploying to production in Azure. When working locally, I am getting my secrets for accessing the KeyVault using the user secrets manager built into VS 2017. And on `Program.cs` I access the `secrets.json` and use those to request the KeyVault List of secrets. Then adding those values to the config file. 

This prevents me from accidentally committing secrets to source control. I store the key vault access keys/secrets in a `secrets.json` outside of source control, and VS2017 handles the file for me. It adds a property to the .proj file pointing to the location of `secrets.jon` in `%APPADATA%`. Additional information can be found [here](https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-2.1&tabs=windows): 
 - Solution Explorer > Right click on `StarterKit > Manage User Secrets`
![image](https://user-images.githubusercontent.com/8311928/47606608-7e46f200-d9ca-11e8-967f-e760f80b1171.png)
 
We then use this area as the Key to our KeyVault.
 
```
{
  "MSI_SECRET": "[YOUR_MSI_SECRET]",
  "MSI_ENDPOINT": "[YOUR_KEY_VAULT_URL]/",
  "MSI_CLIENT": "[YOUR_AZURE_AD_APP_ID]",
}
```
Wow. That was a lot of setup. And your right. But this setup allows you to maintain configuration in source control, without having to check-in your secrets. Your now ready to run the project locally! ::tada::
 
 # Pre-Install
 Install Webpack
 - `npm install webpack webpack-cli node-sass -g`
 
 # Setup Project Locally
 - Navigate to Project Directory
 - `dotnet restore`
 - `dotnet build`
 
# Run Project
 - `dotnet run`
 
# Set Environment in PowerShell
These commands allow you to view the project in release mode vs local development. Just run the command to set the environment variable and run the project normally. Based on the env flag, it will minify and get the buil ready for production. By default, when publishing the application will be set to Production.
 - `$Env:ASPNETCORE_ENVIRONMENT = "Development"`
 - `$Env:ASPNETCORE_ENVIRONMENT = "Production"` 


# Deploy
Now that we have the setup done, we can Publish the project. In my own project I've setup a CI pipeline in AzureDevOps that allows me to deploy with CI after committing to `master`. Make sure to uncomment the lines in the ARM template for MSI_SECRET. These have been commented out for easy local setup as there are quite a few steps for Azure AD and Service Principal.

For the sake of time we will just deploy the ARM template by right clicking the AzureResourceGroup project > Deploy > New... and enter your credentials and parameter values needed. You will need to make sure you are signed into Visual Studio to ensure that you have permissions to Deploy the resources to Azure. 

Once that completes we will run the migration to ensure your DB has been updated. [See more information about EF migrations here](https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/)

```
dotnet ef database update
```
The final step is to publish. You can publish via PowerShell by downloading your publish settings file. [See more information about how to do that here](https://docs.microsoft.com/en-us/azure/vs-azure-tools-publishing-using-powershell-scripts). The easy option is to right click the Project > Publish... It will ask you for a publish target and you follow the GUI to deploy your Application to Azure App Service.
