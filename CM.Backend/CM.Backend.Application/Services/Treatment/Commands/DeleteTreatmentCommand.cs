using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Treatment.Commands;
public record DeleteTreatmentCommand(int id) : IRequest;

public class DeleteTreatmentCommandHandler : IRequestHandler<DeleteTreatmentCommand>
{
    private readonly ITreatmentRepository _treatmentRepository;

    public DeleteTreatmentCommandHandler(ITreatmentRepository treatmentRepository)
    {
        _treatmentRepository = treatmentRepository;
    }

    public async Task Handle(DeleteTreatmentCommand request, CancellationToken cancellationToken)
    {
        _treatmentRepository.Delete(request.id);
        _treatmentRepository.Save();
    }
}
