using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Infrastructures;

namespace CM.Backend.Domain.Alerts;

public class Alert : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string Level { get; set; }

    public int? CowId { get; set; }
    public virtual Cow? Cow { get; set; }

    public int? PenId { get; set; }
    public virtual Pen? Pen { get; set; }
}
