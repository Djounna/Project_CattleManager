using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Pen.Queries;

public record GetPenByIdQuery(int id) : IRequest<PenDto>;

public class GetPenByIdQueryHandler : IRequestHandler<GetPenByIdQuery, PenDto>
{
    private readonly IPenRepository _penRepository;
    private readonly IMapper _mapper;

    public GetPenByIdQueryHandler(IPenRepository penRepository, IMapper mapper)
    {
        _penRepository = penRepository;
        _mapper = mapper;
    }

    public async Task<PenDto> Handle(GetPenByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<PenDto>(_penRepository.GetById(request.id)); // , cancellationToken
    }
}
