using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Services.Group.Queries;

public record GetGroupByIdQuery(int id) : IRequest<GroupDto>;

public class GetGroupByIdQueryHandler : IRequestHandler<GetGroupByIdQuery, GroupDto>
{
    private readonly IGroupRepository _groupRepository;
    private readonly IMapper _mapper;

    public GetGroupByIdQueryHandler(IGroupRepository groupRepository, IMapper mapper)
    {
        _groupRepository = groupRepository;
        _mapper = mapper;
    }

    public async Task<GroupDto> Handle(GetGroupByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<GroupDto>(_groupRepository.GetById(request.id)); // , cancellationToken
    }
}
