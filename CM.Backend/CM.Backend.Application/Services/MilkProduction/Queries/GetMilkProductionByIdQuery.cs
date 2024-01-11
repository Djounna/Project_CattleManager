using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.MilkProduction.Queries;

public record GetMilkProductionByIdQuery(int id) : IRequest<MilkProductionDto>;

public class GetMilkProductionByIdQueryHandler : IRequestHandler<GetMilkProductionByIdQuery, MilkProductionDto>
{
    private readonly IMilkProductionRepository _milkProductionRepository;
    private readonly IMapper _mapper;

    public GetMilkProductionByIdQueryHandler(IMilkProductionRepository milkProductionRepository, IMapper mapper)
    {
        _milkProductionRepository = milkProductionRepository;
        _mapper = mapper;
    }

    public async Task<MilkProductionDto> Handle(GetMilkProductionByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<MilkProductionDto>(_milkProductionRepository.GetById(request.id)); // , cancellationToken
    }
}
