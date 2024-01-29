using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Jobs;

namespace CM.Backend.Domain.Infrastructures;
public class Pen : BaseEntity
{
    public string Name { get; set; }
    public int Size { get; set; }

    public virtual ICollection<Cow> Cows { get; } = new List<Cow>();
    public virtual ICollection<Job> Jobs { get; } = new List<Job>();
}
