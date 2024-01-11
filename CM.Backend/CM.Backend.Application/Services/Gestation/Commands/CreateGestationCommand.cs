using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Gestation.Commands;

public record CreateGestationCommand(GestationDto dto) : IRequest<GestationDto>;

public class CreateGestationCommandHandler : IRequestHandler<CreateGestationCommand, GestationDto>
{
    private readonly IGestationRepository _gestationRepository;
    private IMapper _mapper;

    public CreateGestationCommandHandler(IGestationRepository gestationRepository, IMapper mapper)
    {
        _gestationRepository = gestationRepository;
        _mapper = mapper;
    }

    public async Task<GestationDto> Handle(CreateGestationCommand request, CancellationToken cancellationToken)
    {
        var result = _gestationRepository.Create(_mapper.Map<Domain.CowDetails.Gestation>(request.dto));
        _gestationRepository.Save();

        return _mapper.Map<GestationDto>(result);
    }
        
}
