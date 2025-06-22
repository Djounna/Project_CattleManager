using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CM.Backend.Application.Services.Job.Queries;
using CM.Backend.Application.Services.Job.Commands;
using CM.Backend.Application.Models.Jobs;

namespace CM.Backend.Presentation.Controllers.Jobs;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class JobController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public JobController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get All Jobs
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<JobDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetJobsQuery()));
    }

    /// <summary>
    /// Get All Jobs By Date
    /// </summary>
    /// <returns></returns>
    [HttpGet, Route("date")]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<JobDto>>> GetListByDate(string date)
    {
        return Ok(await _mediator.Send(new GetJobsByDateQuery(date)));
    }

    /// <summary>
    /// Get All Jobs Details
    /// </summary>
    /// <returns></returns>
    [HttpGet, Route("details")]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<JobDetailsDto>>> GetListDetails()
    {
        return Ok(await _mediator.Send(new GetJobsDetailsQuery()));
    }

    /// <summary>
    /// Get All Jobs Details By Date
    /// </summary>
    /// <returns></returns>
    [HttpGet, Route("details/date")]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<JobDetailsDto>>> GetListDetailsByDate(string date)
    {
        return Ok(await _mediator.Send(new GetJobsDetailsByDateQuery(date)));
    }

    /// <summary>
    /// Get All Jobs Details By User By Date
    /// </summary>
    /// <returns></returns>
    [HttpGet, Route("details/{userAuth}/{date}")]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<JobDetailsDto>>> GetListDetailsByUserByDate(string userAuth, string date)
    {
        return Ok(await _mediator.Send(new GetJobsDetailsByUserByDateQuery(userAuth, date)));
    }

    /// <summary>
    /// Get Job By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<JobDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetJobByIdQuery(id)));
    }

    /// <summary>
    /// Create a Job
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [Authorize("write:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<JobDto>> Create([FromBody]JobDto dto)
    {
        return Ok(await _mediator.Send(new CreateJobCommand(dto)));
    }

    /// <summary>
    /// Update a Job 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [Authorize("read:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<JobDto>> Update([FromBody]JobDto dto)
    {
        return Ok(await _mediator.Send(new UpdateJobCommand(dto)));
    }

    /// <summary>
    /// Delete a Job
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [Authorize("write:jobs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteJobCommand(id));
        return Ok();
    }
}
