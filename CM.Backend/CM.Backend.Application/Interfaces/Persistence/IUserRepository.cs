using CM.Backend.Application.Models.Users;
using CM.Backend.Domain.Users;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IUserRepository : IBaseRepository<User>
{
    IEnumerable<User> GetListWorkers();
    //IEnumerable<Role> GetUserRoles(int id);
}
