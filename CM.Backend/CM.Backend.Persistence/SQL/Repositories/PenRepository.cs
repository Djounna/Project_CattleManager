using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class PenRepository : BaseRepository<Pen>, IPenRepository
{
    public PenRepository(CMContext context): base(context){}
}
