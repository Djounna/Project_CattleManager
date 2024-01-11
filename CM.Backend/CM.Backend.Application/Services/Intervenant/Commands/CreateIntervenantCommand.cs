using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Externals;

namespace CM.Backend.Application.Services.Intervenant.Commands;

public record CreateIntervenantCommand(IntervenantDto dto) : IRequest<IntervenantDto>;

public class CreateIntervenantCommandHandler : IRequestHandler<CreateIntervenantCommand, IntervenantDto>
{
    private readonly IIntervenantRepository _intervenantRepository;
    private IMapper _mapper;

    public CreateIntervenantCommandHandler(IIntervenantRepository intervenantRepository, IMapper mapper)
    {
        _intervenantRepository = intervenantRepository;
        _mapper = mapper;
    }

    public async Task<IntervenantDto> Handle(CreateIntervenantCommand request, CancellationToken cancellationToken)
    {
        var result = _intervenantRepository.Create(_mapper.Map<Domain.Externals.Intervenant>(request.dto));
        _intervenantRepository.Save();

        return _mapper.Map<IntervenantDto>(result);
    }
        
}
