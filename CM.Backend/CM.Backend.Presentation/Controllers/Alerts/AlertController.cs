﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using CM.Backend.Application.Models.Notifications;
using CM.Backend.Application.Services.Alert.Queries;
using CM.Backend.Application.Services.Alert.Commands;

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
    /// Get Alert By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<AlertDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetAlertByIdQuery(id)));
    }

    /// <summary>
    /// Get All Alerts
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<AlertDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetAlertsQuery()));
    }

    /// <summary>
    /// Create a cow
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<AlertDto>> Create([FromBody]AlertDto dto)
    {
        return Ok(await _mediator.Send(new CreateAlertCommand(dto)));
    }

    /// <summary>
    /// Update a cow 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<AlertDto>> Update([FromBody]AlertDto dto)
    {
        return Ok(await _mediator.Send(new UpdateAlertCommand(dto)));
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
        await _mediator.Send(new DeleteAlertCommand(id));
        return Ok();
    }
}
