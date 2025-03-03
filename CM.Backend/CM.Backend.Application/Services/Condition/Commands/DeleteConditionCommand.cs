using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Condition.Commands;
public record DeleteConditionCommand(int id) : IRequest;

public class DeleteConditionCommandHandler : IRequestHandler<DeleteConditionCommand>
{
    private readonly IConditionRepository _conditionRepository;

    public DeleteConditionCommandHandler(IConditionRepository conditionRepository)
    {
        _conditionRepository = conditionRepository;
    }

    public async Task Handle(DeleteConditionCommand request, CancellationToken cancellationToken)
    {
        _conditionRepository.Delete(request.id);
        _conditionRepository.Save();
    }
}

