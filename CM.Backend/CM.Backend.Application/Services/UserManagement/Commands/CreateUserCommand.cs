using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Users;
using CM.Backend.Application.Interfaces.Infrastructure;

namespace CM.Backend.Application.Services.User.Commands;

public record CreateUserCommand(UserInput dto) : IRequest<UserDto>;

public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, UserDto>
{
    private readonly IUserManagementService _userManagementService;
    private readonly IUserRepository _userRepository;
    private readonly IRoleRepository _roleRepository;
    private IMapper _mapper;

    public CreateUserCommandHandler(IUserManagementService userManagementService, IUserRepository userRepository, IRoleRepository roleRepositroy, IMapper mapper)
    {
        _userManagementService = userManagementService;
        _userRepository = userRepository;
        _roleRepository = roleRepositroy;
        _mapper  = mapper;
    }

    public async Task<UserDto> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var createdUserAuth = await _userManagementService.CreateUser(request.dto, cancellationToken);

        var result = await _userManagementService.AssignRole(createdUserAuth, request.dto.RoleName, cancellationToken);

        var role = _roleRepository.GetByName(request.dto.RoleName);

        //var user = _mapper.Map<Domain.Users.User>(createdUserAuth);
        var user = new Domain.Users.User
        {
            IdAuth = createdUserAuth.user_id,
            Username = createdUserAuth.username,
            Email = createdUserAuth.email,
            Role = role
        };

        var createdUserDb = _userRepository.Create(user);
        _userRepository.Save();

        return _mapper.Map<UserDto>(createdUserDb);
    }
        
}
