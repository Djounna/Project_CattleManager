namespace CM.Backend.Application.Models.CowDetails;

/// <summary>
/// Gestation Dto
/// </summary>
public class GestationDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Cow Id
    /// </summary>
    public int CowId { get; set; }


    /// <summary>
    /// Status
    /// </summary>
    public string Status { get; set; }

    /// <summary>
    /// Start Date
    /// </summary>
    public DateOnly StartDate { get; set; }

    /// <summary>
    /// Calving Date
    /// </summary>
    public DateOnly? CalvingDate { get; set; }
}
