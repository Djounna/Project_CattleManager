using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.MilkProduction.Commands;

public record UpdateMilkProductionCommand(MilkProductionDto dto) : IRequest<MilkProductionDto>;

public class UpdateMilkProductionCommandHandler : IRequestHandler<UpdateMilkProductionCommand, MilkProductionDto>
{
    private readonly IMilkProductionRepository _milkProductionRepository;
    private readonly IMapper _mapper;

    public UpdateMilkProductionCommandHandler(IMilkProductionRepository milkProductionRepository, IMapper mapper)
    {
        _milkProductionRepository = milkProductionRepository;
        _mapper = mapper;
    }

    public async Task<MilkProductionDto> Handle(UpdateMilkProductionCommand request, CancellationToken token)
    {
        var result = _milkProductionRepository.Update(_mapper.Map<Domain.CowDetails.MilkProduction>(request.dto));
        _milkProductionRepository.Save();

        return _mapper.Map<MilkProductionDto>(result);
    }
}
