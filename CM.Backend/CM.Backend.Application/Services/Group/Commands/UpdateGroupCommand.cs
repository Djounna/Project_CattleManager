using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Services.Group.Commands;

public record UpdateGroupCommand(GroupDto dto) : IRequest<GroupDto>;

public class UpdateGroupCommandHandler : IRequestHandler<UpdateGroupCommand, GroupDto>
{
    private readonly IGroupRepository _groupRepository;
    private readonly IMapper _mapper;

    public UpdateGroupCommandHandler(IGroupRepository groupRepository, IMapper mapper)
    {
        _groupRepository = groupRepository;
        _mapper = mapper;
    }

    public async Task<GroupDto> Handle(UpdateGroupCommand request, CancellationToken token)
    {
        var result = _groupRepository.Update(_mapper.Map<Domain.Cows.Group>(request.dto));
        _groupRepository.Save();

        return _mapper.Map<GroupDto>(result);
    }
}
