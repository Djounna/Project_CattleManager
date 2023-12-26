using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Notifications;

namespace CM.Backend.Application.Services.Alert.Queries;

public record GetAlertByIdQuery(int id) : IRequest<AlertDto>;

public class GetAlertByIdQueryHandler : IRequestHandler<GetAlertByIdQuery, AlertDto>
{
    private readonly IAlertRepository _alertRepository;
    private readonly IMapper _mapper;

    public GetAlertByIdQueryHandler(IAlertRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<AlertDto> Handle(GetAlertByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<AlertDto>(_alertRepository.GetById(request.id)); // , cancellationToken
    }
}
