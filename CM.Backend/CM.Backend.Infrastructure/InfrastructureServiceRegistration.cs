using CM.Backend.Application.Interfaces.Infrastructure;
using CM.Backend.Infrastructure.Auth0;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CM.Backend.Infrastructure;
public static class InfrastructureServiceRegistration
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpClient();
        services.AddScoped<IUserManagementService, AuthZeroManagementApi>();
        return services;
    }
}
