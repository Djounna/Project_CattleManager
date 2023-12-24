using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Externals;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class IntervenantRepository : BaseRepository<Intervenant>, IIntervenantRepository
{
    public IntervenantRepository(CMContext context): base(context){}
}
