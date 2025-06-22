namespace CM.Backend.Application.Models.Users;

/// <summary>
/// User Dto
/// </summary>
public class UserDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// UserName
    /// </summary>
    public string Username { get; set; }

    /// <summary>
    /// Email
    /// </summary>
    public string Email { get; set; }

    /// <summary>
    /// AuthId
    /// </summary>
    public string IdAuth { get; set; }

    /// <summary>
    /// Role Id
    /// </summary>
    public int RoleId { get; set; }
}
