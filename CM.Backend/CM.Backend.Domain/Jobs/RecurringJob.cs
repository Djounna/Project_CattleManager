using CM.Backend.Domain.Base;
using CM.Backend.Domain.Infrastructures;

namespace CM.Backend.Domain.Jobs;
public class RecurringJob : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int? Length { get; set; }

    public int? PenId { get; set; }
    public virtual Pen? Pen { get; set; }

    public virtual ICollection<Job> Jobs { get; set; } = new List<Job>();
}