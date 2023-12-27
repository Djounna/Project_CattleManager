using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Workers;

namespace CM.Backend.Application.Services.Worker.Queries;
public record GetWorkersQuery() : IRequest<IList<WorkerDto>>;

public class GetWorkersQueryHandler : IRequestHandler<GetWorkersQuery, IList<WorkerDto>>
{
    private readonly IWorkerRepository _workerRepository;
    private readonly IMapper _mapper;

    public GetWorkersQueryHandler(IWorkerRepository workerRepository, IMapper mapper)
    {
        _workerRepository = workerRepository;
        _mapper = mapper;
    }

    public async Task<IList<WorkerDto>> Handle(GetWorkersQuery request, CancellationToken cancellationToken)
    {
       return _mapper.Map<IList<WorkerDto>>(_workerRepository.GetList()); // , cancellationToken
    }
}
