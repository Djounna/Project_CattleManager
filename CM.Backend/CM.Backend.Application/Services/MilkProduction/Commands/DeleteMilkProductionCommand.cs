using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.MilkProduction.Commands;
public record DeleteMilkProductionCommand(int id) : IRequest;

public class DeleteMilkProductionCommandHandler : IRequestHandler<DeleteMilkProductionCommand>
{
    private readonly IMilkProductionRepository _milkProductionRepository;

    public DeleteMilkProductionCommandHandler(IMilkProductionRepository milkProductionRepository)
    {
        _milkProductionRepository = milkProductionRepository;
    }

    public async Task Handle(DeleteMilkProductionCommand request, CancellationToken cancellationToken)
    {
        _milkProductionRepository.Delete(request.id);
        _milkProductionRepository.Save();
    }
}

