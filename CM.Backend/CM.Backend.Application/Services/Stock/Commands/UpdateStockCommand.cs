using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Stock.Commands;

public record UpdateStockCommand(StockDto dto) : IRequest<StockDto>;

public class UpdateStockCommandHandler : IRequestHandler<UpdateStockCommand, StockDto>
{
    private readonly IStockRepository _stockRepository;
    private readonly IMapper _mapper;

    public UpdateStockCommandHandler(IStockRepository stockRepository, IMapper mapper)
    {
        _stockRepository = stockRepository;
        _mapper = mapper;
    }

    public async Task<StockDto> Handle(UpdateStockCommand request, CancellationToken token)
    {
        var result = _stockRepository.Update(_mapper.Map<Domain.Infrastructures.Stock>(request.dto));
        _stockRepository.Save();

        return _mapper.Map<StockDto>(result);
    }
}
