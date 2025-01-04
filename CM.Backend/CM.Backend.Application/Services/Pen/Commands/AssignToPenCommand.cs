using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;
using CM.Backend.Domain.CowDetails;
using MediatR;

namespace CM.Backend.Application.Services.Pen.Commands;
public  record AssignToPenCommand(PenDetailsDto pen1, PenDetailsDto pen2): IRequest<PenDetailsDto>;

public class AssignToPenCommandHandler: IRequestHandler<AssignToPenCommand, PenDetailsDto>
{
    private readonly IPenRepository _penRepository;
    private readonly IPenMoveRepository _penMoveRepository;
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public AssignToPenCommandHandler(IPenRepository penRepository, IPenMoveRepository penMoveRepository, ICowRepository cowRepository, IMapper mapper)
    {
        _penRepository = penRepository;
        _penMoveRepository = penMoveRepository;
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<PenDetailsDto> Handle(AssignToPenCommand request, CancellationToken token)
    {
        request.pen1.Cows.ForEach(c =>
        {
            if (c.PenId != request.pen1.Id)
            {
                c.PenId = request.pen1.Id;
                _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(c));

                var penMove = new PenMove()
                {
                    Id = 0,
                    CowId = c.Id,
                    Date = DateOnly.FromDateTime(DateTime.Now),
                    SourcePenId = request.pen1.Id,
                    DestinationPenId = request.pen2.Id 
                };
                _penMoveRepository.Create(penMove);
            }
        });

        request.pen2.Cows.ForEach(c =>
        {
            if (c.PenId != request.pen2.Id)
            {
                c.PenId = request.pen2.Id;
                _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(c));

                var penMove = new PenMove()
                {
                    Id = 0,
                    CowId = c.Id,
                    Date = DateOnly.FromDateTime(DateTime.Now),
                    SourcePenId = request.pen2.Id,
                    DestinationPenId = request.pen1.Id 
                };
                _penMoveRepository.Create(penMove);
            }
        });

        _cowRepository.Save();

        return _mapper.Map<PenDetailsDto>(_penRepository.GetDetailsById(request.pen1.Id));
    }
}
