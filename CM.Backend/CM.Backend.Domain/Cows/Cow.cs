using CM.Backend.Domain.Base;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Domain.Jobs;

namespace CM.Backend.Domain.Cows;
public class Cow : BaseEntity
{
    public string Identifier { get; set; }
    public string Name { get; set; }

    public DateOnly BirthDate { get; set; }
    public string Race { get; set; }
    public string Gender { get; set; }

    public int? PenId { get; set; }
    public virtual Pen Pen { get; set; }

    public int? GroupId { get; set; }
    public virtual Group Group { get; set; }

    public virtual ICollection<Job> Jobs { get; } = new List<Job>();
    public virtual ICollection<Intervention> Interventions { get; } = new List<Intervention>();
    public virtual ICollection<Gestation> Gestations { get; } = new List<Gestation>();
}