using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Stock.Queries;

public record GetStockByIdQuery(int id) : IRequest<StockDto>;

public class GetStockByIdQueryHandler : IRequestHandler<GetStockByIdQuery, StockDto>
{
    private readonly IStockRepository _workerRepository;
    private readonly IMapper _mapper;

    public GetStockByIdQueryHandler(IStockRepository workerRepository, IMapper mapper)
    {
        _workerRepository = workerRepository;
        _mapper = mapper;
    }

    public async Task<StockDto> Handle(GetStockByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<StockDto>(_workerRepository.GetById(request.id)); // , cancellationToken
    }
}
