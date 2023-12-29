using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Users;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class UserRepository : BaseRepository<User>, IUserRepository
{
    public UserRepository(CMContext context): base(context){}
}
