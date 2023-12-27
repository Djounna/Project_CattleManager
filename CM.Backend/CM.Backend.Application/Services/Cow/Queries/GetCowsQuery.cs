using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using MediatR;

namespace CM.Backend.Application.Services.Cow.Queries;
public record GetCowsQuery() : IRequest<IList<CowDto>>;

public class GetCowsQueryHandler : IRequestHandler<GetCowsQuery, IList<CowDto>>
{
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public GetCowsQueryHandler(ICowRepository cowRepository, IMapper mapper)
    {
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<IList<CowDto>> Handle(GetCowsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<CowDto>>(_cowRepository.GetList()); // , cancellationToken
    }
}
