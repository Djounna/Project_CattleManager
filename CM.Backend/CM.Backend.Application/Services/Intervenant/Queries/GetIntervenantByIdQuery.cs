using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Externals;

namespace CM.Backend.Application.Services.Intervenant.Queries;

public record GetIntervenantByIdQuery(int id) : IRequest<IntervenantDto>;

public class GetIntervenantByIdQueryHandler : IRequestHandler<GetIntervenantByIdQuery, IntervenantDto>
{
    private readonly IIntervenantRepository _intervenantRepository;
    private readonly IMapper _mapper;

    public GetIntervenantByIdQueryHandler(IIntervenantRepository intervenantRepository, IMapper mapper)
    {
        _intervenantRepository = intervenantRepository;
        _mapper = mapper;
    }

    public async Task<IntervenantDto> Handle(GetIntervenantByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IntervenantDto>(_intervenantRepository.GetById(request.id)); // , cancellationToken
    }
}
