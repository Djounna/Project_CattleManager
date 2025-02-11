using CM.Backend.Domain.Cows;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface ICowRepository : IBaseRepository<Cow>
{
    Cow GetDetailsById(int id);
    IEnumerable<Cow> GetListWithDetails();
    IEnumerable<Cow> GetMilkCowList();
    IEnumerable<Cow> GetCowChildrenById(int id);
}
