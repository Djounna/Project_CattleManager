using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Job.Commands;
public record DeleteJobCommand(int id) : IRequest;

public class DeleteJobCommandHandler : IRequestHandler<DeleteJobCommand>
{
    private readonly IJobRepository _jobRepository;

    public DeleteJobCommandHandler(IJobRepository jobRepository)
    {
        _jobRepository = jobRepository;
    }

    public async Task Handle(DeleteJobCommand request, CancellationToken cancellationToken)
    {
        _jobRepository.Delete(request.id);
        _jobRepository.Save();
    }
}

