using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Pen.Commands;

public record UpdatePenCommand(PenDto dto) : IRequest<PenDto>;

public class UpdatePenCommandHandler : IRequestHandler<UpdatePenCommand, PenDto>
{
    private readonly IPenRepository _penRepository;
    private readonly IMapper _mapper;

    public UpdatePenCommandHandler(IPenRepository penRepository, IMapper mapper)
    {
        _penRepository = penRepository;
        _mapper = mapper;
    }

    public async Task<PenDto> Handle(UpdatePenCommand request, CancellationToken token)
    {
        var result = _penRepository.Update(_mapper.Map<Domain.Infrastructures.Pen>(request.dto));
        _penRepository.Save();

        return _mapper.Map<PenDto>(result);
    }
}
