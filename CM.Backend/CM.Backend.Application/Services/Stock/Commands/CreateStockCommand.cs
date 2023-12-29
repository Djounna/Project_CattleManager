using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Stock.Commands;

public record CreateStockCommand(StockDto dto) : IRequest<StockDto>;

public class CreateStockCommandHandler : IRequestHandler<CreateStockCommand, StockDto>
{
    private readonly IStockRepository _stockRepository;
    private IMapper _mapper;

    public CreateStockCommandHandler(IStockRepository stockRepository)
    {
        _stockRepository = stockRepository;
    }

    public async Task<StockDto> Handle(CreateStockCommand request, CancellationToken cancellationToken)
    {
        var result = _stockRepository.Create(_mapper.Map<Domain.Infrastructures.Stock>(request.dto));
        _stockRepository.Save();

        return _mapper.Map<StockDto>(result);
    }
        
}
