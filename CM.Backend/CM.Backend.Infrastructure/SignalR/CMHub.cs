using CM.Backend.Application.Interfaces.Infrastructure;
using CM.Backend.Application.Models.Notifications;
using Microsoft.AspNetCore.SignalR;

namespace CM.Backend.Infrastructure.SignalR;
public class CMHub: Hub 
{
    public async Task NotifyAllNewAlert(AlertDto newAlert)
    {
        await Clients.All.SendAsync("NewAlert", newAlert);
    }
}
