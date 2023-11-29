namespace CM.Backend.Domain.Cows;
public class Group
{
    public int GroupId { get; set; }
    public string Name { get; set; }

    public ICollection<Cow> Cows { get; } = new List<Cow>();
}
