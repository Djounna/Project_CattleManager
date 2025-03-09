using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Users;
using CM.Backend.Application.Interfaces.Infrastructure;

namespace CM.Backend.Application.Services.UserManagement.Queries;
public record GetUserRolesByIdQuery(int id) : IRequest<IList<RoleDto>>;

public class GetUserRolesByIdQueryHandler : IRequestHandler<GetUserRolesByIdQuery, IList<RoleDto>>
{
    private readonly IUserRepository _userRepository;
    private readonly IUserManagementService _userManagementService;
    private readonly IMapper _mapper;

    public GetUserRolesByIdQueryHandler(IUserRepository userRepository, IUserManagementService userManagementService, IMapper mapper)
    {
        _userRepository = userRepository;
        _userManagementService = userManagementService;
        _mapper = mapper;
    }

    public async Task<IList<RoleDto>> Handle(GetUserRolesByIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<RoleDto>>(_userManagementService.GetUserRoles(request.id)); // , cancellationToken
    }
}
