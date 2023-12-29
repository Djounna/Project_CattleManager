using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CM.Backend.Application.Services.Pen.Queries;
using CM.Backend.Application.Services.Pen.Commands;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Presentation.Controllers.Pens;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class PenController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public PenController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get All Pens
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Authorize("read:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<PenDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetPensQuery()));
    }
    
    /// <summary>
    /// Get Pen By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [Authorize("read:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<PenDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetPenByIdQuery(id)));
    }

    /// <summary>
    /// Create an Pen
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [Authorize("write:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<PenDto>> Create([FromBody]PenDto dto)
    {
        return Ok(await _mediator.Send(new CreatePenCommand(dto)));
    }

    /// <summary>
    /// Update an Pen 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [Authorize("write:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<PenDto>> Update([FromBody]PenDto dto)
    {
        return Ok(await _mediator.Send(new UpdatePenCommand(dto)));
    }

    /// <summary>
    /// Delete an Pen
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [Authorize("write:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeletePenCommand(id));
        return Ok();
    }
}
