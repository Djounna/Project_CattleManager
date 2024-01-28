using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Users;
using CM.Backend.Application.Services.Job.Commands;
using CM.Backend.Application.Services.Job.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CM.Backend.Presentation.Controllers.Jobs;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class WorkerJobController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public WorkerJobController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get assigned workers by job id
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet, Route("api/WorkerJob/GetAssignedWorkers/{id}")]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetAssignedWorkers(int id)
    {
        return Ok(await _mediator.Send(new GetAssignedWorkersByJobIdQuery(id)));
    }

    /// <summary>
    /// Assign a job to a worker
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost, Route("api/WorkerJob/AssignJob")]
    [Authorize("write:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<WorkerJobDto>> Assign([FromBody]WorkerJobDto dto)
    {
        return Ok(await _mediator.Send(new AssignJobCommand(dto)));
    }

    /// <summary>
    /// Unassign a job from a worker
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete, Route("api/WorkerJob/UnassignJob/{id}")]
    [Authorize("write:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Unassign(int id)
    {
        await _mediator.Send(new UnassignJobCommand(id));
        return Ok();
    }
}
