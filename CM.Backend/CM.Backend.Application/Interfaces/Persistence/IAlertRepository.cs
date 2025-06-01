using CM.Backend.Domain.Alerts;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IAlertRepository: IBaseRepository<Alert>
{
    IEnumerable<Alert> GetListByCowId(int cowId);
    IEnumerable<Alert> GetListByPenId(int penId);
    IEnumerable<Alert> GetListActive();
}
