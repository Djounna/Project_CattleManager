using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;
using MediatR;

namespace CM.Backend.Application.Services.Milking.Queries;
public record GetMilkingsDateRangeByCowIdQuery(int cowId, string startDate, string endDate): IRequest<IList<MilkingDto>>;

public class GetMilkingsDateRangeByCowIdQueryHandler : IRequestHandler<GetMilkingsDateRangeByCowIdQuery, IList<MilkingDto>>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;

    public GetMilkingsDateRangeByCowIdQueryHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<IList<MilkingDto>> Handle(GetMilkingsDateRangeByCowIdQuery request, CancellationToken cancellationToken)
    {
        DateOnly start = DateOnly.Parse(request.startDate);
        DateOnly end = DateOnly.Parse(request.endDate);
        return _mapper.Map<IList<MilkingDto>>(_milkingRepository.GetDateRangeByCowId(request.cowId, start, end)); // , cancellationToken
    }
}
