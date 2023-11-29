using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Domain.Jobs;
public class RecurringJob
{
    public int RecurringJobId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Length { get; set; }

    public ICollection<Job> Jobs { get; set; }
}