using CM.Backend.Domain.History;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CM.Backend.Persistence.MongoDB.Repositories;
public class HistoryRepository
{
    private readonly IMongoCollection<Move> _movesCollection;
    private readonly IMongoCollection<Comment> _commentsCollection;

    public HistoryRepository(IOptions<MongoSettings> mongoSettings)
    {
        var mongoClient = new MongoClient(mongoSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(mongoSettings.Value.DatabaseName);
        _movesCollection = mongoDatabase.GetCollection<Move>(mongoSettings.Value.MovesCollectionName);
        _commentsCollection = mongoDatabase.GetCollection<Comment>(mongoSettings.Value.CommentsCollectionName);
    }
}
