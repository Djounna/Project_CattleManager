
/// <summary>
/// Condition Dto
/// </summary>
public class TreatmentDto
{
    /// <summary>
    /// Cow Id
    /// </summary>
    public int CowId { get; set; }

    /// <summary>
    /// Condition Id
    /// </summary>
    public int? ConditionId { get; set; }

    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Comment
    /// </summary>
    public string? Comment { get; set; }

    /// <summary>
    /// Date
    /// </summary>
    public DateTime Date { get; set; }
}
