namespace CM.Backend.Application.Models.CowDetails;

/// <summary>
/// Milk Production Dto
/// </summary>
public class MilkProductionDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Cow Id
    /// </summary>
    public int CowId { get; set; }
    //public virtual Cow Cow { get; set; }

    /// <summary>
    /// Weekly production
    /// </summary>
    public double WeeklyProduction { get; set; }
    /// <summary>
    /// Monthly production
    /// </summary>
    public double MonthlyProduction { get; set; }
    /// <summary>
    /// Average of production
    /// </summary>
    public double LifetimeAverage { get; set; }
    /// <summary>
    /// Total production
    /// </summary>
    public double TotalQuantity { get; set; }
    /// <summary>
    /// Total Days
    /// </summary>
    public double TotalDays { get; set; }
}
