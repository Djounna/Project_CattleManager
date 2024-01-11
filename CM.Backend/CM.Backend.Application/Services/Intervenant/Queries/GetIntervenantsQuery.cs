using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Externals;

namespace CM.Backend.Application.Services.Intervenant.Queries;
public record GetIntervenantsQuery() : IRequest<IList<IntervenantDto>>;

public class GetIntervenantsQueryHandler : IRequestHandler<GetIntervenantsQuery, IList<IntervenantDto>>
{
    private readonly IIntervenantRepository _intervenantRepository;
    private readonly IMapper _mapper;

    public GetIntervenantsQueryHandler(IIntervenantRepository intervenantRepository, IMapper mapper)
    {
        _intervenantRepository = intervenantRepository;
        _mapper = mapper;
    }

    public async Task<IList<IntervenantDto>> Handle(GetIntervenantsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<IntervenantDto>>(_intervenantRepository.GetList()); // , cancellationToken
    }
}
