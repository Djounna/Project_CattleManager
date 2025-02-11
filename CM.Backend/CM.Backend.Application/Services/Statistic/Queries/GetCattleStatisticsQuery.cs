using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Statistics;
using MediatR;

namespace CM.Backend.Application.Services.Statistic.Queries;
public record GetCattleStatisticsQuery(): IRequest<CattleStatisticsDto>;

public class GetCattleStatisticsQueryhandler: IRequestHandler<GetCattleStatisticsQuery, CattleStatisticsDto>
{
    private readonly ICowRepository _cowRepository;

    public GetCattleStatisticsQueryhandler(ICowRepository cowRepository)
    {
        _cowRepository = cowRepository;
    }
    public async Task<CattleStatisticsDto> Handle(GetCattleStatisticsQuery request, CancellationToken cancellationToken)
    {
        var cows = _cowRepository.GetListWithDetails();

        CattleStatisticsDto result = new CattleStatisticsDto();

        List<GroupStatisticDto> GroupStatisticList = cows.GroupBy(c => c.Group, c => c, (group, cow) => new GroupStatisticDto
        {
            GroupId = group != null ? group.Id : 0,
            GroupName = group != null ? group.Name : "No group",
            Number = cow.Count()
        }).ToList();
        result.GroupStatistics = GroupStatisticList;

        List<PenStatisticDto> PenStatisticList = cows.GroupBy(c => c.Pen, c => c, (pen, cow) => new PenStatisticDto
        {
            PenId = pen != null ? pen.Id : 0,
            PenName = pen != null ? pen.Name : "No pen",
            Number = cow.Count()
        }).ToList();
        result.PenStatistics = PenStatisticList;

        List<AgeGroupStatisticDto> AgeGroupStatisticList = cows.GroupBy(c => Math.Floor((decimal)(DateTime.Now.Year - c.BirthDate.Year)), c => c, (age, cow) => new AgeGroupStatisticDto
        {
           AgeGroupName = age.ToString(),
           Number = cow.Count()
        }).ToList();
        result.AgeGroupStatistics = AgeGroupStatisticList;

        return result;
    }
} 
