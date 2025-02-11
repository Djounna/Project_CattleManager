namespace CM.Backend.Application.Models.Statistics;
public class CattleStatisticsDto
{
    public List<GroupStatisticDto> GroupStatistics { get; set; } = new List<GroupStatisticDto>();
    public List<PenStatisticDto> PenStatistics { get; set; } = new List<PenStatisticDto>();
    public List<AgeGroupStatisticDto> AgeGroupStatistics { get; set; } = new List<AgeGroupStatisticDto>();
}

//public class GroupStatisticsDto
//{
//    public int TotalNumber { get; set; }
//    public List<GroupStatisticDto> Groups { get; set; }
//}
public class GroupStatisticDto
{
    public int GroupId { get; set; }
    public string GroupName { get; set; }
    public int Number {  get; set; }
}

//public class PenStatisticsDto
//{
//    public int TotalNumber { get; set; }
//    public List<PenStatisticDto> Pens { get; set; }
//}

public class PenStatisticDto
{
    public int PenId { get; set; }
    public string PenName { get; set; }
    public int Number {  get; set; }
}

//public class AgeGroupStatisticsDto
//{
//    public int TotalNumber { get; set; }
//    public List<AgeGroupStatisticDto> AgeGroups { get; set; }
//}
public class AgeGroupStatisticDto
{
    public string AgeGroupName { get; set; }
    public int Number { get; set; }
}
