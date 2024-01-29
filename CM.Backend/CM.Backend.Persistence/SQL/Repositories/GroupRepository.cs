using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Cows;
using CM.Backend.Persistence.EF;
using Microsoft.EntityFrameworkCore;

namespace CM.Backend.Persistence.SQL.Repositories;
public class GroupRepository : BaseRepository<Group>, IGroupRepository
{
    public GroupRepository(CMContext context): base(context){}

    public IEnumerable<Group> GetListDetails()
    {
        return _context.Groups.Include(g => g.Cows).ToList();
    }
}
