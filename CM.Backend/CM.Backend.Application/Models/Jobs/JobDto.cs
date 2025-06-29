﻿namespace CM.Backend.Application.Models.Jobs;

/// <summary>
/// Job Dto
/// </summary>
public class JobDto
{
    /// <summary>
    /// Id
    /// </summary>
    public int Id { get; set; }
    /// <summary>
    /// Name
    /// </summary>
    public string Title { get; set; }
    /// <summary>
    /// Description
    /// </summary>
    public string Description { get; set; }
    /// <summary>
    /// Status
    /// </summary>
    public string Status { get; set; }
    /// <summary>
    /// Date
    /// </summary>
    public DateTime Date { get; set; }
    /// <summary>
    /// Infos
    /// </summary>
    public string? Infos { get; set; }

    /// <summary>
    /// Pen Id
    /// </summary>
    public int? PenId { get; set; }
    //public virtual Pen Pen { get; set; }
    /// <summary>
    /// Cow Id
    /// </summary>
    public int? CowId { get; set; }
    //public  virtual Cow Cow { get; set; }
}
