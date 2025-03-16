using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CM.Backend.Application.Services.Job.Queries;
using CM.Backend.Application.Services.Job.Commands;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Users;
using CM.Backend.Application.Services.User.Commands;
using CM.Backend.Application.Services.UserManagement.Queries;
using System;

namespace CM.Backend.Presentation.Controllers.Jobs;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class UserManagementController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public UserManagementController(IMediator mediator)
    {
        _mediator = mediator;
    }

    /// <summary>
    /// Get user roles
    /// </summary>
    /// <param name="userId"></param>
    /// <returns>Roles</returns>
    [HttpGet, Route("user/{userId}/roles")]
    [AllowAnonymous]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<List<RoleDto>>> GetUserRoles(int userId)
    {
        return Ok(await _mediator.Send(new GetUserRolesByIdQuery(userId)));
    }

    /// <summary>
    /// User SignIn
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [AllowAnonymous]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<UserInput>> Create([FromBody]UserInput dto)
    {
        return Ok(await _mediator.Send(new CreateUserCommand(dto)));
    }

    /// <summary>
    /// Assign Role to a user 
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    [HttpPut]
    //[Authorize("write:")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<List<RoleDto>>> AssignUserRoles(int userId)
    {
        throw new NotImplementedException();
        //return Ok(await _mediator.Send(new UpdateJobCommand(dto)));
    }
}
