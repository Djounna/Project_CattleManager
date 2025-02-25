using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Treatment.Queries;
public record GetTreatmentsQuery() : IRequest<IList<TreatmentDto>>;

public class GetTreatmentsQueryHandler : IRequestHandler<GetTreatmentsQuery, IList<TreatmentDto>>
{
    private readonly ITreatmentRepository _treatmentRepository;
    private readonly IMapper _mapper;

    public GetTreatmentsQueryHandler(ITreatmentRepository treatmentRepository, IMapper mapper)
    {
        _treatmentRepository = treatmentRepository;
        _mapper = mapper;
    }

    public async Task<IList<TreatmentDto>> Handle(GetTreatmentsQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<TreatmentDto>>(_treatmentRepository.GetList()); // , cancellationToken
    }
}
