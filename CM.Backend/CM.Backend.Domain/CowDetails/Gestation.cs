using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;

namespace CM.Backend.Domain.CowDetails;
public class Gestation : BaseEntity
{
    public int CowId { get; set; }
    public virtual Cow Cow { get; set; }

    public string Status { get; set; }
    public DateOnly StartDate { get; set; }
    public DateOnly? CalvingDate { get; set; }

}
