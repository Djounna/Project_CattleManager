using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Application.Services.Condition.Queries;

public record GetConditionByIdQuery(int id) : IRequest<ConditionDto>;

public class GetConditionByIdQueryHandler : IRequestHandler<GetConditionByIdQuery, ConditionDto>
{
    private readonly IConditionRepository _conditionRepository;
    private readonly IMapper _mapper;

    public GetConditionByIdQueryHandler(IConditionRepository conditionRepository, IMapper mapper)
    {
        _conditionRepository = conditionRepository;
        _mapper = mapper;
    }

    public async Task<ConditionDto> Handle(GetConditionByIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<ConditionDto>(_conditionRepository.GetById(request.id)); // , cancellationToken
    }
}
