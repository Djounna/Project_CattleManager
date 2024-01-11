using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Intervenant.Commands;
public record DeleteIntervenantCommand(int id) : IRequest;

public class DeleteIntervenantCommandHandler : IRequestHandler<DeleteIntervenantCommand>
{
    private readonly IIntervenantRepository _intervenantRepository;

    public DeleteIntervenantCommandHandler(IIntervenantRepository intervenantRepository)
    {
        _intervenantRepository = intervenantRepository;
    }

    public async Task Handle(DeleteIntervenantCommand request, CancellationToken cancellationToken)
    {
        _intervenantRepository.Delete(request.id);
        _intervenantRepository.Save();
    }
}

