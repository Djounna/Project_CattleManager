using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Intervenant.Queries;
using CM.Backend.Application.Services.Intervenant.Commands;
using CM.Backend.Application.Models.Externals;

namespace CM.Backend.Presentation.Controllers.Intervenants;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class IntervenantController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public IntervenantController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get Intervenant By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IntervenantDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetIntervenantByIdQuery(id)));
    }

    /// <summary>
    /// Get All Intervenants
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<IntervenantDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetIntervenantsQuery()));
    }

    /// <summary>
    /// Create a intervenant
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IntervenantDto>> Create([FromBody]IntervenantDto dto)
    {
        return Ok(await _mediator.Send(new CreateIntervenantCommand(dto)));
    }

    /// <summary>
    /// Update a intervenant 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IntervenantDto>> Update([FromBody]IntervenantDto dto)
    {
        return Ok(await _mediator.Send(new UpdateIntervenantCommand(dto)));
    }

    /// <summary>
    /// Delete a intervenant
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteIntervenantCommand(id));
        return Ok();
    }
}
