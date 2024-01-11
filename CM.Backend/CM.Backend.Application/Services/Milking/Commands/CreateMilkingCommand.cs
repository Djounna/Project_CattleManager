using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Milking.Commands;

public record CreateMilkingCommand(MilkingDto dto) : IRequest<MilkingDto>;

public class CreateMilkingCommandHandler : IRequestHandler<CreateMilkingCommand, MilkingDto>
{
    private readonly IMilkingRepository _milkingRepository;
    private IMapper _mapper;

    public CreateMilkingCommandHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<MilkingDto> Handle(CreateMilkingCommand request, CancellationToken cancellationToken)
    {
        var result = _milkingRepository.Create(_mapper.Map<Domain.CowDetails.Milking>(request.dto));
        _milkingRepository.Save();

        return _mapper.Map<MilkingDto>(result);
    }
        
}
