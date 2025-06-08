using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Notifications;
using CM.Backend.Application.Interfaces.Infrastructure;

namespace CM.Backend.Application.Services.Alert.Commands;
public record CreateAlertCommand(AlertDto dto) : IRequest<AlertDto>;

public class CreateAlertCommandHandler : IRequestHandler<CreateAlertCommand, AlertDto>
{
    private readonly IAlertRepository _alertRepository;
    private IMapper _mapper;
    private INotificationService _notificationService;

    public CreateAlertCommandHandler(IAlertRepository alertRepository, IMapper mapper, INotificationService notificationService)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
        _notificationService = notificationService;
    }

    public async Task<AlertDto> Handle(CreateAlertCommand request, CancellationToken cancellationToken)
    {
        var result = _alertRepository.Create(_mapper.Map<Domain.Alerts.Alert>(request.dto));
        _alertRepository.Save();
    
        var newAlert = _mapper.Map<AlertDto>(result);

        await _notificationService.NotifyNewAlert(newAlert);

        return newAlert;
    }
}
