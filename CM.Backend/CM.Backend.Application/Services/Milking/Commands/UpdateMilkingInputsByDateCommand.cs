using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;
using MediatR;

namespace CM.Backend.Application.Services.Milking.Commands;
public record UpdateMilkingInputsByDateCommand(MilkingInputsDto dto) : IRequest<MilkingInputsDto>;

public class UpdateMilkingInputsByDateCommandHandler: IRequestHandler<UpdateMilkingInputsByDateCommand, MilkingInputsDto>
{
    private readonly IMapper _mapper;
    private readonly IMilkingRepository _milkingRepository;
    public UpdateMilkingInputsByDateCommandHandler(IMapper mapper, IMilkingRepository milkingRepository)
    {
        _milkingRepository = milkingRepository;
        _mapper = mapper;
    }

    public async Task<MilkingInputsDto> Handle(UpdateMilkingInputsByDateCommand request, CancellationToken token)
    {
        var result = new List<MilkingInputDto>();

        foreach(var input in request.dto.MilkingInputs)
        {
            MilkingDto milking = new MilkingDto
            {
                Date = request.dto.Date,
                CowId = input.CowId,
                Volume = input.Volume,
            };

            var newMilking = _milkingRepository.Create(_mapper.Map<Domain.CowDetails.Milking>(milking));

            var newMilkingInputDto = new MilkingInputDto
            {
                CowId = newMilking.CowId,
                Volume = newMilking.Volume,
                Done = true,
            };

            result.Add(newMilkingInputDto);
        }
        _milkingRepository.Save();

        return new MilkingInputsDto
        {
            Date = request.dto.Date,
            MilkingInputs = result,
        };
    }
}
