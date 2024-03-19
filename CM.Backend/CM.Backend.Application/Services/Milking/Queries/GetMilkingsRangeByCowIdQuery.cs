using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;
using MediatR;

namespace CM.Backend.Application.Services.Milking.Queries;
public record GetMilkingsRangeByCowIdQuery(int cowId, int range): IRequest<IList<MilkingDto>>;

public class GetMilkingsRangeByCowIdQueryHandler : IRequestHandler<GetMilkingsRangeByCowIdQuery, IList<MilkingDto>>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;

    public GetMilkingsRangeByCowIdQueryHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<IList<MilkingDto>> Handle(GetMilkingsRangeByCowIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<MilkingDto>>(_milkingRepository.GetRangeByCowId(request.cowId, request.range)); // , cancellationToken
    }
}
