namespace CM.Backend.Application.Models.Notifications;

/// <summary>
/// Alert Dto
/// </summary>
public class AlertDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Title
    /// </summary>
    public string Title { get; set; }

    /// <summary>
    /// Description
    /// </summary>
    public string Description { get; set; }

    /// <summary>
    /// Level 
    /// </summary>
    public string Level { get; set; }

    /// <summary>
    /// Cow Id
    /// </summary>
    public int? CowId { get; set; }

    /// <summary>
    /// Pen Id
    /// </summary>
    public int? PenId { get; set; }
}
