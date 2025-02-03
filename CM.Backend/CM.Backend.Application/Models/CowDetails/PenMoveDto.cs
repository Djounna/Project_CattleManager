namespace CM.Backend.Application.Models.CowDetails;
public class PenMoveDto
{
    /// <summary>
    /// Cow Id 
    /// </summary>
    public int CowId { get; set; }

    /// <summary>
    /// Date
    /// </summary>
    public DateOnly Date { get; set; }

    /// <summary>
    /// Source Pen
    /// </summary>
    public int? SourcePenId { get; set; }

    /// <summary>
    /// Destination Pen
    /// </summary>
    public int DestinationPenId { get; set; }
}
