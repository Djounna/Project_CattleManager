using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Treatment.Commands;

public record CreateTreatmentCommand(TreatmentDto dto) : IRequest<TreatmentDto>;

public class CreateTreatmentCommandHandler : IRequestHandler<CreateTreatmentCommand, TreatmentDto>
{
    private readonly ITreatmentRepository _treatmentRepository;
    private IMapper _mapper;

    public CreateTreatmentCommandHandler(ITreatmentRepository treatmentRepository, IMapper mapper)
    {
        _treatmentRepository = treatmentRepository;
        _mapper = mapper;
    }

    public async Task<TreatmentDto> Handle(CreateTreatmentCommand request, CancellationToken cancellationToken)
    {
        var result = _treatmentRepository.Create(_mapper.Map<Domain.CowDetails.Treatment>(request.dto));
        _treatmentRepository.Save();

        return _mapper.Map<TreatmentDto>(result);
    }
}
