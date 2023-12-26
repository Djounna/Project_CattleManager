using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Pen.Commands;

public record CreatePenCommand(PenDto dto) : IRequest<PenDto>;

public class CreatePenCommandHandler : IRequestHandler<CreatePenCommand, PenDto>
{
    private readonly IPenRepository _penRepository;
    private IMapper _mapper;

    public CreatePenCommandHandler(IPenRepository penRepository, IMapper mapper)
    {
        _penRepository = penRepository;
        _mapper = mapper;
    }

    public async Task<PenDto> Handle(CreatePenCommand request, CancellationToken cancellationToken)
    {
        var result = _penRepository.Create(_mapper.Map<Domain.Infrastructures.Pen>(request.dto));
        _penRepository.Save();

        return _mapper.Map<PenDto>(result);
    }
        
}
