using CM.Backend.Domain.Base;
using CM.Backend.Domain.Users;

namespace CM.Backend.Application.Models.Users;
public class Role : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    
    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
