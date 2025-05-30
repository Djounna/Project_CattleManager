using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IInterventionRepository : IBaseRepository<Intervention>
{
    IEnumerable<Intervention> GetListByCowId(int cowId);
}
