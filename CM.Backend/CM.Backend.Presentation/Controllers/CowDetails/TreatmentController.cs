using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Treatment.Queries;
using CM.Backend.Application.Services.Treatment.Commands;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Presentation.Controllers.Treatments;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class TreatmentController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public TreatmentController(IMediator mediator)
    {
        _mediator = mediator;
    }

    /// <summary>
    /// Get Treatment By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<TreatmentDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetTreatmentByIdQuery(id)));
    }

    /// <summary>
    /// Get All Treatments
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<TreatmentDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetTreatmentsQuery()));
    }

    /// <summary>
    /// Get Treatments By Cow Id
    /// </summary>
    /// <returns></returns>
    [HttpGet("{cowId}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<TreatmentDto>>> GetListByCowId(int cowId)
    {
        return Ok(await _mediator.Send(new GetTreatmentsByCowIdQuery(cowId)));
    }

    /// <summary>
    /// Create a treatment
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<TreatmentDto>> Create([FromBody] TreatmentDto dto)
    {
        return Ok(await _mediator.Send(new CreateTreatmentCommand(dto)));
    }

    /// <summary>
    /// Update a treatment 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<TreatmentDto>> Update([FromBody] TreatmentDto dto)
    {
        return Ok(await _mediator.Send(new UpdateTreatmentCommand(dto)));
    }

    /// <summary>
    /// Delete a treatment
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteTreatmentCommand(id));
        return Ok();
    }
}
