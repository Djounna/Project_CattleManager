using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Milking.Commands;
public record DeleteMilkingCommand(int id) : IRequest;

public class DeleteMilkingCommandHandler : IRequestHandler<DeleteMilkingCommand>
{
    private readonly IMilkingRepository _milkingRepository;

    public DeleteMilkingCommandHandler(IMilkingRepository milkingRepository)
    {
        _milkingRepository = milkingRepository;
    }

    public async Task Handle(DeleteMilkingCommand request, CancellationToken cancellationToken)
    {
        _milkingRepository.Delete(request.id);
        _milkingRepository.Save();
    }
}

