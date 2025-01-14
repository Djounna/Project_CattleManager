using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Intervention.Commands;

public record UpdateInterventionCommand(InterventionDto dto) : IRequest<InterventionDto>;

public class UpdateInterventionCommandHandler : IRequestHandler<UpdateInterventionCommand, InterventionDto>
{
    private readonly IInterventionRepository _interventionRepository;
    private readonly IMapper _mapper;

    public UpdateInterventionCommandHandler(IInterventionRepository interventionRepository, IMapper mapper)
    {
        _interventionRepository = interventionRepository;
        _mapper = mapper;
    }

    public async Task<InterventionDto> Handle(UpdateInterventionCommand request, CancellationToken token)
    {
        var result = _interventionRepository.Update(_mapper.Map<Domain.CowDetails.Intervention>(request.dto));
        _interventionRepository.Save();

        return _mapper.Map<InterventionDto>(result);
    }
}
