using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Treatment.Queries;

public record GetTreatmentByIdQuery(int id) : IRequest<TreatmentDto>;

public class GetTreatmentByIdQueryHandler : IRequestHandler<GetTreatmentByIdQuery, TreatmentDto>
{
    private readonly ITreatmentRepository _treatmentRepository;
    private readonly IMapper _mapper;

    public GetTreatmentByIdQueryHandler(ITreatmentRepository treatmentRepository, IMapper mapper)
    {
        _treatmentRepository = treatmentRepository;
        _mapper = mapper;
    }

    public async Task<TreatmentDto> Handle(GetTreatmentByIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<TreatmentDto>(_treatmentRepository.GetById(request.id)); // , cancellationToken
    }
}
