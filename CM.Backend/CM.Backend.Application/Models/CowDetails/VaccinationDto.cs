namespace CM.Backend.Application.Models.CowDetails;

/// <summary>
/// Vaccination Dto
/// </summary>
public class VaccinationDto
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
    /// Cow Id
    /// </summary>
    public int CowId { get; set; }

    /// <summary>
    /// Date
    /// </summary>
    public DateTime Date { get; set; }
}
