using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Intervention.Queries;
public record GetInterventionsQuery() : IRequest<IList<InterventionDto>>;

public class GetInterventionsQueryHandler : IRequestHandler<GetInterventionsQuery, IList<InterventionDto>>
{
    private readonly IInterventionRepository _interventionRepository;
    private readonly IMapper _mapper;

    public GetInterventionsQueryHandler(IInterventionRepository interventionRepository, IMapper mapper)
    {
        _interventionRepository = interventionRepository;
        _mapper = mapper;
    }

    public async Task<IList<InterventionDto>> Handle(GetInterventionsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<InterventionDto>>(_interventionRepository.GetList()); // , cancellationToken
    }
}
