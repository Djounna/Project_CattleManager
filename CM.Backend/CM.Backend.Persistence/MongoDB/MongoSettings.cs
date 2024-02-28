namespace CM.Backend.Persistence.MongoDB;
public class MongoSettings
{
    public string ConnectionString { get; set; } = null;
    public string DatabaseName { get; set; } = null;
    public string MilkingsCollectionName { get; set; } = null;
    public string HistoryCollectionName { get; set; } = null;
    public string CommentsCollectionName { get; set; } = null;
}
