using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Vaccination.Queries;
public record GetVaccinationsQuery() : IRequest<IList<VaccinationDto>>;

public class GetVaccinationsQueryHandler : IRequestHandler<GetVaccinationsQuery, IList<VaccinationDto>>
{
    private readonly IVaccinationRepository _vaccinationRepository;
    private readonly IMapper _mapper;

    public GetVaccinationsQueryHandler(IVaccinationRepository vaccinationRepository, IMapper mapper)
    {
        _vaccinationRepository = vaccinationRepository;
        _mapper = mapper;
    }

    public async Task<IList<VaccinationDto>> Handle(GetVaccinationsQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<VaccinationDto>>(_vaccinationRepository.GetList()); // , cancellationToken
    }
}
