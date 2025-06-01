using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Alerts;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class AlertRepository : BaseRepository<Alert>, IAlertRepository
{
    public AlertRepository(CMContext context): base(context){}
    public IEnumerable<Alert> GetListByCowId(int cowId)
    {
        return _context.Alerts.Where(gm => gm.CowId == cowId).ToList();
    }

    public IEnumerable<Alert> GetListByPenId(int penId)
    {
        return _context.Alerts.Where(a => a.PenId == penId).ToList();
    }

    public IEnumerable<Alert> GetListActive()
    {
        return _context.Alerts.Where(a => !a.Done).ToList();
    }
}
