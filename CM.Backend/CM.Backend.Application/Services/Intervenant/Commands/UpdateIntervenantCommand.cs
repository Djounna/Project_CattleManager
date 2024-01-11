using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Externals;

namespace CM.Backend.Application.Services.Intervenant.Commands;

public record UpdateIntervenantCommand(IntervenantDto dto) : IRequest<IntervenantDto>;

public class UpdateIntervenantCommandHandler : IRequestHandler<UpdateIntervenantCommand, IntervenantDto>
{
    private readonly IIntervenantRepository _intervenantRepository;
    private readonly IMapper _mapper;

    public UpdateIntervenantCommandHandler(IIntervenantRepository intervenantRepository, IMapper mapper)
    {
        _intervenantRepository = intervenantRepository;
        _mapper = mapper;
    }

    public async Task<IntervenantDto> Handle(UpdateIntervenantCommand request, CancellationToken token)
    {
        var result = _intervenantRepository.Update(_mapper.Map<Domain.Externals.Intervenant>(request.dto));
        _intervenantRepository.Save();

        return _mapper.Map<IntervenantDto>(result);
    }
}
