using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Application.Services.Pen.Queries;
public record GetPensQuery() : IRequest<IList<PenDto>>;

public class GetPensQueryHandler : IRequestHandler<GetPensQuery, IList<PenDto>>
{
    private readonly IPenRepository _penRepository;
    private readonly IMapper _mapper;

    public GetPensQueryHandler(IPenRepository penRepository, IMapper mapper)
    {
        _penRepository = penRepository;
        _mapper = mapper;
    }

    public async Task<IList<PenDto>> Handle(GetPensQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<PenDto>>(_penRepository.GetList()); // , cancellationToken
    }
}
