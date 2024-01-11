using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Gestation.Commands;

public record UpdateGestationCommand(GestationDto dto) : IRequest<GestationDto>;

public class UpdateGestationCommandHandler : IRequestHandler<UpdateGestationCommand, GestationDto>
{
    private readonly IGestationRepository _gestationRepository;
    private readonly IMapper _mapper;

    public UpdateGestationCommandHandler(IGestationRepository gestationRepository, IMapper mapper)
    {
        _gestationRepository = gestationRepository;
        _mapper = mapper;
    }

    public async Task<GestationDto> Handle(UpdateGestationCommand request, CancellationToken token)
    {
        var result = _gestationRepository.Update(_mapper.Map<Domain.CowDetails.Gestation>(request.dto));
        _gestationRepository.Save();

        return _mapper.Map<GestationDto>(result);
    }
}
