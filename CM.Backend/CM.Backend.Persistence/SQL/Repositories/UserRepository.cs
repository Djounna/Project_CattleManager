using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Users;
using CM.Backend.Domain.Users;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class UserRepository : BaseRepository<User>, IUserRepository
{
    public UserRepository(CMContext context): base(context){}
    
    public User GetUserByIdAuth(string userAuth)
    {
        return _context.Users.FirstOrDefault(u => u.IdAuth == userAuth);
    } 

    public IEnumerable<User> GetListWorkers()
    {
        return _context.Users.Where(u => u.Role.Name == "Worker");
    }
}

