using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.Job.Queries;

public record GetJobByIdQuery(int id) : IRequest<JobDto>;

public class GetJobByIdQueryHandler : IRequestHandler<GetJobByIdQuery, JobDto>
{
    private readonly IJobRepository _jobRepository;
    private readonly IMapper _mapper;

    public GetJobByIdQueryHandler(IJobRepository jobRepository, IMapper mapper)
    {
        _jobRepository = jobRepository;
        _mapper = mapper;
    }

    public async Task<JobDto> Handle(GetJobByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<JobDto>(_jobRepository.GetById(request.id)); // , cancellationToken
    }
}
