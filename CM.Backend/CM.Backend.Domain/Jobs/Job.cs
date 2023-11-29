using CM.Backend.Domain.Cows;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Domain.Jobs;
public class Job
{
    public int JobId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Status { get; set; }

    public int Length { get; set; }
    public int? RecurringJobId { get; set; }
    public RecurringJob RecurringJob { get; set; }
    public int? PenId { get; set; }
    public Pen Pen { get; set; }
    public int? CowId { get; set; }
    public Cow Cow { get; set; }

    public ICollection<WorkerJob> WorkerJobs { get; set; } = new List<WorkerJob>();

}
