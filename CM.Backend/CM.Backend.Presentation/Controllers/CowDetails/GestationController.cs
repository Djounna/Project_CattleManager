using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Gestation.Queries;
using CM.Backend.Application.Services.Gestation.Commands;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Presentation.Controllers.Gestations;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class GestationController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public GestationController(IMediator mediator)
    {
        _mediator = mediator;
    }

    /// <summary>
    /// Get Gestation By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<GestationDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetGestationByIdQuery(id)));
    }

    /// <summary>
    /// Get All Gestations
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<GestationDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetGestationsQuery()));
    }

    /// <summary>
    /// Get Gestations By Cow Id
    /// </summary>
    /// <returns></returns>
    [HttpGet("{cowId}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<GestationDto>>> GetListByCowId(int cowId)
    {
        return Ok(await _mediator.Send(new GetGestationsByCowIdQuery(cowId)));
    }

    /// <summary>
    /// Create a gestation
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<GestationDto>> Create([FromBody] GestationDto dto)
    {
        return Ok(await _mediator.Send(new CreateGestationCommand(dto)));
    }

    /// <summary>
    /// Update a gestation 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<GestationDto>> Update([FromBody] GestationDto dto)
    {
        return Ok(await _mediator.Send(new UpdateGestationCommand(dto)));
    }

    /// <summary>
    /// Delete a gestation
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteGestationCommand(id));
        return Ok();
    }
}
