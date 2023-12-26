using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Workers;

namespace CM.Backend.Application.Services.Worker.Queries;

public record GetWorkerByIdQuery(int id) : IRequest<WorkerDto>;

public class GetWorkerByIdQueryHandler : IRequestHandler<GetWorkerByIdQuery, WorkerDto>
{
    private readonly IWorkerRepository _workerRepository;
    private readonly IMapper _mapper;

    public GetWorkerByIdQueryHandler(IWorkerRepository workerRepository, IMapper mapper)
    {
        _workerRepository = workerRepository;
        _mapper = mapper;
    }

    public async Task<WorkerDto> Handle(GetWorkerByIdQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<WorkerDto>(_workerRepository.GetById(request.id)); // , cancellationToken
    }
}
