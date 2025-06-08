using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Notifications;

namespace CM.Backend.Application.Interfaces.Infrastructure;
public interface INotificationService
{
    Task NotifyNewAlert(AlertDto newAlert);
    Task NotifyJobDone(JobDto job);
}
