using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using MediatR;

namespace CM.Backend.Application.Services.Cow.Queries;

public record GetCowByIdQuery(int id) : IRequest<CowDto>;

public class GetCowByIdQueryHandler : IRequestHandler<GetCowByIdQuery, CowDto>
{
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public GetCowByIdQueryHandler(ICowRepository cowRepository, IMapper mapper)
    {
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<CowDto> Handle(GetCowByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<CowDto>(_cowRepository.GetById(request.id)); // , cancellationToken
    }
}
