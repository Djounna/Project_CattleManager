using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Models.Infrastructures;
public class PenDetailsDto
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
    /// Size
    /// </summary>
    public int Size { get; set; }

    /// <summary>
    /// Cattle list 
    /// </summary>
    public List<CowDto> Cows { get; set; } = new List<CowDto>();
}

public class AssignPenDetailsDto
{
    public PenDetailsDto Pen1 { get; set; }
    public PenDetailsDto Pen2 { get; set; }
}
