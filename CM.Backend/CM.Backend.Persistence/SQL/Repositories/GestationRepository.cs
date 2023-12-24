using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class GestationRepository : BaseRepository<Gestation>, IGestationRepository
{
    public GestationRepository(CMContext context): base(context){}
}
