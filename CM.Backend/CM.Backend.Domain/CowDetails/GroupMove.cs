using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;

namespace CM.Backend.Domain.CowDetails;
public class GroupMove: BaseEntity
{
    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }

    public DateOnly Date { get; set; }

    public int? SourceGroupId { get; set; }
    public virtual Group? SourceGroup { get; set; }

    public int DestinationGroupId { get; set; }
    public virtual Group DestinationGroup { get; set; }
}
