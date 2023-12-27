using CM.Backend.Presentation.Handlers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace CM.Backend.Presentation.Configurations;

public static class AuthConfiguration
{
    public static IServiceCollection AddAuthenticationJwtBearer(this IServiceCollection services,
        IConfiguration configuration)
    {
        var domain = configuration["Auth0:Domain"];
        var audience = configuration["Auth0:Audience"];

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => {
                    options.Authority = domain;
                    options.Audience = audience;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        NameClaimType = ClaimTypes.NameIdentifier
                    };
                });

        services.AddAuthorization(options =>
        {
            options.AddPolicy("read:jobs",
                policy => policy.Requirements.Add(new HasScopeRequirement("read:jobs", domain)));
            options.AddPolicy("write:jobs",
                policy => policy.Requirements.Add(new HasScopeRequirement("write:jobs", domain)));
            options.AddPolicy("read:cows",
                policy => policy.Requirements.Add(new HasScopeRequirement("read:cows", domain)));
            options.AddPolicy("write:cows",
                policy => policy.Requirements.Add(new HasScopeRequirement("write:cows", domain)));
            options.AddPolicy("read:infrastructures",
                policy => policy.Requirements.Add(new HasScopeRequirement("read:infrastructures", domain)));
            options.AddPolicy("write:infrastructures",
                policy => policy.Requirements.Add(new HasScopeRequirement("write:infrastructures", domain)));
        });

        services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

        return services;
    }
}
