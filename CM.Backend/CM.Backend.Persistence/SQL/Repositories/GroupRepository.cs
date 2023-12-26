using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Cows;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class GroupRepository : BaseRepository<Group>, IGroupRepository
{
    public GroupRepository(CMContext context): base(context){}
}
