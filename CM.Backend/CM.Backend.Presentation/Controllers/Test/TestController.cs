
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CM.Backend.Application.Services.Job.Queries;
using CM.Backend.Application.Services.Job.Commands;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Dashboard;
using CM.Backend.Application.Services.Dashboard.Queries;

namespace CM.Backend.Presentation.Controllers.Test;

[ApiController, AllowAnonymous]
[Produces("application/json")]
[Route("api/[controller]")]
public class TestController: ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public TestController(IMediator mediator)
    {
        _mediator = mediator;  
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

        var claims = HttpContext.User.Claims;
        Console.WriteLine(  claims.ToString());

        return Ok(await _mediator.Send(new GetDashboardInfoQuery("1", true)));
    }
}
