using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Notifications;
using MediatR;

namespace CM.Backend.Application.Services.Alert.Queries;
public record GetAlertsActiveQuery() : IRequest<IList<AlertDto>>;

public class GetAlertsActiveQueryHandler : IRequestHandler<GetAlertsActiveQuery, IList<AlertDto>>
{
    private readonly IAlertRepository _alertRepository;
    private readonly IMapper _mapper;

    public GetAlertsActiveQueryHandler(IAlertRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<IList<AlertDto>> Handle(GetAlertsActiveQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<AlertDto>>(_alertRepository.GetListActive()); // , cancellationToken
    }
}
