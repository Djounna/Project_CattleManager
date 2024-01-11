using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Gestation.Commands;
public record DeleteGestationCommand(int id) : IRequest;

public class DeleteGestationCommandHandler : IRequestHandler<DeleteGestationCommand>
{
    private readonly IGestationRepository _gestationRepository;

    public DeleteGestationCommandHandler(IGestationRepository gestationRepository)
    {
        _gestationRepository = gestationRepository;
    }

    public async Task Handle(DeleteGestationCommand request, CancellationToken cancellationToken)
    {
        _gestationRepository.Delete(request.id);
        _gestationRepository.Save();
    }
}

