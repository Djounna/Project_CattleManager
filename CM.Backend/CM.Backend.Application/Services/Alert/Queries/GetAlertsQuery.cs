using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Notifications;

namespace CM.Backend.Application.Services.Alert.Queries;
public record GetAlertsQuery() : IRequest<IList<AlertDto>>;

public class GetAlertsQueryHandler : IRequestHandler<GetAlertsQuery, IList<AlertDto>>
{
    private readonly IAlertRepository _alertRepository;
    private readonly IMapper _mapper;

    public GetAlertsQueryHandler(IAlertRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<IList<AlertDto>> Handle(GetAlertsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<AlertDto>>(_alertRepository.GetList()); // , cancellationToken
    }
}
