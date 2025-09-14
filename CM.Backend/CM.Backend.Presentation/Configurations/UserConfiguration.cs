using CM.Backend.Presentation.Services;

namespace CM.Backend.Presentation.Configurations;

public static class UserConfiguration
{
    public static IServiceCollection AddUserContext(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpContextAccessor();
        services.AddScoped<UserContext>();
        return services;
    }
}
