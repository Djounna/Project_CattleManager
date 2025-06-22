using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Jobs;
using CM.Backend.Domain.Users;
using CM.Backend.Persistence.EF;
using Microsoft.EntityFrameworkCore;

namespace CM.Backend.Persistence.SQL.Repositories;
public class JobRepository : BaseRepository<Job>, IJobRepository
{
    public JobRepository(CMContext context): base(context){}

    public IEnumerable<Job> GetListByDate(DateOnly date)
    {
        return _context.Jobs.Where(m => m.Date == date).ToList();
    }

    public IEnumerable<Job> GetListByUserByDate(int userId, DateOnly date)
    {
        return _context.Jobs.Include(j => j.WorkerJobs).Where(j => j.Date == date).Where(j =>j.WorkerJobs.Any(wj => wj.UserId == userId)).ToList();
    }
}
