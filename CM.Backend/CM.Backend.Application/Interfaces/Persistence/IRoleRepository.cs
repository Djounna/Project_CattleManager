using CM.Backend.Application.Models.Users;

namespace CM.Backend.Application.Interfaces.Persistence;

public interface IRoleRepository : IBaseRepository<Role>
{
    Role GetByName(string name);
}
