using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Workers;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class WorkerRepository : BaseRepository<Worker>, IWorkerRepository
{
    public WorkerRepository(CMContext context): base(context){}
}
