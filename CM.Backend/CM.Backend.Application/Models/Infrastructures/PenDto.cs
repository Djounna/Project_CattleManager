namespace CM.Backend.Application.Models.Infrastructures;

/// <summary>
/// Pen Dto
/// </summary>
public class PenDto
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
    /// Size
    /// </summary>
    public int Size { get; set; }

    /// <summary>
    /// Coordinates
    /// </summary>
    public string? Coordinates { get; set; }
}
