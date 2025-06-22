using CM.Backend.Application.Models.Users;
using CM.Backend.Domain.Users;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IUserRepository : IBaseRepository<User>
{
    User GetUserByIdAuth(string userAuth);
    IEnumerable<User> GetListWorkers();
}
