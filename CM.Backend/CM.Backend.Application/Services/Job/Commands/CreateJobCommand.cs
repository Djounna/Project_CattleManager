using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.Job.Commands;

public record CreateJobCommand(JobDto dto) : IRequest<JobDto>;

public class CreateJobCommandHandler : IRequestHandler<CreateJobCommand, JobDto>
{
    private readonly IJobRepository _jobRepository;
    private IMapper _mapper;

    public CreateJobCommandHandler(IJobRepository jobRepository, IMapper mapper)
    {
        _jobRepository = jobRepository;
        _mapper = mapper;
    }

    public async Task<JobDto> Handle(CreateJobCommand request, CancellationToken cancellationToken)
    {
        var result = _jobRepository.Create(_mapper.Map<Domain.Jobs.Job>(request.dto));
        _jobRepository.Save();

        return _mapper.Map<JobDto>(result);
    }
        
}
