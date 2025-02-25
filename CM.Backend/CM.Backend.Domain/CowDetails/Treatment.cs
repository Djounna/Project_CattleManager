using CM.Backend.Domain.Base;

namespace CM.Backend.Domain.CowDetails;
public class Treatment : BaseEntity
{
    public int ConditionId { get; set; }
    public virtual Condition Condition { get; set; }

    public string Name { get; set; }
    public string Type { get; set; }
    public DateOnly Date { get; set; }
}
