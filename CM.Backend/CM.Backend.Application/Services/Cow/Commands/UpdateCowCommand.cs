using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Services.Cow.Commands;

public record UpdateCowCommand(CowDto dto) : IRequest<CowDto>;

public class UpdateCowCommandHandler : IRequestHandler<UpdateCowCommand, CowDto>
{
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public UpdateCowCommandHandler(ICowRepository cowRepository, IMapper mapper)
    {
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<CowDto> Handle(UpdateCowCommand request, CancellationToken token)
    {
        var result = _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(request.dto));
        _cowRepository.Save();

        return _mapper.Map<CowDto>(result);
    }
}
