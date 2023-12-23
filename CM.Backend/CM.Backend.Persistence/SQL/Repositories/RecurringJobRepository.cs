using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Jobs;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class RecurringJobRepository : BaseRepository<RecurringJob>, IRecurringJobRepository
{
    public RecurringJobRepository(CMContext context) : base(context) { }
}
