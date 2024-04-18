using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CM.Backend.Domain.History;
public class Comment
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Identifier { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
}
