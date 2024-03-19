using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IMilkingRepository : IBaseRepository<Milking>
{
    IEnumerable<Milking> GetListByDate(DateOnly date);

    IEnumerable<Milking> GetListByDateRange(DateOnly start, DateOnly end);

    IEnumerable<Milking> GetRangeByCowId(int cowId, int range);
}
