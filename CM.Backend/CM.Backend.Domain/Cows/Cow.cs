using CM.Backend.Domain.Alerts;
using CM.Backend.Domain.Base;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Domain.Jobs;

namespace CM.Backend.Domain.Cows;
public class Cow : BaseEntity
{
    public string Identifier { get; set; }
    public string Name { get; set; }

    public bool MilkCow { get; set; }
    public DateOnly BirthDate { get; set; }
    public string Race { get; set; }
    public string Gender { get; set; }
    public string? ImgLink { get; set; }

    public int? MotherId { get; set; }
    public virtual Cow Mother { get; set; }
    public int? FatherId {  get; set; } 
    public virtual Cow Father { get; set; }

    public int? PenId { get; set; }
    public virtual Pen Pen { get; set; }

    public int? GroupId { get; set; }
    public virtual Group Group { get; set; }

    public virtual ICollection<Job> Jobs { get; } = new List<Job>();
    public virtual ICollection<Intervention> Interventions { get; } = new List<Intervention>();
    public virtual ICollection<Gestation> Gestations { get; } = new List<Gestation>();
    public virtual ICollection<Vaccination> Vaccinations { get; } = new List<Vaccination>();
    public virtual ICollection<GroupMove> GroupMoves { get; } = new List<GroupMove>();
    public virtual ICollection<PenMove> PenMoves { get; } = new List<PenMove>();
    public virtual ICollection<Alert> Alerts { get; } = new List<Alert>();
    public virtual ICollection<Milking> Milkings { get; } = new List<Milking>();
}
