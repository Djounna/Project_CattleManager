using CM.Backend.Application.Models.CowDetails;
using CM.Backend.Application.Models.Infrastructures;
using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Models.Cows;
public class CowDetailsDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Identifier
    /// </summary>
    public string Identifier { get; set; }

    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Is Mikl Cow 
    /// </summary>
    public bool MilkCow { get; set; }

    /// <summary>
    /// BirthDate
    /// </summary>
    public DateTime BirthDate { get; set; }

    /// <summary>
    /// Race
    /// </summary>
    public string Race { get; set; }

    /// <summary>
    /// Gender
    /// </summary>
    public string Gender { get; set; }

    /// <summary>
    /// ImgLink
    /// </summary>
    public string? ImgLink { get; set; }

    /// <summary>
    /// Pen
    /// </summary>
    public PenDto Pen { get; set; }

    /// <summary>
    /// Group
    /// </summary>
    public GroupDto Group { get; set; }

    /// <summary>
    /// Milk production
    /// </summary>
    public List<MilkingDto>? Milkings {  get; set; }

    /// <summary>
    /// Interventions
    /// </summary>
    public List<InterventionDto>? Interventions { get; set; }

    /// <summary>
    /// Vaccinations
    /// </summary>
    public List<VaccinationDto>? Vaccinations { get; set; }

    /// <summary>
    /// Gestations
    /// </summary>
    public List<GestationDto>? Gestations { get; set; }

    /// <summary>
    /// Genealogy
    /// </summary>
    public GenealogyDto Genealogy { get; set; }

    /// <summary>
    /// Children
    /// </summary>
    public List<CowDto>? Children { get; set; }

    /// <summary>
    /// Pen Moves
    /// </summary>
    public List<PenMoveDto>? PenMoves { get; set; }

    /// <summary>
    /// Group Moves
    /// </summary>
    public List<GroupMoveDto> GroupMoves { get; set;}
}
