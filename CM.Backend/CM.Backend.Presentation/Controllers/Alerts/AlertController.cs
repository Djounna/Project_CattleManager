using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MediatR;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Services.Cow.Queries;

namespace CM.Backend.Presentation.Controllers.Alerts;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class AlertController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public AlertController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get Cow By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
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
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<CowDto>> GetAll(int id)
    {
        return Ok(await _mediator.Send(new GetCowByIdQuery(id)));
    }
}
