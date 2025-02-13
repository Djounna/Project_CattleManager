namespace CM.Backend.Application.Models.Statistics;
public class CattleStatisticsDto
{
    public List<GroupStatisticDto> GroupStatistics { get; set; } = new List<GroupStatisticDto>();
    public List<PenStatisticDto> PenStatistics { get; set; } = new List<PenStatisticDto>();
    public List<AgeGroupStatisticDto> AgeGroupStatistics { get; set; } = new List<AgeGroupStatisticDto>();
    public List<AgeGenderGroupStatisticDto> AgeGenderGroupStatisticsFemale { get; set; } = new List<AgeGenderGroupStatisticDto>();
    public List<AgeGenderGroupStatisticDto> AgeGenderGroupStatisticsMale { get; set; } = new List<AgeGenderGroupStatisticDto>();
}

public class GroupStatisticDto
{
    public int GroupId { get; set; }
    public string GroupName { get; set; }
    public int Number {  get; set; }
}

public class PenStatisticDto
{
    public int PenId { get; set; }
    public string PenName { get; set; }
    public int Number {  get; set; }
}

public class AgeGroupStatisticDto
{
    public string AgeGroupName { get; set; }
    public int Number { get; set; }
}

public class AgeGenderGroupStatisticDto
{
    public string Gender { get; set; }
    public string AgeGroupName { get; set; }
    public int Number { get; set; }
}
