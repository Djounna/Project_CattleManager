using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Intervention.Queries;
using CM.Backend.Application.Services.Intervention.Commands;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Presentation.Controllers.Interventions;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class InterventionController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public InterventionController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get Intervention By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<InterventionDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetInterventionByIdQuery(id)));
    }

    /// <summary>
    /// Get All Interventions
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<InterventionDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetInterventionsQuery()));
    }

    /// <summary>
    /// Create a intervention
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<InterventionDto>> Create([FromBody]InterventionDto dto)
    {
        return Ok(await _mediator.Send(new CreateInterventionCommand(dto)));
    }

    /// <summary>
    /// Update a intervention 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<InterventionDto>> Update([FromBody]InterventionDto dto)
    {
        return Ok(await _mediator.Send(new UpdateInterventionCommand(dto)));
    }

    /// <summary>
    /// Delete a intervention
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteInterventionCommand(id));
        return Ok();
    }
}
