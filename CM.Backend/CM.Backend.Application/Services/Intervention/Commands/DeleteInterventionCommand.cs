using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Intervention.Commands;
public record DeleteInterventionCommand(int id) : IRequest;

public class DeleteInterventionCommandHandler : IRequestHandler<DeleteInterventionCommand>
{
    private readonly IInterventionRepository _interventionRepository;

    public DeleteInterventionCommandHandler(IInterventionRepository interventionRepository)
    {
        _interventionRepository = interventionRepository;
    }

    public async Task Handle(DeleteInterventionCommand request, CancellationToken cancellationToken)
    {
        _interventionRepository.Delete(request.id);
        _interventionRepository.Save();
    }
}

