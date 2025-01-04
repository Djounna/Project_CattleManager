using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class GroupMoveRepository : BaseRepository<GroupMove>, IGroupMoveRepository
{
    public GroupMoveRepository(CMContext context) : base(context) {}
    public IEnumerable<GroupMove> GetListByCowId(int cowId)
    {
       return _context.GroupMoves.Where(gm => gm.CowId == cowId).ToList(); 
    }
}
