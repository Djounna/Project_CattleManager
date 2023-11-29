using CM.Backend.Domain.Jobs;

namespace CM.Backend.Domain.Workers;
public class Worker
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? AuthId { get; set; }

    public ICollection<WorkerJob> WorkerJobs { get; set; } = new List<WorkerJob>();
}
