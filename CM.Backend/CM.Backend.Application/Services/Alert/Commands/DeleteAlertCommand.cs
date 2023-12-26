using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Alert.Commands;
public record DeleteAlertCommand(int id) : IRequest;

public class DeleteAlertCommandHandler : IRequestHandler<DeleteAlertCommand>
{
    private readonly IAlertRepository _alertRepository;

    public DeleteAlertCommandHandler(IAlertRepository alertRepository)
    {
        _alertRepository = alertRepository;
    }

    public async Task Handle(DeleteAlertCommand request, CancellationToken cancellationToken)
    {
        _alertRepository.Delete(request.id);
        _alertRepository.Save();
    }
}

