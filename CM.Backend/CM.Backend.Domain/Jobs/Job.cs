using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Infrastructures;

namespace CM.Backend.Domain.Jobs;
public class Job : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Status { get; set; }

    public int Length { get; set; }
    public int? RecurringJobId { get; set; }
    public virtual RecurringJob RecurringJob { get; set; }
    public int? PenId { get; set; }
    public virtual Pen Pen { get; set; }
    public int? CowId { get; set; }
    public  virtual Cow Cow { get; set; }

    public ICollection<WorkerJob> WorkerJobs { get; set; } = new List<WorkerJob>();

}
