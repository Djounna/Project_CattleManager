using CM.Backend.Domain.Base;

namespace CM.Backend.Domain.Cows;
public class Group : BaseEntity
{
    public string Name { get; set; }

    public virtual ICollection<Cow> Cows { get; } = new List<Cow>();
}
