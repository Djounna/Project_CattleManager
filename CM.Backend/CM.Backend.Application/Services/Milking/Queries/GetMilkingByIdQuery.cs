using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Milking.Queries;

public record GetMilkingByIdQuery(int id) : IRequest<MilkingDto>;

public class GetMilkingByIdQueryHandler : IRequestHandler<GetMilkingByIdQuery, MilkingDto>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;

    public GetMilkingByIdQueryHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<MilkingDto> Handle(GetMilkingByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<MilkingDto>(_milkingRepository.GetById(request.id)); // , cancellationToken
    }
}
