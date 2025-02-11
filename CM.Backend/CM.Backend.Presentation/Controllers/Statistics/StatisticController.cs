using CM.Backend.Application.Models.Statistics;
using CM.Backend.Application.Services.Statistic.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CM.Backend.Presentation.Controllers.Statistics;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class StatisticController: ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public StatisticController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get Cattle statistics
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<CattleStatisticsDto>> GetCattleStatistics()
    {
        return Ok(_mediator.Send(new GetCattleStatisticsQuery()));
    }
}
