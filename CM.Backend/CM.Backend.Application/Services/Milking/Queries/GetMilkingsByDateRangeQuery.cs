using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Milking.Queries;

public record GetMilkingsByDateRangeQuery(string startDate, string endDate) : IRequest<IList<MilkingDto>>;

public class GetMilkingsByDateRangeQueryHandler : IRequestHandler<GetMilkingsByDateRangeQuery, IList<MilkingDto>>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;

    public GetMilkingsByDateRangeQueryHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<IList<MilkingDto>> Handle(GetMilkingsByDateRangeQuery request, CancellationToken cancellationToken)
    {
        DateOnly start = DateOnly.Parse(request.startDate);
        DateOnly end = DateOnly.Parse(request.endDate);
        return _mapper.Map<IList<MilkingDto>>(_milkingRepository.GetListByDateRange(start, end)); // , cancellationToken
    }
}
