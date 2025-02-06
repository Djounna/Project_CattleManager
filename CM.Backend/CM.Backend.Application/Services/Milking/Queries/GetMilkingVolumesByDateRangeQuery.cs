using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Milking.Queries;

public record GetMilkingVolumesByDateRangeQuery(string startDate, string endDate) : IRequest<IList<MilkingVolumeDto>>;

public class GetMilkingVolumesByDateRangeQueryHandler : IRequestHandler<GetMilkingVolumesByDateRangeQuery, IList<MilkingVolumeDto>>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;

    public GetMilkingVolumesByDateRangeQueryHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<IList<MilkingVolumeDto>> Handle(GetMilkingVolumesByDateRangeQuery request, CancellationToken cancellationToken)
    {

        DateOnly start = DateOnly.Parse(request.startDate);
        DateOnly end = DateOnly.Parse(request.endDate);

        var milkings = _milkingRepository.GetListByDateRange(start, end);

        IList<MilkingVolumeDto> milkingVolumes = milkings.GroupBy(m => m.Date, m => m.Volume, (date, volumes) => new MilkingVolumeDto
        {
            Date = date,
            Volume = volumes.Sum(),
            Average = volumes.Average(),
            Min = volumes.Min(),
            Max = volumes.Max()
        }).ToList();

        return milkingVolumes;
    }
}
