using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.MilkProduction.Queries;
using CM.Backend.Application.Services.MilkProduction.Commands;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Presentation.Controllers.MilkProductions;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class MilkProductionController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public MilkProductionController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get MilkProduction By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkProductionDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetMilkProductionByIdQuery(id)));
    }

    /// <summary>
    /// Get All MilkProductions
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<MilkProductionDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetMilkProductionsQuery()));
    }

    /// <summary>
    /// Create a milkProduction
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkProductionDto>> Create([FromBody]MilkProductionDto dto)
    {
        return Ok(await _mediator.Send(new CreateMilkProductionCommand(dto)));
    }

    /// <summary>
    /// Update a milkProduction 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkProductionDto>> Update([FromBody]MilkProductionDto dto)
    {
        return Ok(await _mediator.Send(new UpdateMilkProductionCommand(dto)));
    }

    /// <summary>
    /// Delete a milkProduction
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteMilkProductionCommand(id));
        return Ok();
    }
}
