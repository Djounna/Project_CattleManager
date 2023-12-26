using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Notifications;

namespace CM.Backend.Application.Services.Alert.Commands;

public record UpdateAlertCommand(AlertDto dto) : IRequest<AlertDto>;

public class UpdateAlertCommandHandler : IRequestHandler<UpdateAlertCommand, AlertDto>
{
    private readonly IAlertRepository _alertRepository;
    private readonly IMapper _mapper;

    public UpdateAlertCommandHandler(IAlertRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<AlertDto> Handle(UpdateAlertCommand request, CancellationToken token)
    {
        var result = _alertRepository.Update(_mapper.Map<Domain.Alerts.Alert>(request.dto));
        _alertRepository.Save();

        return _mapper.Map<AlertDto>(result);
    }
}
