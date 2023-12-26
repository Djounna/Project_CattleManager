using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Cow.Queries;
using CM.Backend.Application.Services.Cow.Commands;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Presentation.Controllers.Cows;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class CowController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public CowController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get Cow By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<CowDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetCowByIdQuery(id)));
    }

    /// <summary>
    /// Get All Cows
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<CowDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetCowsQuery()));
    }

    /// <summary>
    /// Create a cow
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<CowDto>> Create([FromBody]CowDto dto)
    {
        return Ok(await _mediator.Send(new CreateCowCommand(dto)));
    }

    /// <summary>
    /// Update a cow 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<CowDto>> Update([FromBody]CowDto dto)
    {
        return Ok(await _mediator.Send(new UpdateCowCommand(dto)));
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
        await _mediator.Send(new DeleteCowCommand(id));
        return Ok();
    }
}
