using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Intervention.Queries;

public record GetInterventionByIdQuery(int id) : IRequest<InterventionDto>;

public class GetInterventionByIdQueryHandler : IRequestHandler<GetInterventionByIdQuery, InterventionDto>
{
    private readonly IInterventionRepository _interventionRepository;
    private readonly IMapper _mapper;

    public GetInterventionByIdQueryHandler(IInterventionRepository interventionRepository, IMapper mapper)
    {
        _interventionRepository = interventionRepository;
        _mapper = mapper;
    }

    public async Task<InterventionDto> Handle(GetInterventionByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<InterventionDto>(_interventionRepository.GetById(request.id)); // , cancellationToken
    }
}
