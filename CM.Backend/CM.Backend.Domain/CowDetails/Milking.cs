using CM.Backend.Domain.Base;

namespace CM.Backend.Domain.CowDetails;
public class Milking : BaseEntity
{
    public int MilkProductionId { get; set; }
    public virtual MilkProduction MilkProduction { get; set; }

    public DateOnly Date { get; set; }
    public int Volume { get; set; }     
}
