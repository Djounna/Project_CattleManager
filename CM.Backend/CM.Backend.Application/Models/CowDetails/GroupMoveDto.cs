namespace CM.Backend.Application.Models.CowDetails;
public class GroupMoveDto
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
    /// Source Group
    /// </summary>
    public int? SourceGroupId { get; set; }

    /// <summary>
    /// Destination Group
    /// </summary>
    public int DestinationGroupId { get; set; }
}
