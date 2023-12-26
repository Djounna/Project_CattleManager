using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Cow.Commands;
public record DeleteCowCommand(int id) : IRequest;

public class DeleteCowCommandHandler : IRequestHandler<DeleteCowCommand>
{
    private readonly ICowRepository _cowRepository;

    public DeleteCowCommandHandler(ICowRepository cowRepository)
    {
        _cowRepository = cowRepository;
    }

    public async Task Handle(DeleteCowCommand request, CancellationToken cancellationToken)
    {
        _cowRepository.Delete(request.id);
        _cowRepository.Save();
    }
}

