using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class GestationRepository : BaseRepository<Gestation>, IGestationRepository
{
    public GestationRepository(CMContext context): base(context){}
    
    public IEnumerable<Gestation> GetListByCowId(int cowId)
    {
        return _context.Gestations.Where(gm => gm.CowId == cowId).ToList();
    }
}
