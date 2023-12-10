using CM.Backend.Domain.Workers;

namespace CM.Backend.Domain.Jobs;
public class WorkerJob
{
    public int WorkerId { get; set; }
    public virtual Worker Worker { get; set; }

    public int JobId { get; set; }
    public virtual Job Job { get; set; }
}
