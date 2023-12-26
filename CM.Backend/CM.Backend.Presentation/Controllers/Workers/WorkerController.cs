using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Worker.Queries;
using CM.Backend.Application.Services.Worker.Commands;
using CM.Backend.Application.Models.Workers;

namespace CM.Backend.Presentation.Controllers.Workers;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class WorkerController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public WorkerController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get Worker By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<WorkerDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetWorkerByIdQuery(id)));
    }

    /// <summary>
    /// Get All Workers
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<WorkerDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetWorkersQuery()));
    }

    /// <summary>
    /// Create a cow
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<WorkerDto>> Create([FromBody]WorkerDto dto)
    {
        return Ok(await _mediator.Send(new CreateWorkerCommand(dto)));
    }

    /// <summary>
    /// Update a cow 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<WorkerDto>> Update([FromBody]WorkerDto dto)
    {
        return Ok(await _mediator.Send(new UpdateWorkerCommand(dto)));
    }

    /// <summary>
    /// Delete a cow
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteWorkerCommand(id));
        return Ok();
    }
}
