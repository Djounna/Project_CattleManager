using CM.Backend.Application.Models.Dashboard;
using CM.Backend.Application.Services.Dashboard.Queries;
using CM.Backend.Presentation.Services;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CM.Backend.Presentation.Controllers.Dashboard;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class DashboardController : ControllerBase
{

    public readonly IMediator _mediator;
    public readonly UserContext _userContext;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public DashboardController(IMediator mediator, UserContext userContext)
    {
        _mediator = mediator;
        _userContext = userContext;
    }

    /// <summary>
    /// Get dashboard infos
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Authorize("read:cows")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<DashboardInfoDto>> GetDashboardInfo()
    {
        var userAuthId = _userContext.GetAuth0Id();
        var roles = _userContext.GetCurrentUserRoles();

        return Ok(await _mediator.Send(new GetDashboardInfoQuery(userAuthId, true)));
    }
}
