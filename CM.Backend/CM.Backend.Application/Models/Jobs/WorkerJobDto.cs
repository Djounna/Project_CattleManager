namespace CM.Backend.Application.Models.Jobs;

/// <summary>
/// Worker Job Dto
/// </summary>
public class WorkerJobDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Worker Id
    /// </summary>
    public int UserId { get; set; }
    //public virtual Worker Worker { get; set; }

    /// <summary>
    /// Job Id
    /// </summary>
    public int JobId { get; set; }
    //public virtual Job Job { get; set; }
}
