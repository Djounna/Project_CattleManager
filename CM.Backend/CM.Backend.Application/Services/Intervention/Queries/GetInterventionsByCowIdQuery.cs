using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Intervention.Queries;
public record GetInterventionsByCowIdQuery(int id) : IRequest<IList<InterventionDto>>;

public class GetInterventionsByCowIdQueryHandler : IRequestHandler<GetInterventionsByCowIdQuery, IList<InterventionDto>>
{
    private readonly IInterventionRepository _interventionRepository;
    private readonly IMapper _mapper;

    public GetInterventionsByCowIdQueryHandler(IInterventionRepository interventionRepository, IMapper mapper)
    {
        _interventionRepository = interventionRepository;
        _mapper = mapper;
    }

    public async Task<IList<InterventionDto>> Handle(GetInterventionsByCowIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<InterventionDto>>(_interventionRepository.GetListByCowId(request.id)); // , cancellationToken
    }
}
