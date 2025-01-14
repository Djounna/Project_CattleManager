namespace CM.Backend.Application.Models.Cows;

/// <summary>
/// Cow DTO
/// </summary>
public class CowDto
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
    /// Mother Id
    /// </summary>
    public int? MotherId { get; set; }

    /// <summary>
    /// Mother
    /// </summary>
    // public string? Mother { get; set; }

    /// <summary>
    /// Father Id
    /// </summary>
    public int? FatherId { get; set; }

    /// <summary>
    /// Father
    /// </summary>
    // public string? Father { get; set; }

    /// <summary>
    /// PenId
    /// </summary>
    public int? PenId { get; set; }

    /// <summary>
    /// Pen
    /// </summary>
    //public PenDto Pen { get; set; }

    /// <summary>
    /// GroupId
    /// </summary>
    public int? GroupId { get; set; }

    /// <summary>
    /// Group
    /// </summary>
    //public GroupDto Group { get; set; }
}
