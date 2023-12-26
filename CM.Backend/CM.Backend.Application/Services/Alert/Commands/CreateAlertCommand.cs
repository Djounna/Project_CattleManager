using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Notifications;

namespace CM.Backend.Application.Services.Alert.Commands;
public record CreateAlertCommand(AlertDto dto) : IRequest<AlertDto>;

public class CreateAlertCommandHandler : IRequestHandler<CreateAlertCommand, AlertDto>
{
    private readonly IAlertRepository _alertRepository;
    private IMapper _mapper;

    public CreateAlertCommandHandler(IAlertRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<AlertDto> Handle(CreateAlertCommand request, CancellationToken cancellationToken)
    {
        var result = _alertRepository.Create(_mapper.Map<Domain.Alerts.Alert>(request.dto));
        _alertRepository.Save();

        return _mapper.Map<AlertDto>(result);
    }
        
}
