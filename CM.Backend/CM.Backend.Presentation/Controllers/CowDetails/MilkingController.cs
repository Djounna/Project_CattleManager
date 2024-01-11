﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Milking.Queries;
using CM.Backend.Application.Services.Milking.Commands;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Presentation.Controllers.Milkings;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class MilkingController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public MilkingController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get Milking By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkingDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetMilkingByIdQuery(id)));
    }

    /// <summary>
    /// Get All Milkings
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<MilkingDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetMilkingsQuery()));
    }

    /// <summary>
    /// Create a milking
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkingDto>> Create([FromBody]MilkingDto dto)
    {
        return Ok(await _mediator.Send(new CreateMilkingCommand(dto)));
    }

    /// <summary>
    /// Update a milking 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkingDto>> Update([FromBody]MilkingDto dto)
    {
        return Ok(await _mediator.Send(new UpdateMilkingCommand(dto)));
    }

    /// <summary>
    /// Delete a milking
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteMilkingCommand(id));
        return Ok();
    }
}
