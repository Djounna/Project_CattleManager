using CM.Backend.Application.Interfaces.Infrastructure;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Notifications;
using Microsoft.AspNetCore.SignalR;

namespace CM.Backend.Infrastructure.SignalR;
public class SignalRNotificationService : INotificationService
{
    private readonly IHubContext<CMHub> _hub;

    public SignalRNotificationService(IHubContext<CMHub> hub)
    {
        _hub = hub;
    }

    public async Task NotifyNewAlert(AlertDto newAlert)
    {
        await _hub.Clients.All.SendAsync("NewAlert", newAlert);
    }

    public async Task NotifyJobDone(JobDto job)
    {
        await _hub.Clients.All.SendAsync("JobDone", job);
    }
}
