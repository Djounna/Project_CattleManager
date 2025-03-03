using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Condition.Commands;

public record UpdateConditionCommand(ConditionDto dto) : IRequest<ConditionDto>;

public class UpdateConditionCommandHandler : IRequestHandler<UpdateConditionCommand, ConditionDto>
{
    private readonly IConditionRepository _conditionRepository;
    private readonly IMapper _mapper;

    public UpdateConditionCommandHandler(IConditionRepository conditionRepository, IMapper mapper)
    {
        _conditionRepository = conditionRepository;
        _mapper = mapper;
    }

    public async Task<ConditionDto> Handle(UpdateConditionCommand request, CancellationToken token)
    {
        var result = _conditionRepository.Update(_mapper.Map<Domain.CowDetails.Condition>(request.dto));
        _conditionRepository.Save();

        return _mapper.Map<ConditionDto>(result);
    }
}
