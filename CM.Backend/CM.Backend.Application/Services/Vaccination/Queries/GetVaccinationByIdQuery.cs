using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Vaccination.Queries;

public record GetVaccinationByIdQuery(int id) : IRequest<VaccinationDto>;

public class GetVaccinationByIdQueryHandler : IRequestHandler<GetVaccinationByIdQuery, VaccinationDto>
{
    private readonly IVaccinationRepository _vaccinationRepository;
    private readonly IMapper _mapper;

    public GetVaccinationByIdQueryHandler(IVaccinationRepository vaccinationRepository, IMapper mapper)
    {
        _vaccinationRepository = vaccinationRepository;
        _mapper = mapper;
    }

    public async Task<VaccinationDto> Handle(GetVaccinationByIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<VaccinationDto>(_vaccinationRepository.GetById(request.id)); // , cancellationToken
    }
}
