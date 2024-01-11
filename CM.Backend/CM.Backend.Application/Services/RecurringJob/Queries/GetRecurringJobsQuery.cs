using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.RecurringJob.Queries;
public record GetRecurringJobsQuery() : IRequest<IList<RecurringJobDto>>;

public class GetRecurringJobsQueryHandler : IRequestHandler<GetRecurringJobsQuery, IList<RecurringJobDto>>
{
    private readonly IRecurringJobRepository _recurringJobRepository;
    private readonly IMapper _mapper;

    public GetRecurringJobsQueryHandler(IRecurringJobRepository recurringJobRepository, IMapper mapper)
    {
        _recurringJobRepository = recurringJobRepository;
        _mapper = mapper;
    }

    public async Task<IList<RecurringJobDto>> Handle(GetRecurringJobsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<RecurringJobDto>>(_recurringJobRepository.GetList()); // , cancellationToken
    }
}
