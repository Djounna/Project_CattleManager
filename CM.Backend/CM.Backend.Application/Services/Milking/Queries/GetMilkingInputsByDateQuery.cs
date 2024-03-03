using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;
using MediatR;

namespace CM.Backend.Application.Services.Milking.Queries;
public record GetMilkingInputsByDateQuery(string date): IRequest<MilkingInputsDto>;

public class GetMilkingInputsByDateQueryHandler : IRequestHandler<GetMilkingInputsByDateQuery, MilkingInputsDto>
{
    private readonly IMilkingRepository _milkingRepository;
    private readonly IMapper _mapper;
    public GetMilkingInputsByDateQueryHandler(IMilkingRepository milkingRepository, IMapper mapper)
    {
        _mapper = mapper;
        _milkingRepository = milkingRepository;
    }

    public async Task<MilkingInputsDto> Handle(GetMilkingInputsByDateQuery request, CancellationToken token)
    {
        DateOnly ddate = DateOnly.Parse(request.date);
        var result = _milkingRepository.GetListByDate(ddate);

        return new MilkingInputsDto
        {
            Date = ddate,
            MilkingInputs = result.Select(m => new MilkingInputDto
            {
                CowId = m.CowId,
                Volume = m.Volume,
                Done = m.Volume != 0 ? true : false,
            }).ToList()
        };
    }
}
