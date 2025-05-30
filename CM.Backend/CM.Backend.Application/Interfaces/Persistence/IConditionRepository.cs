using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IConditionRepository : IBaseRepository<Condition>
{
    IEnumerable<Condition> GetListByCowId(int cowId);
}
