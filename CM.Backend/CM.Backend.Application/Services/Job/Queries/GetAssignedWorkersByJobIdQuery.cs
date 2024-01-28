using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Users;
using MediatR;

namespace CM.Backend.Application.Services.Job.Queries;

public record GetAssignedWorkersByJobIdQuery(int id) : IRequest<IList<UserDto>>;

public class GetAssignedWorkersByJobIdQueryHandler : IRequestHandler<GetAssignedWorkersByJobIdQuery, IList<UserDto>>
{
    private readonly IWorkerJobRepository _workerJobRepository;
    private IMapper _mapper;

    public GetAssignedWorkersByJobIdQueryHandler(IWorkerJobRepository workerJobRepository, IMapper mapper)
    {
        _workerJobRepository = workerJobRepository;
        _mapper = mapper;
    }

    public async Task<IList<UserDto>> Handle(GetAssignedWorkersByJobIdQuery request, CancellationToken cancellationToken)
    {
        return _mapper.Map<IList<UserDto>>(_workerJobRepository.GetAssignedWorkers(request.id));
    }

}
