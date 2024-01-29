namespace CM.Backend.Application.Models.Cows;
public class GroupDetailsDto
{

    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Description
    /// </summary>
    public string? Description { get; set; }

    /// <summary>
    /// Image link
    /// </summary>
    public string? ImgLink { get; set; }

    /// <summary>
    /// Cattle list 
    /// </summary>
    public List<CowDto> Cows {get; set; } = new List<CowDto>();
}
