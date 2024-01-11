using MediatR;
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Application.Services.RecurringJob.Commands;

public record UpdateRecurringJobCommand(RecurringJobDto dto) : IRequest<RecurringJobDto>;

public class UpdateRecurringJobCommandHandler : IRequestHandler<UpdateRecurringJobCommand, RecurringJobDto>
{
    private readonly IRecurringJobRepository _recurringJobRepository;
    private readonly IMapper _mapper;

    public UpdateRecurringJobCommandHandler(IRecurringJobRepository recurringJobRepository, IMapper mapper)
    {
        _recurringJobRepository = recurringJobRepository;
        _mapper = mapper;
    }

    public async Task<RecurringJobDto> Handle(UpdateRecurringJobCommand request, CancellationToken token)
    {
        var result = _recurringJobRepository.Update(_mapper.Map<Domain.Jobs.RecurringJob>(request.dto));
        _recurringJobRepository.Save();

        return _mapper.Map<RecurringJobDto>(result);
    }
}
