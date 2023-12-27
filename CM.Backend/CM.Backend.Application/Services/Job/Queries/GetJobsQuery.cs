using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.Job.Queries;
public record GetJobsQuery() : IRequest<IList<JobDto>>;

public class GetJobsQueryHandler : IRequestHandler<GetJobsQuery, IList<JobDto>>
{
    private readonly IJobRepository _alertRepository;
    private readonly IMapper _mapper;

    public GetJobsQueryHandler(IJobRepository alertRepository, IMapper mapper)
    {
        _alertRepository = alertRepository;
        _mapper = mapper;
    }

    public async Task<IList<JobDto>> Handle(GetJobsQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<JobDto>>(_alertRepository.GetList()); // , cancellationToken
    }
}
