using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.MilkProduction.Commands;

public record CreateMilkProductionCommand(MilkProductionDto dto) : IRequest<MilkProductionDto>;

public class CreateMilkProductionCommandHandler : IRequestHandler<CreateMilkProductionCommand, MilkProductionDto>
{
    private readonly IMilkProductionRepository _milkProductionRepository;
    private IMapper _mapper;

    public CreateMilkProductionCommandHandler(IMilkProductionRepository milkProductionRepository, IMapper mapper)
    {
        _milkProductionRepository = milkProductionRepository;
        _mapper = mapper;
    }

    public async Task<MilkProductionDto> Handle(CreateMilkProductionCommand request, CancellationToken cancellationToken)
    {
        var result = _milkProductionRepository.Create(_mapper.Map<Domain.CowDetails.MilkProduction>(request.dto));
        _milkProductionRepository.Save();

        return _mapper.Map<MilkProductionDto>(result);
    }
}
