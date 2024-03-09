using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IMilkingRepository : IBaseRepository<Milking>
{
    IEnumerable<Milking> GetListByDate(DateOnly date);
}
