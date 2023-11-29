using CM.Backend.Domain.Workers;

namespace CM.Backend.Domain.Jobs;
public class WorkerJob
{
    public int WorkerJobId { get; set; }

    public int WorkerId { get; set; }
    public Worker Worker { get; set; }

    public int JobId { get; set; }
    public Job Job { get; set; }
}
