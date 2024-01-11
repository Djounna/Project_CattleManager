using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.RecurringJob.Queries;

public record GetRecurringJobByIdQuery(int id) : IRequest<RecurringJobDto>;

public class GetRecurringJobByIdQueryHandler : IRequestHandler<GetRecurringJobByIdQuery, RecurringJobDto>
{
    private readonly IRecurringJobRepository _recurringJobRepository;
    private readonly IMapper _mapper;

    public GetRecurringJobByIdQueryHandler(IRecurringJobRepository recurringJobRepository, IMapper mapper)
    {
        _recurringJobRepository = recurringJobRepository;
        _mapper = mapper;
    }

    public async Task<RecurringJobDto> Handle(GetRecurringJobByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<RecurringJobDto>(_recurringJobRepository.GetById(request.id)); // , cancellationToken
    }
}
