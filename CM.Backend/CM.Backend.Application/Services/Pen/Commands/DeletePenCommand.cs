using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Pen.Commands;
public record DeletePenCommand(int id) : IRequest;

public class DeletePenCommandHandler : IRequestHandler<DeletePenCommand>
{
    private readonly IPenRepository _penRepository;

    public DeletePenCommandHandler(IPenRepository penRepository)
    {
        _penRepository = penRepository;
    }

    public async Task Handle(DeletePenCommand request, CancellationToken cancellationToken)
    {
        _penRepository.Delete(request.id);
        _penRepository.Save();
    }
}

