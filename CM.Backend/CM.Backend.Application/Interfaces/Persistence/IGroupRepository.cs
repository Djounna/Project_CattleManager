using CM.Backend.Domain.Cows;

namespace CM.Backend.Application.Interfaces.Persistence;
public  interface IGroupRepository : IBaseRepository<Group>
{
    Group GetDetailsById(int id);
    IEnumerable<Group> GetListDetails();
}
