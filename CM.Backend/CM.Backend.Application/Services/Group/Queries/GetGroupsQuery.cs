using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Services.Group.Queries;
public record GetGroupsQuery() : IRequest<GroupDto>;

public class GetGroupsQueryHandler : IRequestHandler<GetGroupsQuery, GroupDto>
{
    private readonly IGroupRepository _groupRepository;
    private readonly IMapper _mapper;

    public GetGroupsQueryHandler(IGroupRepository groupRepository, IMapper mapper)
    {
        _groupRepository = groupRepository;
        _mapper = mapper;
    }

    public async Task<GroupDto> Handle(GetGroupsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<GroupDto>(_groupRepository.GetList()); // , cancellationToken
    }
}
