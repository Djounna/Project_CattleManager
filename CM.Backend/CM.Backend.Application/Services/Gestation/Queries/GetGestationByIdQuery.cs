using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Gestation.Queries;

public record GetGestationByIdQuery(int id) : IRequest<GestationDto>;

public class GetGestationByIdQueryHandler : IRequestHandler<GetGestationByIdQuery, GestationDto>
{
    private readonly IGestationRepository _gestationRepository;
    private readonly IMapper _mapper;

    public GetGestationByIdQueryHandler(IGestationRepository gestationRepository, IMapper mapper)
    {
        _gestationRepository = gestationRepository;
        _mapper = mapper;
    }

    public async Task<GestationDto> Handle(GetGestationByIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<GestationDto>(_gestationRepository.GetById(request.id)); // , cancellationToken
    }
}
