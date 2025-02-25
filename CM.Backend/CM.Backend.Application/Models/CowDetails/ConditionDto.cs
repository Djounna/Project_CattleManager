
/// <summary>
/// Condition Dto
/// </summary>
public class ConditionDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Condition Dto
    /// </summary>
    public int CowId { get; set; }

    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// Type
    /// </summary>
    public string Type { get; set; }
    /// <summary>
    /// Status
    /// </summary>
    public string Status { get; set; }
    /// <summary>
    /// Comment
    /// </summary>
    public string? Comment { get; set; }
    /// <summary>
    /// StartDate
    /// </summary>
    public DateTime StartDate { get; set; }
    /// <summary>
    /// EndDate
    /// </summary>
    public DateTime? EndDate { get; set; }
}
