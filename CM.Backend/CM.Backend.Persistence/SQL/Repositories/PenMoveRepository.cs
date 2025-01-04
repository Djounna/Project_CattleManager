using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class PenMoveRepository : BaseRepository<PenMove>, IPenMoveRepository
{
    public PenMoveRepository(CMContext context) : base(context) {}
    public IEnumerable<PenMove> GetListByCowId(int cowId)
    {
       return _context.PenMoves.Where(pm => pm.CowId == cowId).ToList(); 
    }
}
