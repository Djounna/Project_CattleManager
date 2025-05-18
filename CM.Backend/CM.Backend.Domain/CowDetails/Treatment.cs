using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;

namespace CM.Backend.Domain.CowDetails;
public class Treatment : BaseEntity
{
    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }

    public int? ConditionId { get; set; }
    public virtual Condition Condition { get; set; }

    public string Name { get; set; }
    public string Type { get; set; }
    public DateOnly Date { get; set; }
}
