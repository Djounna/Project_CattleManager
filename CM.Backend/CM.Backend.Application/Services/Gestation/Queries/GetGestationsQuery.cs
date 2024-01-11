using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Gestation.Queries;
public record GetGestationsQuery() : IRequest<IList<GestationDto>>;

public class GetGestationsQueryHandler : IRequestHandler<GetGestationsQuery, IList<GestationDto>>
{
    private readonly IGestationRepository _gestationRepository;
    private readonly IMapper _mapper;

    public GetGestationsQueryHandler(IGestationRepository gestationRepository, IMapper mapper)
    {
        _gestationRepository = gestationRepository;
        _mapper = mapper;
    }

    public async Task<IList<GestationDto>> Handle(GetGestationsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<GestationDto>>(_gestationRepository.GetList()); // , cancellationToken
    }
}
