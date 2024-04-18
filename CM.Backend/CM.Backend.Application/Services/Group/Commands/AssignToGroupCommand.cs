using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using MediatR;

namespace CM.Backend.Application.Services.Group.Commands;
public record AssignToGroupCommand(GroupDetailsDto group1, GroupDetailsDto group2) : IRequest<GroupDetailsDto>;

public class AssignToGroupCommandHandler : IRequestHandler<AssignToGroupCommand, GroupDetailsDto>
{

    private readonly IGroupRepository _groupRepository;
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public AssignToGroupCommandHandler(IGroupRepository groupRepository, ICowRepository cowRepository, IMapper mapper)
    {
        _groupRepository = groupRepository;
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
            }
        });

        request.group2.Cows.ForEach(c =>
        {
            if (c.GroupId != request.group2.Id)
            {
                c.GroupId = request.group2.Id;
                _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(c));
            }
        });

        _cowRepository.Save();

        return _mapper.Map<GroupDetailsDto>(_groupRepository.GetDetailsById(request.group1.Id));
    }
}
