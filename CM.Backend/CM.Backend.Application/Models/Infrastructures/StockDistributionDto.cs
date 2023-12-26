namespace CM.Backend.Application.Models.Infrastructures;

/// <summary>
/// StockDistribution Dto
/// </summary>
public class StockDistributionDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Daily Volume
    /// </summary>
    public int DailyVolume { get; set; }

    /// <summary>
    /// Stock Id
    /// </summary>
    public int StockId { get; set; }

    /// <summary>
    /// Pen Id
    /// </summary>
    public int PenId { get; set; }

}
