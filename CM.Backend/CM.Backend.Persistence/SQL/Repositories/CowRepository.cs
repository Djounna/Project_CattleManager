using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Cows;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class CowRepository : BaseRepository<Cow>, ICowRepository
{
    public CowRepository(CMContext context): base(context){}
}
