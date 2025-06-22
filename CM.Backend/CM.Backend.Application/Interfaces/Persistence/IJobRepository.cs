using CM.Backend.Domain.Jobs;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IJobRepository : IBaseRepository<Job>
{
    IEnumerable<Job> GetListByDate(DateOnly date);
    IEnumerable<Job> GetListByUserByDate(int userId, DateOnly date); 
}
