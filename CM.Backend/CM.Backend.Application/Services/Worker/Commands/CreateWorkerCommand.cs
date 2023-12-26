using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Workers;

namespace CM.Backend.Application.Services.Worker.Commands;

public record CreateWorkerCommand(WorkerDto dto) : IRequest<WorkerDto>;

public class CreateWorkerCommandHandler : IRequestHandler<CreateWorkerCommand, WorkerDto>
{
    private readonly IWorkerRepository _workerRepository;
    private IMapper _mapper;

    public CreateWorkerCommandHandler(IWorkerRepository workerRepository, IMapper mapper)
    {
        _workerRepository = workerRepository;
        _mapper  = mapper;
    }

    public async Task<WorkerDto> Handle(CreateWorkerCommand request, CancellationToken cancellationToken)
    {
        var result = _workerRepository.Create(_mapper.Map<Domain.Workers.Worker>(request.dto));
        _workerRepository.Save();

        return _mapper.Map<WorkerDto>(result);
    }
        
}
