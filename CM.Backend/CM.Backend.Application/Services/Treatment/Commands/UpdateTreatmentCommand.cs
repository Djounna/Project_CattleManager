using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Treatment.Commands;

public record UpdateTreatmentCommand(TreatmentDto dto) : IRequest<TreatmentDto>;

public class UpdateTreatmentCommandHandler : IRequestHandler<UpdateTreatmentCommand, TreatmentDto>
{
    private readonly ITreatmentRepository _treatmentRepository;
    private readonly IMapper _mapper;

    public UpdateTreatmentCommandHandler(ITreatmentRepository treatmentRepository, IMapper mapper)
    {
        _treatmentRepository = treatmentRepository;
        _mapper = mapper;
    }

    public async Task<TreatmentDto> Handle(UpdateTreatmentCommand request, CancellationToken token)
    {
        var result = _treatmentRepository.Update(_mapper.Map<Domain.CowDetails.Treatment>(request.dto));
        _treatmentRepository.Save();

        return _mapper.Map<TreatmentDto>(result);
    }
}
