using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;
using MediatR;

namespace CM.Backend.Application.Services.Job.Queries;

public record GetJobsByDateQuery(string date) : IRequest<IList<JobDto>>;

public class GetJobsByDateQueryHandler : IRequestHandler<GetJobsByDateQuery, IList<JobDto>>
{
    private readonly IJobRepository _jobRepository;
    private readonly IMapper _mapper;

    public GetJobsByDateQueryHandler(IJobRepository jobRepository, IMapper mapper)
    {
        _jobRepository = jobRepository;
        _mapper = mapper;
    }

    public async Task<IList<JobDto>> Handle(GetJobsByDateQuery request, CancellationToken cancellationToken)
    {

        DateOnly ddate = DateOnly.Parse(request.date);
       return _mapper.Map<IList<JobDto>>(_jobRepository.GetListByDate(ddate)); // , cancellationToken
    }
}
