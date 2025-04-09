using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Infrastructures;
using CM.Backend.Application.Models.Users;

namespace CM.Backend.Application.Models.Jobs;
public class JobDetailsDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }
    /// <summary>
    /// Name
    /// </summary>
    public string Title { get; set; }
    /// <summary>
    /// Description
    /// </summary>
    public string Description { get; set; }
    /// <summary>
    /// Status
    /// </summary>
    public string Status { get; set; }
    /// <summary>
    /// Date
    /// </summary>
    public DateTime Date { get; set; }
    /// <summary>
    /// Infos
    /// </summary>
    public string? Infos { get; set; }
    
    /// <summary>
    /// Pen dto
    /// </summary>
    public PenDto? Pen { get; set; }

    /// <summary>
    /// Pen dto
    /// </summary>
    public CowDto? Cow { get; set; }

    /// <summary>
    /// Assigned workers
    /// </summary>
    public List<UserDto>? Workers { get; set; } = new List<UserDto>();
}
