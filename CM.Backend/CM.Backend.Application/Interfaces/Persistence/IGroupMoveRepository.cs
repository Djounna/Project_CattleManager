using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IGroupMoveRepository: IBaseRepository<GroupMove>
{
    IEnumerable<GroupMove> GetListByCowId(int cowId);
}
