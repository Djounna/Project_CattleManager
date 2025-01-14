using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Vaccination.Commands;

public record CreateVaccinationCommand(VaccinationDto dto) : IRequest<VaccinationDto>;

public class CreateVaccinationCommandHandler : IRequestHandler<CreateVaccinationCommand, VaccinationDto>
{
    private readonly IVaccinationRepository _vaccinationRepository;
    private IMapper _mapper;

    public CreateVaccinationCommandHandler(IVaccinationRepository vaccinationRepository, IMapper mapper)
    {
        _vaccinationRepository = vaccinationRepository;
        _mapper = mapper;
    }

    public async Task<VaccinationDto> Handle(CreateVaccinationCommand request, CancellationToken cancellationToken)
    {
        var result = _vaccinationRepository.Create(_mapper.Map<Domain.CowDetails.Vaccination>(request.dto));
        _vaccinationRepository.Save();

        return _mapper.Map<VaccinationDto>(result);
    }

}
