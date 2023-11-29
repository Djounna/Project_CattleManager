using CM.Backend.Domain.Cows;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Domain.CowDetails;
public class MilkProduction
{
    public int MilkProductionId { get; set; }
    public int CowId { get; set; }
    public Cow Cow { get; set; }

    public double WeeklyProduction { get; set; }
    public double MonthlyProduction { get; set; }
    public double LifetimeAverage { get; set; }
    public double TotalQuantity { get; set; }
    public double TotalDays { get; set; }

    public ICollection<Milking> Milkings { get; } = new List<Milking>();
}
