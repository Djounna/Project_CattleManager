using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;
using MediatR;

namespace CM.Backend.Application.Services.Job.Commands;

public record UnassignJobCommand(int id) : IRequest;

public class UnassignJobCommandHandler : IRequestHandler<UnassignJobCommand>
{
    private readonly IWorkerJobRepository _workerJobRepository;
    private IMapper _mapper;

    public UnassignJobCommandHandler(IWorkerJobRepository workerJobRepository, IMapper mapper)
    {
        _workerJobRepository = workerJobRepository;
        _mapper = mapper;
    }

    public async Task Handle(UnassignJobCommand request, CancellationToken cancellationToken)
    {
        _workerJobRepository.Delete(request.id);
        _workerJobRepository.Save();
    }
}
