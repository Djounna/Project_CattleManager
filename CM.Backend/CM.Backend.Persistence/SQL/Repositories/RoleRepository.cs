using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Users;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;

public class RoleRepository : BaseRepository<Role>, IRoleRepository
{
    public RoleRepository(CMContext context): base(context){}

    public Role GetByName(string name)
    {
        return _context.Roles.FirstOrDefault(r => r.Name == name);
    }
}
