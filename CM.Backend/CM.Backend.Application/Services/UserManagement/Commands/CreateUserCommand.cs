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
    private IMapper _mapper;

    public CreateUserCommandHandler(IUserManagementService userManagementService, IUserRepository userRepository, IMapper mapper)
    {
        _userManagementService = userManagementService;
        _userRepository = userRepository;
        _mapper  = mapper;
    }

    public async Task<UserDto> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var createdUserAuth = await _userManagementService.CreateUser(request.dto, cancellationToken);

        var user = _mapper.Map<Domain.Users.User>(createdUserAuth);

        var result = await _userManagementService.AssignRole(user, request.dto.RoleName, cancellationToken);
        
        var createdUserDb = _userRepository.Create(user);
        _userRepository.Save();

        return _mapper.Map<UserDto>(createdUserDb);
    }
        
}
