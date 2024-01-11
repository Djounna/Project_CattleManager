using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.RecurringJob.Commands;

public record CreateRecurringJobCommand(RecurringJobDto dto) : IRequest<RecurringJobDto>;

public class CreateRecurringJobCommandHandler : IRequestHandler<CreateRecurringJobCommand, RecurringJobDto>
{
    private readonly IRecurringJobRepository _recurringJobRepository;
    private IMapper _mapper;

    public CreateRecurringJobCommandHandler(IRecurringJobRepository recurringJobRepository, IMapper mapper)
    {
        _recurringJobRepository = recurringJobRepository;
        _mapper = mapper;
    }

    public async Task<RecurringJobDto> Handle(CreateRecurringJobCommand request, CancellationToken cancellationToken)
    {
        var result = _recurringJobRepository.Create(_mapper.Map<Domain.Jobs.RecurringJob>(request.dto));
        _recurringJobRepository.Save();

        return _mapper.Map<RecurringJobDto>(result);
    }
        
}
