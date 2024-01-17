namespace CM.Backend.Application.Models.CowDetails;

/// <summary>
/// Intervention Dto
/// </summary>
public class InterventionDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id {  get; set; } 

    /// <summary>
    /// Cow Id
    /// </summary>
    public int CowId { get; set; }
    //public virtual Cow Cow {get; set;}

    /// <summary>
    /// Intervenant Id
    /// </summary>
    public int IntervenantId { get; set; }
    //public virtual Intervenant Intervenant { get; set; }

    /// <summary>
    /// Type
    /// </summary>
    public string Type { get; set; }

    /// <summary>
    /// Status
    /// </summary>
    public string Status { get; set; }

    /// <summary>
    /// Date
    /// </summary>
    public DateOnly? Date { get; set; }

    /// <summary>
    /// Description
    /// </summary>
    public string? Description { get; set; }

}
