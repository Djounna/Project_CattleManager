using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Stock.Commands;
public record DeleteStockCommand(int id) : IRequest;

public class DeleteStockCommandHandler : IRequestHandler<DeleteStockCommand>
{
    private readonly IStockRepository _stockRepository;

    public DeleteStockCommandHandler(IStockRepository stockRepository)
    {
        _stockRepository = stockRepository;
    }

    public async Task Handle(DeleteStockCommand request, CancellationToken cancellationToken)
    {
        _stockRepository.Delete(request.id);
        _stockRepository.Save();
    }
}

