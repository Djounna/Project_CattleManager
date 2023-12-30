using CM.Backend.Application.Models.Users;
using CM.Backend.Domain.Users;

namespace CM.Backend.Application.Interfaces.Infrastructure;
public interface IUserManagementService
{
    Task<TokenData> GetToken();
    Task<UserAuth> CreateUser(UserInput userInput, CancellationToken cancellationToken);
    Task<UserAuth> UpdateUser(UserAuth userInput, CancellationToken cancellationToken = default);
    Task<bool> AssignRole(User user, string role, CancellationToken cancellation);
}
