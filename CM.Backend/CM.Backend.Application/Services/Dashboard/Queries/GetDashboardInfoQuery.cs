
using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Dashboard;
using MediatR;

namespace CM.Backend.Application.Services.Dashboard.Queries;
public record GetDashboardInfoQuery(string userAuthId, bool isWorker = false) : IRequest<DashboardInfoDto>;

public class GetDashboardInfoQueryHandler : IRequestHandler<GetDashboardInfoQuery, DashboardInfoDto>
{
    private readonly ICowRepository _cowRepository;
    private readonly IGroupRepository _groupRepository;
    private readonly IPenRepository _penRepository;
    private readonly IJobRepository _jobRepository;
    private readonly IMilkingRepository _milkingRepository;
    private readonly IUserRepository _userRepository;

    public GetDashboardInfoQueryHandler(
        ICowRepository cowRepository,
        IGroupRepository groupRepository,
        IPenRepository penRepository,
        IJobRepository jobRepository,
        IMilkingRepository milkingRepository,
        IUserRepository userRepository
        )
    {
        _cowRepository = cowRepository;
        _penRepository = penRepository;
        _groupRepository = groupRepository;
        _jobRepository = jobRepository;
        _milkingRepository = milkingRepository;
        _userRepository = userRepository;
    }

    public async Task<DashboardInfoDto> Handle(GetDashboardInfoQuery request, CancellationToken cancellationToken)
    {
        var date = DateOnly.FromDateTime(DateTime.Now);

        var user = _userRepository.GetUserByIdAuth(request.userAuthId);
        //if (user == null)
        //    return null;

        //var jobs = request.isWorker ? _jobRepository.GetListByUserByDate(user.Id, date).ToList() : _jobRepository.GetListByDate(date).ToList() ;
        var jobs = _jobRepository.GetListByDate(date).ToList() ;
        if (jobs == null)
            return null;

        var dayMilkings = _milkingRepository.GetListByDate(date);
        var dailyMilkingsDone = dayMilkings.Where(m => m.Volume > 0 || m.Cancelled).Count();
        var dailyMilkingToDo = _cowRepository.GetList().Where(c => c.MilkCow).Count() - dailyMilkingsDone;

        DashboardInfoDto infos = new()
        {
            CattleTotal = _cowRepository.GetList().Count(),
            GroupInfos = _groupRepository.GetList().Select(g =>
            {
                return new GroupInfo
                {
                    Name = g.Name,
                    Total = g.Cows.Count,
                };
            })
            .ToList(),

            PenInfos = _penRepository.GetList().Select(p =>
            {
                return new PenInfo
                {
                    Name = p.Name,
                    Total = p.Cows.Count,
                    Size = p.Size 
                };
            })
            .ToList(),

            DailyTasks = new DailyTasks
            {
                TotalDone = jobs.Where(t => t.Status == "Terminee").Count(),
                TotalOngoing = jobs.Where(t => t.Status == "En cours").Count(),
                TotalToDo = jobs.Where(t => t.Status == "A realiser").Count(),
                TaskStatusList = jobs.ToDictionary(t => t.Title, t => t.Status)
            },

            DailyMilking = new DailyMilking
            {
                TotalDone = dailyMilkingsDone,
                //TotalToDo = dayMilkings.Where(m => m.Volume == 0 && !m.Cancelled).Count(),
                TotalToDo = dailyMilkingToDo,
                Volume = dayMilkings.Sum(m => m.Volume)
            }
        };

        return infos; // , cancellationToken
    }
}
