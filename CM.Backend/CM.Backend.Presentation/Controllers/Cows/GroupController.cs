using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CM.Backend.Application.Services.Group.Queries;
using CM.Backend.Application.Services.Group.Commands;
using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Presentation.Controllers.Groups;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class GroupController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public GroupController(IMediator mediator)
    {
        _mediator = mediator;
    }

    /// <summary>
    /// Get All Groups
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Authorize("read:cows")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<GroupDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetGroupsQuery()));
    }

    /// <summary>
    /// Get Group By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [Authorize("read:cows")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<GroupDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetGroupByIdQuery(id)));
    }

    /// <summary>
    /// Create a group
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [Authorize("write:cows")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<GroupDto>> Create([FromBody] GroupDto dto)
    {
        return Ok(await _mediator.Send(new CreateGroupCommand(dto)));
    }

    /// <summary>
    /// Update a group 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [Authorize("write:cows")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<GroupDto>> Update([FromBody] GroupDto dto)
    {
        return Ok(await _mediator.Send(new UpdateGroupCommand(dto)));
    }

    /// <summary>
    /// Delete a group
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [Authorize("write:cows")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteGroupCommand(id));
        return Ok();
    }

    /// <summary>
    /// Assign Cows from group to group 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns>Group Details</returns>
    [HttpPost("assign")]
    [Authorize("write:cows")]
    [ProducesDefaultResponseType]
    public async Task<ActionResult<GroupDetailsDto>> AssignToGroup(AssignGroupDetailsDto dto)
    {
        return Ok(await _mediator.Send(new AssignToGroupCommand(dto.Group1, dto.Group2)));
    }
}
