using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using Microsoft.Extensions.Configuration.UserSecrets;
using System.IO;

namespace StarterKit.Test
{
    class GetConfiguration
    {
        public static IConfigurationRoot GetIConfiguration()
        {
            return new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true)
                .AddUserSecrets<Startup>()
                .AddEnvironmentVariables()
                .Build();
        }
    }
}
