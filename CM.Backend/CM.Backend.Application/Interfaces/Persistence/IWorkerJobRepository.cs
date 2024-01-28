using CM.Backend.Domain.Jobs;
using CM.Backend.Domain.Users;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IWorkerJobRepository : IBaseRepository<WorkerJob>
{
    public IEnumerable<User> GetAssignedWorkers(int id);

}
