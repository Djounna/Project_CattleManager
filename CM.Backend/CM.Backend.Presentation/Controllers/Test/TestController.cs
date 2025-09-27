
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CM.Backend.Application.Services.Job.Queries;
using CM.Backend.Application.Services.Job.Commands;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Dashboard;
using CM.Backend.Application.Services.Dashboard.Queries;
using CM.Backend.Presentation.Services;

namespace CM.Backend.Presentation.Controllers.Test;

[ApiController, AllowAnonymous]
[Produces("application/json")]
[Route("api/[controller]")]
public class TestController: ControllerBase
{
    public readonly IMediator _mediator;
    public readonly UserContext _userContext;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public TestController(IMediator mediator, UserContext userContext)
    {
        _mediator = mediator;  
        _userContext = userContext;
    }

    /// <summary>
    /// Test Get dashboard infos
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<DashboardInfoDto>> GetDashboardInfo()
    {
        var userAuthId = _userContext.GetAuth0Id();
        var roles = _userContext.GetCurrentUserRoles();

        return Ok(await _mediator.Send(new GetDashboardInfoQuery("1", true)));
    }
}
