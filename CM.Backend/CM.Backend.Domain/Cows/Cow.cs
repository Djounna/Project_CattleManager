namespace CM.Backend.Domain.Cows;
public class Cow
{
    public int CowId { get; set; }
    public string Identifier { get; set; }
    public string Name { get; set; }

    public DateOnly BirthDate { get; set; }
    public string Race { get; set; }
    public string Status { get; set; }
    public bool Sex { get; set; }

    public int? PenId { get; set; }
    public Pen Pen { get; set; }

    public int? GroupId { get; set; }
    public Group Group { get; set; }

    public ICollection<Job> Jobs { get; } = new List<Job>();
    public ICollection<Intervention> Interventions { get; } = new List<Intervention>();
    public ICollection<Gestation> Gestations { get; } = new List<Gestation>();


}