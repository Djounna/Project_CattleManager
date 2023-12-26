using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Services.Group.Commands;

public record CreateGroupCommand(GroupDto dto) : IRequest<GroupDto>;

public class CreateGroupCommandHandler : IRequestHandler<CreateGroupCommand, GroupDto>
{
    private readonly IGroupRepository _groupRepository;
    private IMapper _mapper;

    public CreateGroupCommandHandler(IGroupRepository groupRepository, IMapper mapper)
    {
        _groupRepository = groupRepository;
        _mapper = mapper;
    }

    public async Task<GroupDto> Handle(CreateGroupCommand request, CancellationToken cancellationToken)
    {
        var result = _groupRepository.Create(_mapper.Map<Domain.Cows.Group>(request.dto));
        _groupRepository.Save();

        return _mapper.Map<GroupDto>(result);
    }
        
}
