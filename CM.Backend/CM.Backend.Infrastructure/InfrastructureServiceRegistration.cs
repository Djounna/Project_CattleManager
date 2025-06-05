using CM.Backend.Application.Interfaces.Infrastructure;
using CM.Backend.Infrastructure.Auth0;
using CM.Backend.Infrastructure.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CM.Backend.Infrastructure;
public static class InfrastructureServiceRegistration
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpClient();
        services.AddSignalR();
        services.AddScoped<INotificationService, SignalRNotificationService>();
        services.AddScoped<IUserManagementService, AuthZeroManagementApi>();
        return services;
    }
}
