using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IPenMoveRepository: IBaseRepository<PenMove>
{
    IEnumerable<PenMove> GetListByCowId(int cowId);
}
