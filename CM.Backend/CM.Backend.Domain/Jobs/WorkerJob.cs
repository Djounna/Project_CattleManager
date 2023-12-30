using CM.Backend.Domain.Base;
using CM.Backend.Domain.Users;

namespace CM.Backend.Domain.Jobs;
public class WorkerJob : BaseEntity
{
    //public int WorkerId { get; set; }
    //public virtual Worker Worker { get; set; }
    
    public int UserId { get; set; }
    public virtual User User { get; set; }

    public int JobId { get; set; }
    public virtual Job Job { get; set; }
}
