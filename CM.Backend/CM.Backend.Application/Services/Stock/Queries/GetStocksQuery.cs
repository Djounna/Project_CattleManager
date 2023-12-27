using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Stock.Queries;
public record GetStocksQuery() : IRequest<IList<StockDto>>;

public class GetStocksQueryHandler : IRequestHandler<GetStocksQuery, IList<StockDto>>
{
    private readonly IStockRepository _alertRepository;
    private readonly IMapper _mapper;

    public GetStocksQueryHandler(IStockRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<IList<StockDto>> Handle(GetStocksQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<StockDto>>(_alertRepository.GetList()); // , cancellationToken
    }
}
