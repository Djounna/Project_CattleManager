using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Domain.CowDetails;
using MediatR;

namespace CM.Backend.Application.Services.Group.Commands;
public record AssignToGroupCommand(GroupDetailsDto group1, GroupDetailsDto group2) : IRequest<GroupDetailsDto>;

public class AssignToGroupCommandHandler : IRequestHandler<AssignToGroupCommand, GroupDetailsDto>
{
    private readonly IGroupRepository _groupRepository;
    private readonly IGroupMoveRepository _groupMoveRepository;
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public AssignToGroupCommandHandler(IGroupRepository groupRepository, IGroupMoveRepository groupMoveRepository, ICowRepository cowRepository, IMapper mapper)
    {
        _groupRepository = groupRepository;
        _groupMoveRepository = groupMoveRepository;
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<GroupDetailsDto> Handle(AssignToGroupCommand request, CancellationToken token)
    {
        request.group1.Cows.ForEach(c =>
        {
            if (c.GroupId != request.group1.Id)
            {
                c.GroupId = request.group1.Id;
                _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(c));

                var groupMove = new GroupMove()
                {
                    Id = 0,
                    CowId = c.Id,
                    Date = DateOnly.FromDateTime(DateTime.Now),
                    SourceGroupId = request.group1.Id,
                    DestinationGroupId = request.group2.Id
                };
                _groupMoveRepository.Create(groupMove);
            }
        });

        request.group2.Cows.ForEach(c =>
        {
            if (c.GroupId != request.group2.Id)
            {
                c.GroupId = request.group2.Id;
                _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(c));

                var groupMove = new GroupMove()
                {
                    Id = 0,
                    CowId = c.Id,
                    Date = DateOnly.FromDateTime(DateTime.Now),
                    SourceGroupId = request.group2.Id,
                    DestinationGroupId = request.group1.Id 
                };
                _groupMoveRepository.Create(groupMove);
            }
        });

        _cowRepository.Save();

        return _mapper.Map<GroupDetailsDto>(_groupRepository.GetDetailsById(request.group1.Id));
    }
}
