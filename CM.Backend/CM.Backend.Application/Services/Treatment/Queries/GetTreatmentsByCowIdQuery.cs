
using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Treatment.Queries;
public record GetTreatmentsByCowIdQuery(int id) : IRequest<IList<TreatmentDto>>;

public class GetTreatmentsByCowIdQueryHandler : IRequestHandler<GetTreatmentsByCowIdQuery, IList<TreatmentDto>>
{
    private readonly ITreatmentRepository _treatmentRepository;
    private readonly IMapper _mapper;

    public GetTreatmentsByCowIdQueryHandler(ITreatmentRepository treatmentRepository, IMapper mapper)
    {
        _treatmentRepository = treatmentRepository;
        _mapper = mapper;
    }

    public async Task<IList<TreatmentDto>> Handle(GetTreatmentsByCowIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<TreatmentDto>>(_treatmentRepository.GetListByCowId(request.id)); // , cancellationToken
    }
}
