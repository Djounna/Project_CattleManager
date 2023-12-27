using Microsoft.AspNetCore.Authorization;

namespace CM.Backend.Presentation.Handlers;

public class HasScopeRequirement : IAuthorizationRequirement
{
    public HasScopeRequirement(string scope, string issuer)
    {
        Issuer = issuer ?? throw new ArgumentNullException(nameof(issuer));
        Scope = scope ?? throw new ArgumentNullException(nameof(scope));
    }

    public string Issuer { get; }
    public string Scope { get; }
}
