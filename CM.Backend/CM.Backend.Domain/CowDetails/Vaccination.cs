using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;

namespace CM.Backend.Domain.CowDetails;
public class Vaccination : BaseEntity
{
    public string Name { get; set; }
    public DateOnly Date { get; set; }
    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }
}
