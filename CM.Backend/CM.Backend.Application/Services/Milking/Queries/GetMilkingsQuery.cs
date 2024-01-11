using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Milking.Queries;
public record GetMilkingsQuery() : IRequest<IList<MilkingDto>>;

public class GetMilkingsQueryHandler : IRequestHandler<GetMilkingsQuery, IList<MilkingDto>>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;

    public GetMilkingsQueryHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<IList<MilkingDto>> Handle(GetMilkingsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<MilkingDto>>(_milkingRepository.GetList()); // , cancellationToken
    }
}
