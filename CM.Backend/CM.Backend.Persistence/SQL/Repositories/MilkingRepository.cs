using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class MilkingRepository : BaseRepository<Milking>, IMilkingRepository
{
    public MilkingRepository(CMContext context) : base(context) { }
    
    public IEnumerable<Milking> GetListByDate(DateOnly date)
    {
        return _context.Milkings.Where(m => m.Date == date).ToList();
    }

    public IEnumerable<Milking> GetListByDateRange(DateOnly start, DateOnly end)
    {
        return _context.Milkings.Where(m => m.Date > start && m.Date <= end).OrderBy(m => m.Date).ToList();
    }

    public IEnumerable<Milking> GetRangeByCowId(int cowId, int range)
    {
        return _context.Milkings.Where(m => m.CowId == cowId).TakeLast(range).OrderBy(m => m.Date).ToList();
    }
}
