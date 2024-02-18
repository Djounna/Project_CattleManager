using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;
using MediatR;

namespace CM.Backend.Application.Services.Pen.Commands;
public  record AssignToPenCommand(PenDetailsDto dto): IRequest<PenDetailsDto>;

public class AssignToPenCommandHandler: IRequestHandler<AssignToPenCommand, PenDetailsDto>
{
    
    private readonly IPenRepository _penRepository;
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public AssignToPenCommandHandler(IPenRepository penRepository, ICowRepository cowRepository, IMapper mapper)
    {
        _penRepository = penRepository;
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<PenDetailsDto> Handle(AssignToPenCommand request, CancellationToken token)
    {
        request.dto.Cows.ForEach(c =>
        {
            if (c.PenId != request.dto.Id)
            {
                c.PenId = request.dto.Id;
                _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(c));
            }
            _cowRepository.Save();
        });

        return _mapper.Map<PenDetailsDto>(_penRepository.GetDetailsById(request.dto.Id));
    }
}
