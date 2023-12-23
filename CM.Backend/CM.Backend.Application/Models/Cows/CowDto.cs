﻿using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Models.Cows;

/// <summary>
/// Cow DTO
/// </summary>
public class CowDto
{
    /// <summary>
    /// Identifier
    /// </summary>
    public string Identifier { get; set; }

    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// BirthDate
    /// </summary>
    public DateOnly BirthDate { get; set; }

    /// <summary>
    /// Race
    /// </summary>
    public string Race { get; set; }

    /// <summary>
    /// Status
    /// </summary>
    public string Status { get; set; }

    /// <summary>
    /// Sex
    /// </summary>
    public string Sex { get; set; }

    /// <summary>
    /// PenId
    /// </summary>
    public int? PenId { get; set; }

    /// <summary>
    /// Pen
    /// </summary>
    public PenDto Pen { get; set; }

    /// <summary>
    /// GroupId
    /// </summary>
    public int? GroupId { get; set; }

    /// <summary>
    /// Group
    /// </summary>
    public GroupDto Group { get; set; }
}
