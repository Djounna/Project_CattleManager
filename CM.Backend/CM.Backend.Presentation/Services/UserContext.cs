using System.Security.Claims;

namespace CM.Backend.Presentation.Services;

public class UserContext
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UserContext(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public string GetCurrentUsername()
    {
        var user = _httpContextAccessor.HttpContext?.User;
        if (user == null) return null;

        return user.FindFirst(ClaimTypes.Name)?.Value ??
               user.FindFirst("name")?.Value ??
               user.FindFirst("email")?.Value;
    }

    public string GetAuth0Id()
    {
        var user = _httpContextAccessor.HttpContext?.User;
        if (user == null) return null;

        return user.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;
    }

    public List<string> GetCurrentUserRoles()
    {
        var user = _httpContextAccessor.HttpContext?.User;
        if (user == null) return new List<string>();

        return user.FindAll("cattlemanager/roles")
                  .Select(c => c.Value)
                  .ToList();
    }
}
