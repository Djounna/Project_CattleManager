﻿using AutoMapper;
using MediatR;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Infrastructures;
using CM.Backend.Application.Models.Users;

namespace CM.Backend.Application.Services.Job.Queries;
public record GetJobsDetailsQuery() : IRequest<IList<JobDetailsDto>>;

public class GetJobsDetailsQueryHandler : IRequestHandler<GetJobsDetailsQuery, IList<JobDetailsDto>>
{
    private readonly IJobRepository _jobRepository;
    private readonly IPenRepository _penRepository;
    private readonly ICowRepository _cowRepository;
    private readonly IWorkerJobRepository _workerJobRepository;
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public GetJobsDetailsQueryHandler(IMapper mapper,
        IJobRepository jobRepository,
        IPenRepository penRepository,
        ICowRepository cowRepository,
        IWorkerJobRepository workerJobRepository)
    {
        _jobRepository = jobRepository;
        _workerJobRepository = workerJobRepository;
        _penRepository = penRepository;
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<IList<JobDetailsDto>> Handle(GetJobsDetailsQuery request, CancellationToken cancellationToken)
    {
        var jobs = _jobRepository.GetList();
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
