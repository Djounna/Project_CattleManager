using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Milking.Commands;

public record UpdateMilkingCommand(MilkingDto dto) : IRequest<MilkingDto>;

public class UpdateMilkingCommandHandler : IRequestHandler<UpdateMilkingCommand, MilkingDto>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;

    public UpdateMilkingCommandHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<MilkingDto> Handle(UpdateMilkingCommand request, CancellationToken token)
    {
        var result = _milkingRepository.Update(_mapper.Map<Domain.CowDetails.Milking>(request.dto));
        _milkingRepository.Save();

        return _mapper.Map<MilkingDto>(result);
    }
}
