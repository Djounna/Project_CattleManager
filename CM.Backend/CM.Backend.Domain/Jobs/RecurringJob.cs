using CM.Backend.Domain.Base;

namespace CM.Backend.Domain.Jobs;
public class RecurringJob : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public int? Length { get; set; }

    public virtual ICollection<Job> Jobs { get; set; } = new List<Job>();
}