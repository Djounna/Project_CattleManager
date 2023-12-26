using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Worker.Commands;
public record DeleteWorkerCommand(int id) : IRequest;

public class DeleteWorkerCommandHandler : IRequestHandler<DeleteWorkerCommand>
{
    private readonly IWorkerRepository _workerRepository;

    public DeleteWorkerCommandHandler(IWorkerRepository workerRepository)
    {
        _workerRepository = workerRepository;
    }

    public async Task Handle(DeleteWorkerCommand request, CancellationToken cancellationToken)
    {
        _workerRepository.Delete(request.id);
        _workerRepository.Save();
    }
}

