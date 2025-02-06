public class MilkingVolumeDto
{
    /// <summary>
    /// Date
    /// </summary>
    public DateOnly? Date { get; set; }

    /// <summary>
    /// Total Volume
    /// </summary>
    public double Volume { get; set; }

    /// <summary>
    /// Average Volume
    /// </summary>
    public double Average { get; set; }

    /// <summary>
    /// Min Volume
    /// </summary>
    public double Min { get; set; }

    /// <summary>
    /// Max Volume
    /// </summary>
    public double Max { get; set; }
}
