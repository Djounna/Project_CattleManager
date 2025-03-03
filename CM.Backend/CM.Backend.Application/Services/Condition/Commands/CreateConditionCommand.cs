using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Condition.Commands;

public record CreateConditionCommand(ConditionDto dto) : IRequest<ConditionDto>;

public class CreateConditionCommandHandler : IRequestHandler<CreateConditionCommand, ConditionDto>
{
    private readonly IConditionRepository _conditionRepository;
    private IMapper _mapper;

    public CreateConditionCommandHandler(IConditionRepository conditionRepository, IMapper mapper)
    {
        _conditionRepository = conditionRepository;
        _mapper = mapper;
    }

    public async Task<ConditionDto> Handle(CreateConditionCommand request, CancellationToken cancellationToken)
    {
        var result = _conditionRepository.Create(_mapper.Map<Domain.CowDetails.Condition>(request.dto));
        _conditionRepository.Save();

        return _mapper.Map<ConditionDto>(result);
    }
}
