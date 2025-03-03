using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class ConditionRepository : BaseRepository<Condition>, IConditionRepository
{
    public ConditionRepository(CMContext context) : base(context) { }
}
