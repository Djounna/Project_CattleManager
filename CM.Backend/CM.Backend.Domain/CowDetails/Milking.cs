using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;

namespace CM.Backend.Domain.CowDetails;
public class Milking : BaseEntity
{
    //public int MilkProductionId { get; set; }
    //public virtual MilkProduction MilkProduction { get; set; }

    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }
    public DateOnly Date { get; set; }
    public double Volume { get; set; }     
}
