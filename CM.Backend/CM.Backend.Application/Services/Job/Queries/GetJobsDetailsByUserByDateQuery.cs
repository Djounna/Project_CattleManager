using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Infrastructures;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Users;
using MediatR;

namespace CM.Backend.Application.Services.Job.Queries;
public record GetJobsDetailsByUserByDateQuery(string userAuth, string date) : IRequest<IList<JobDetailsDto>>;

public class GetJobsDetailsByUserByDateQueryHandler : IRequestHandler<GetJobsDetailsByUserByDateQuery, IList<JobDetailsDto>>
{
    private readonly IJobRepository _jobRepository;
    private readonly IPenRepository _penRepository;
    private readonly ICowRepository _cowRepository;
    private readonly IWorkerJobRepository _workerJobRepository;
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public GetJobsDetailsByUserByDateQueryHandler(IJobRepository jobRepository,
        IPenRepository penRepository,
        ICowRepository cowRepository,
        IWorkerJobRepository workerJobRepository,
        IUserRepository userRepository,
        IMapper mapper)
    {
        _jobRepository = jobRepository;
        _workerJobRepository = workerJobRepository;
        _penRepository = penRepository;
        _cowRepository = cowRepository;
        _userRepository = userRepository;
        _mapper = mapper;
    }

    public async Task<IList<JobDetailsDto>> Handle(GetJobsDetailsByUserByDateQuery request, CancellationToken cancellationToken)
    {
        DateOnly ddate = DateOnly.Parse(request.date);

        var user = _userRepository.GetUserByIdAuth(request.userAuth);
        if (user == null)
            return null;

        var jobs = _jobRepository.GetListByUserByDate(user.Id, ddate);
        if (jobs == null)
            return null;

        var jobDetails = jobs.Select(j =>
        {
            return new JobDetailsDto()
            {
                Id = j.Id,
                Title = j.Title,
                Description = j.Description,
                Status = j.Status,
                Date = j.Date.ToDateTime(TimeOnly.MinValue),
                Cow = j.CowId != null ? _mapper.Map<CowDto>(_cowRepository.GetById((int)j.CowId)) : null,
                Pen = j.PenId != null ? _mapper.Map<PenDto>(_penRepository.GetById((int)j.PenId)) : null,
                Workers = _mapper.Map<List<UserDto>>(_workerJobRepository.GetAssignedWorkers(j.Id))
            };
        }).ToList();

        return jobDetails;
    }
}
