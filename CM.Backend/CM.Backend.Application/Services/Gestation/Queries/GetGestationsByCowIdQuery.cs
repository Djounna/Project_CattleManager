using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Gestation.Queries;
public record GetGestationsByCowIdQuery(int id) : IRequest<IList<GestationDto>>;

public class GetGestationsByCowIdQueryHandler : IRequestHandler<GetGestationsByCowIdQuery, IList<GestationDto>>
{
    private readonly IGestationRepository _gestationRepository;
    private readonly IMapper _mapper;

    public GetGestationsByCowIdQueryHandler(IGestationRepository gestationRepository, IMapper mapper)
    {
        _gestationRepository = gestationRepository;
        _mapper = mapper;
    }

    public async Task<IList<GestationDto>> Handle(GetGestationsByCowIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<GestationDto>>(_gestationRepository.GetListByCowId(request.id)); // , cancellationToken
    }
}
