using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;
using MediatR;

namespace CM.Backend.Application.Services.Job.Commands;

public record AssignJobCommand(WorkerJobDto dto) : IRequest<WorkerJobDto>;

public class AssignJobCommandHandler : IRequestHandler<AssignJobCommand, WorkerJobDto>
{
    private readonly IWorkerJobRepository _workerJobRepository;
    private IMapper _mapper;

    public AssignJobCommandHandler(IWorkerJobRepository workerJobRepository, IMapper mapper)
    {
        _workerJobRepository = workerJobRepository;
        _mapper = mapper;
    }

    public async Task<WorkerJobDto> Handle(AssignJobCommand request, CancellationToken cancellationToken)
    {
        var result = _workerJobRepository.Create(_mapper.Map<Domain.Jobs.WorkerJob>(request.dto));
        _workerJobRepository.Save();

        return _mapper.Map<WorkerJobDto>(result);
    }
}
