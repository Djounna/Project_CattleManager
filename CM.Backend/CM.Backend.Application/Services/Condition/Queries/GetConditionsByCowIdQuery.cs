using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Condition.Queries;
public record GetConditionsByCowIdQuery(int id) : IRequest<IList<ConditionDto>>;

public class GetConditionsByCowIdQueryHandler : IRequestHandler<GetConditionsByCowIdQuery, IList<ConditionDto>>
{
    private readonly IConditionRepository _conditionRepository;
    private readonly IMapper _mapper;

    public GetConditionsByCowIdQueryHandler(IConditionRepository conditionRepository, IMapper mapper)
    {
        _conditionRepository = conditionRepository;
        _mapper = mapper;
    }

    public async Task<IList<ConditionDto>> Handle(GetConditionsByCowIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<ConditionDto>>(_conditionRepository.GetListByCowId(request.id)); // , cancellationToken
    }
}
