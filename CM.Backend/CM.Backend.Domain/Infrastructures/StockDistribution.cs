using CM.Backend.Domain.Base;

namespace CM.Backend.Domain.Infrastructures;
public class StockDistribution : BaseEntity
{
    public int DailyVolume { get; set; }
    
    public int StockId { get; set; }
    public virtual Stock Stock {get; set;}

    public int PenId {  get; set; }
    public virtual Pen Pen { get; set; }
}
