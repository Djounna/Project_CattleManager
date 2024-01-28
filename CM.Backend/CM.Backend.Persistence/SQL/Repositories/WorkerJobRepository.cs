using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Jobs;
using CM.Backend.Domain.Users;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class WorkerJobRepository : BaseRepository<WorkerJob>, IWorkerJobRepository
{
    public WorkerJobRepository(CMContext context) : base(context) {
    }

    public IEnumerable<User> GetAssignedWorkers(int id)
    {
        return _context.WorkerJobs
            .Where(wj => wj.JobId == id)
            .Select(
            wj => wj.User).ToList();
    }
}
