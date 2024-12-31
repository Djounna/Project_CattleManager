using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;
using MediatR;

namespace CM.Backend.Application.Services.Milking.Commands;
public record UpdateMilkingInputCommand(MilkingInputDto dto): IRequest<MilkingInputDto>;

public class UpdateMilkingInputCommandHandler : IRequestHandler<UpdateMilkingInputCommand, MilkingInputDto>
{

    private readonly IMapper _mapper;
    private readonly IMilkingRepository _milkingRepository;
    public UpdateMilkingInputCommandHandler(IMapper mapper, IMilkingRepository milkingRepository)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<MilkingInputDto> Handle(UpdateMilkingInputCommand request, CancellationToken token)
    {
        ArgumentNullException.ThrowIfNull(request.dto.Date);

        var currentMilking = _milkingRepository.GetByCowAndDate(request.dto.CowId, request.dto.Date.Value);

        Domain.CowDetails.Milking newMilking;
        MilkingDto milking = new MilkingDto
            {
                Date = request.dto.Date.Value,
                CowId = request.dto.CowId,
                Volume = request.dto.Volume,
            };

        if (currentMilking != null)
        {
            newMilking = _milkingRepository.Update(_mapper.Map<Domain.CowDetails.Milking>(milking));
        }
        else
        {
           newMilking = _milkingRepository.Create(_mapper.Map<Domain.CowDetails.Milking>(milking));
        }

        _milkingRepository.Save();

        return new MilkingInputDto
        {
            CowId = newMilking.CowId,
            Volume = newMilking.Volume,
            Date = newMilking.Date,
            Done = true,
        };
    }
}
