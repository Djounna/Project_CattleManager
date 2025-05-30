using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IGestationRepository: IBaseRepository<Gestation>
{
    IEnumerable<Gestation> GetListByCowId(int cowId);
}
