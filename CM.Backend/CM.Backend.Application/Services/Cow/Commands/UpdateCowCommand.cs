using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Services.Cow.Commands;

public record UpdateCowCommand(CowDto dto) : IRequest<CowDto>;

public class UpdateCowCommandHandler : IRequestHandler<UpdateCowCommand, CowDto>
{
    private readonly ICowRepository _cowRepository;
    private readonly IPenMoveRepository _penMoveRepository;
    private readonly IGroupMoveRepository _groupMoveRepository;
    private readonly IMapper _mapper;

    public UpdateCowCommandHandler(ICowRepository cowRepository, IPenMoveRepository penMoveRepository, IGroupMoveRepository groupMoveRepository, IMapper mapper)
    {
        _cowRepository = cowRepository;
        _penMoveRepository = penMoveRepository;
        _groupMoveRepository = groupMoveRepository;
        _mapper = mapper;
    }

    public async Task<CowDto> Handle(UpdateCowCommand request, CancellationToken token)
    {
        var cow = _cowRepository.GetById(request.dto.Id);

        if (request.dto.Name != cow.Name)
        {
            cow.Name = request.dto.Name;
        }

        if (request.dto.PenId != null && request.dto.PenId != cow.PenId)
        {
            var penMove = new PenMove()
            {
                Id = 0,
                CowId = cow.Id,
                Date = DateOnly.FromDateTime(DateTime.Now),
                SourcePenId = cow.PenId,
                DestinationPenId = request.dto.PenId.Value, 
            };
            _penMoveRepository.Create(penMove);

            cow.PenId = request.dto.PenId;
        }
        if (request.dto.GroupId != null && request.dto.GroupId != cow.GroupId)
        {
            var groupMove = new GroupMove()
            {
                Id = 0,
                CowId = cow.Id,
                Date = DateOnly.FromDateTime(DateTime.Now),
                SourceGroupId = cow.GroupId,
                DestinationGroupId = request.dto.GroupId.Value, 
            };
            _groupMoveRepository.Create(groupMove);

            cow.GroupId = request.dto.GroupId;
        }

        //var result = _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(request.dto));
        _cowRepository.Save();

        return _mapper.Map<CowDto>(cow);
    }
}
