using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Services.Cow.Commands;

public record CreateCowCommand(CowDto dto) : IRequest<CowDto>;

public class CreateCowCommandHandler : IRequestHandler<CreateCowCommand, CowDto>
{
    private readonly ICowRepository _cowRepository;
    private IMapper _mapper;

    public CreateCowCommandHandler(ICowRepository cowRepository, IMapper mapper)
    {
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<CowDto> Handle(CreateCowCommand request, CancellationToken cancellationToken)
    {
        var result = _cowRepository.Create(_mapper.Map<Domain.Cows.Cow>(request.dto));
        _cowRepository.Save();

        return _mapper.Map<CowDto>(result);
    }
        
}
