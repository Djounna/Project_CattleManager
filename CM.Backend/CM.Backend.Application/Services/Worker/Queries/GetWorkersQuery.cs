using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Users;

namespace CM.Backend.Application.Services.Worker.Queries;
public record GetWorkersQuery() : IRequest<IList<UserDto>>;

public class GetWorkersQueryHandler : IRequestHandler<GetWorkersQuery, IList<UserDto>>
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public GetWorkersQueryHandler(IUserRepository userRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
    }

    public async Task<IList<UserDto>> Handle(GetWorkersQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<UserDto>>(_userRepository.GetListWorkers()); // , cancellationToken
    }
}
