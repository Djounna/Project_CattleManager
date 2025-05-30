using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Notifications;

namespace CM.Backend.Application.Services.Alert.Queries;
public record GetAlertsByCowIdQuery(int id) : IRequest<IList<AlertDto>>;

public class GetAlertsByCowIdQueryHandler : IRequestHandler<GetAlertsByCowIdQuery, IList<AlertDto>>
{
    private readonly IAlertRepository _alertRepository;
    private readonly IMapper _mapper;

    public GetAlertsByCowIdQueryHandler(IAlertRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<IList<AlertDto>> Handle(GetAlertsByCowIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<AlertDto>>(_alertRepository.GetListByCowId(request.id)); // , cancellationToken
    }
}
