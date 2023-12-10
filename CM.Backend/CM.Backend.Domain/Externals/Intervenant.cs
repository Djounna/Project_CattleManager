using CM.Backend.Domain.Base;
using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Domain.Externals;
public class Intervenant : BaseEntity
{
    public string Name { get; set; }
    public string Type {  get; set; }
    public string Coordinates { get; set; }

    public virtual ICollection<Intervention> Interventions { get; } = new List<Intervention>();
}
