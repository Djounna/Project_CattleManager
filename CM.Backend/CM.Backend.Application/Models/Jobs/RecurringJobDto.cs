namespace CM.Backend.Application.Models.Jobs;

/// <summary>
/// Recurring Job Dto
/// </summary>
public class RecurringJobDto
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
    /// Excpected length (in hours)
    /// </summary>
    public int? Length { get; set; }
}
