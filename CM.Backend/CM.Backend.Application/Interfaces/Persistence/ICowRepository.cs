using CM.Backend.Domain.Cows;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface ICowRepository : IBaseRepository<Cow>
{
    IEnumerable<Cow> GetMilkCowList();
}
