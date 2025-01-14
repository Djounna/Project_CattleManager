using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Vaccination.Commands;
public record DeleteVaccinationCommand(int id) : IRequest;

public class DeleteVaccinationCommandHandler : IRequestHandler<DeleteVaccinationCommand>
{
    private readonly IVaccinationRepository _vaccinationRepository;

    public DeleteVaccinationCommandHandler(IVaccinationRepository vaccinationRepository)
    {
        _vaccinationRepository = vaccinationRepository;
    }

    public async Task Handle(DeleteVaccinationCommand request, CancellationToken cancellationToken)
    {
        _vaccinationRepository.Delete(request.id);
        _vaccinationRepository.Save();
    }
}

