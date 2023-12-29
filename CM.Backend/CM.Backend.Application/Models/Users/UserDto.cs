namespace CM.Backend.Application.Models.Users;

/// <summary>
/// user Dto
/// </summary>
public class UserDto
{
    /// <summary>
    /// UserName
    /// </summary>
    public string UserName { get; set; }

    /// <summary>
    /// Email
    /// </summary>
    public string Email { get; set; }

    /// <summary>
    /// Role Id
    /// </summary>
    public int RoleId { get; set; }
}
