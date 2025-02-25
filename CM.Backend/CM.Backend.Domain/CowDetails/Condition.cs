using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;

namespace CM.Backend.Domain.CowDetails;
public class Condition : BaseEntity
{
    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }

    public string Name { get; set; }
    public string Type { get; set; }
    public string Status { get; set; }
    public string? Comment { get; set; }
    public DateOnly StartDate { get; set; }
    public DateOnly? EndDate { get; set; }
}
