using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Infrastructures;

namespace CM.Backend.Domain.CowDetails;
public class PenMove: BaseEntity
{
    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }

    public DateOnly Date { get; set; }

    public int? SourcePenId { get; set; }
    public virtual Pen? SourcePen { get; set; }

    public int DestinationPenId { get; set; }
    public virtual Pen DestinationPen { get; set; }
}
