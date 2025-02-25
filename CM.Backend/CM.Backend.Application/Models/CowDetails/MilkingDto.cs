namespace CM.Backend.Application.Models.CowDetails;

public class MilkingDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Milk Production Id
    /// </summary>
    //public int MilkProductionId { get; set; }
    //public virtual MilkProduction MilkProduction { get; set; }

    /// <summary>
    /// Cow Id
    /// </summary>
    public int CowId { get; set; }

    /// <summary>
    /// Date
    /// </summary>
    public DateOnly Date { get; set; }

    /// <summary>
    /// Vaolume (L)
    /// </summary>
    public double Volume { get; set; }

}
