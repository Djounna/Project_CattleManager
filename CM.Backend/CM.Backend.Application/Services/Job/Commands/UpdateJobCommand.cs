using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.Job.Commands;

public record UpdateJobCommand(JobDto dto) : IRequest<JobDto>;

public class UpdateJobCommandHandler : IRequestHandler<UpdateJobCommand, JobDto>
{
    private readonly IJobRepository _jobRepository;
    private readonly IMapper _mapper;

    public UpdateJobCommandHandler(IJobRepository jobRepository, IMapper mapper)
    {
        _jobRepository = jobRepository;
        _mapper = mapper;
    }

    public async Task<JobDto> Handle(UpdateJobCommand request, CancellationToken token)
    {
        var result = _jobRepository.Update(_mapper.Map<Domain.Jobs.Job>(request.dto));
        _jobRepository.Save();

        return _mapper.Map<JobDto>(result);
    }
}
