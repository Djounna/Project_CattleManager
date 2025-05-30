
using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Vaccination.Queries;
public record GetVaccinationsByCowIdQuery(int id) : IRequest<IList<VaccinationDto>>;

public class GetVaccinationsByCowIdQueryHandler : IRequestHandler<GetVaccinationsByCowIdQuery, IList<VaccinationDto>>
{
    private readonly IVaccinationRepository _vaccinationRepository;
    private readonly IMapper _mapper;

    public GetVaccinationsByCowIdQueryHandler(IVaccinationRepository vaccinationRepository, IMapper mapper)
    {
        _vaccinationRepository = vaccinationRepository;
        _mapper = mapper;
    }

    public async Task<IList<VaccinationDto>> Handle(GetVaccinationsByCowIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<VaccinationDto>>(_vaccinationRepository.GetListByCowId(request.id)); // , cancellationToken
    }
}
