using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Intervention.Commands;

public record CreateInterventionCommand(InterventionDto dto) : IRequest<InterventionDto>;

public class CreateInterventionCommandHandler : IRequestHandler<CreateInterventionCommand, InterventionDto>
{
    private readonly IInterventionRepository _interventionRepository;
    private IMapper _mapper;

    public CreateInterventionCommandHandler(IInterventionRepository interventionRepository, IMapper mapper)
    {
        _interventionRepository = interventionRepository;
        _mapper = mapper;
    }

    public async Task<InterventionDto> Handle(CreateInterventionCommand request, CancellationToken cancellationToken)
    {
        var result = _interventionRepository.Create(_mapper.Map<Domain.CowDetails.Intervention>(request.dto));
        _interventionRepository.Save();

        return _mapper.Map<InterventionDto>(result);
    }
        
}
