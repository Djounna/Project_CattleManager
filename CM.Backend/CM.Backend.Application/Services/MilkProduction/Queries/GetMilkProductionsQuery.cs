using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.MilkProduction.Queries;
public record GetMilkProductionsQuery() : IRequest<IList<MilkProductionDto>>;

public class GetMilkProductionsQueryHandler : IRequestHandler<GetMilkProductionsQuery, IList<MilkProductionDto>>
{
    private readonly IMilkProductionRepository _milkProductionRepository;
    private readonly IMapper _mapper;

    public GetMilkProductionsQueryHandler(IMilkProductionRepository milkProductionRepository, IMapper mapper)
    {
        _milkProductionRepository = milkProductionRepository;
        _mapper = mapper;
    }

    public async Task<IList<MilkProductionDto>> Handle(GetMilkProductionsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<MilkProductionDto>>(_milkProductionRepository.GetList()); // , cancellationToken
    }
}
