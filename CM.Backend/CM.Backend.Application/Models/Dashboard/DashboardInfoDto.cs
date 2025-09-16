namespace CM.Backend.Application.Models.Dashboard
{
    public class DashboardInfoDto
    {
        public int CattleTotal { get; set; }
        public List<GroupInfo> GroupInfos { get; set; } = new List<GroupInfo>();
        public List<PenInfo> PenInfos { get; set; } = new List<PenInfo>();
        public DailyMilking DailyMilking { get; set; }
        public DailyTasks DailyTasks { get; set; }
    }

    public class DailyTasks
    {
        public int TotalToDo { get; set; }
        public int TotalOngoing { get; set; }
        public int TotalDone {  get; set; }
        public Dictionary<string, string> TaskStatusList {  get; set; } = new Dictionary<string, string>();
    }

    public class DailyMilking
    {
        public int TotalToDo { get; set; }
        public int TotalDone {  get; set; }
        public double Volume { get; set; }
    }

    public class GroupInfo
    {
        public string Name {  get; set; }
        public int Total { get; set; }
    }

    public class PenInfo
    {
        public string Name {  get; set; }
        public int Size { get; set; }
        public int Total { get; set; }
    }
}
