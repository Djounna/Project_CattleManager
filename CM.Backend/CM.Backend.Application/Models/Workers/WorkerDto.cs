namespace CM.Backend.Application.Models.Workers;
/// <summary>
/// Worker Dto
/// </summary>
public class WorkerDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Auth Id
    /// </summary>
    public string? AuthId { get; set; }
}
