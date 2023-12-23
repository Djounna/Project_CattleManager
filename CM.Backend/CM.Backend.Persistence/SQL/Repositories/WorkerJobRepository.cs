using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Jobs;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class WorkerJobRepository : BaseRepository<WorkerJob>, IWorkerJobRepository
{
    public WorkerJobRepository(CMContext context) : base(context) { }
}
