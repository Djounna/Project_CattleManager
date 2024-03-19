using MediatR;
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
    /// Get All Milkings By Date Range
    /// </summary>
    /// <returns></returns>
    [HttpGet("range/{start}/{end}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<MilkingDto>>> GetListByDateRange(string start, string end)
    {
        return Ok(await _mediator.Send(new GetMilkingsByDateRangeQuery(start, end)));
    }
    /// <summary>
    /// Get Milkings Range By Cow
    /// </summary>
    /// <returns></returns>
    [HttpGet("{cowId}/{range}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<MilkingDto>>> GetRangeByCow(int cowId, int range)
    {
        return Ok(await _mediator.Send(new GetMilkingsRangeByCowIdQuery(cowId, range)));
    }

    /// <summary>
    /// Get MilkingInputs By Date
    /// </summary>
    /// <param name="date">Date</param>
    /// <returns></returns>
    [HttpGet("milkingInputs/{date}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkingInputsDto>> GetMilkingInputsByDate(string date)
    {
        return Ok(await _mediator.Send(new GetMilkingInputsByDateQuery(date)));
    }

    /// <summary>
    /// Update MilkingInputs By Datee
    /// </summary>
    [HttpPost("milkingInputs")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<MilkingInputsDto>> UpdateMilkingInputs(MilkingInputsDto dto)
    {
        return Ok(await _mediator.Send(new UpdateMilkingInputsByDateCommand(dto)));
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
