using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;

namespace CM.Backend.Domain.CowDetails;
public class MilkProduction : BaseEntity
{
    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }

    public double WeeklyProduction { get; set; }
    public double MonthlyProduction { get; set; }
    public double LifetimeAverage { get; set; }
    public double TotalQuantity { get; set; }
    public double TotalDays { get; set; }

    //public virtual ICollection<Milking> Milkings { get; } = new List<Milking>();
}
