using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Condition.Queries;
public record GetConditionsQuery() : IRequest<IList<ConditionDto>>;

public class GetConditionsQueryHandler : IRequestHandler<GetConditionsQuery, IList<ConditionDto>>
{
    private readonly IConditionRepository _conditionRepository;
    private readonly IMapper _mapper;

    public GetConditionsQueryHandler(IConditionRepository conditionRepository, IMapper mapper)
    {
        _conditionRepository = conditionRepository;
        _mapper = mapper;
    }

    public async Task<IList<ConditionDto>> Handle(GetConditionsQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<ConditionDto>>(_conditionRepository.GetList()); // , cancellationToken
    }
}
