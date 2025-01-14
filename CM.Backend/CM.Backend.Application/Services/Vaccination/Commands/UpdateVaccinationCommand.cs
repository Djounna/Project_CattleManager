using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Vaccination.Commands;

public record UpdateVaccinationCommand(VaccinationDto dto) : IRequest<VaccinationDto>;

public class UpdateVaccinationCommandHandler : IRequestHandler<UpdateVaccinationCommand, VaccinationDto>
{
    private readonly IVaccinationRepository _vaccinationRepository;
    private readonly IMapper _mapper;

    public UpdateVaccinationCommandHandler(IVaccinationRepository vaccinationRepository, IMapper mapper)
    {
        _vaccinationRepository = vaccinationRepository;
        _mapper = mapper;
    }

    public async Task<VaccinationDto> Handle(UpdateVaccinationCommand request, CancellationToken token)
    {
        var result = _vaccinationRepository.Update(_mapper.Map<Domain.CowDetails.Vaccination>(request.dto));
        _vaccinationRepository.Save();

        return _mapper.Map<VaccinationDto>(result);
    }
}
