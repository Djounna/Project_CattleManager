using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class InterventionRepository : BaseRepository<Intervention>, IInterventionRepository
{
    public InterventionRepository(CMContext context): base(context){}
}
