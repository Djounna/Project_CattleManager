using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Condition.Queries;
using CM.Backend.Application.Services.Condition.Commands;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Presentation.Controllers.Conditions;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class ConditionController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public ConditionController(IMediator mediator)
    {
        _mediator = mediator;
    }

    /// <summary>
    /// Get Condition By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<ConditionDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetConditionByIdQuery(id)));
    }

    /// <summary>
    /// Get All Conditions
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<ConditionDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetConditionsQuery()));
    }

    /// <summary>
    /// Create a condition
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<ConditionDto>> Create([FromBody] ConditionDto dto)
    {
        return Ok(await _mediator.Send(new CreateConditionCommand(dto)));
    }

    /// <summary>
    /// Update a condition 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<ConditionDto>> Update([FromBody] ConditionDto dto)
    {
        return Ok(await _mediator.Send(new UpdateConditionCommand(dto)));
    }

    /// <summary>
    /// Delete a condition
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteConditionCommand(id));
        return Ok();
    }
}
