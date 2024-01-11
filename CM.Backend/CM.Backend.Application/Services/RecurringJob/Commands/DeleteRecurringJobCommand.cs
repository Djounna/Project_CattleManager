using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.RecurringJob.Commands;
public record DeleteRecurringJobCommand(int id) : IRequest;

public class DeleteRecurringJobCommandHandler : IRequestHandler<DeleteRecurringJobCommand>
{
    private readonly IRecurringJobRepository _recurringJobRepository;

    public DeleteRecurringJobCommandHandler(IRecurringJobRepository recurringJobRepository)
    {
        _recurringJobRepository = recurringJobRepository;
    }

    public async Task Handle(DeleteRecurringJobCommand request, CancellationToken cancellationToken)
    {
        _recurringJobRepository.Delete(request.id);
        _recurringJobRepository.Save();
    }
}

