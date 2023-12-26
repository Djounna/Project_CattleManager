using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Workers;

namespace CM.Backend.Application.Services.Worker.Commands;

public record UpdateWorkerCommand(WorkerDto dto) : IRequest<WorkerDto>;

public class UpdateWorkerCommandHandler : IRequestHandler<UpdateWorkerCommand, WorkerDto>
{
    private readonly IWorkerRepository _workerRepository;
    private readonly IMapper _mapper;

    public UpdateWorkerCommandHandler(IWorkerRepository workerRepository, IMapper mapper)
    {
        _workerRepository = workerRepository;
        _mapper = mapper;
    }

    public async Task<WorkerDto> Handle(UpdateWorkerCommand request, CancellationToken token)
    {
        var result = _workerRepository.Update(_mapper.Map<Domain.Workers.Worker>(request.dto));
        _workerRepository.Save();

        return _mapper.Map<WorkerDto>(result);
    }
}
