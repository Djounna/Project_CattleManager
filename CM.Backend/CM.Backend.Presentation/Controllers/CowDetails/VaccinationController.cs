using MediatR;
using Microsoft.AspNetCore.Mvc;
using CM.Backend.Application.Services.Vaccination.Queries;
using CM.Backend.Application.Services.Vaccination.Commands;
using CM.Backend.Application.Models.CowDetails;

namespace CM.Backend.Presentation.Controllers.Vaccinations;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class VaccinationController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public VaccinationController(IMediator mediator)
    {
        _mediator = mediator;
    }

    /// <summary>
    /// Get Vaccination By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<VaccinationDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetVaccinationByIdQuery(id)));
    }

    /// <summary>
    /// Get All Vaccinations
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<VaccinationDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetVaccinationsQuery()));
    }

    /// <summary>
    /// Get Vaccinations By Cow Id
    /// </summary>
    /// <returns></returns>
    [HttpGet("{cowId}")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<VaccinationDto>>> GetListByCowId(int cowId)
    {
        return Ok(await _mediator.Send(new GetVaccinationsByCowIdQuery(cowId)));
    }

    /// <summary>
    /// Create a vaccination
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<VaccinationDto>> Create([FromBody] VaccinationDto dto)
    {
        return Ok(await _mediator.Send(new CreateVaccinationCommand(dto)));
    }

    /// <summary>
    /// Update a vaccination 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<VaccinationDto>> Update([FromBody] VaccinationDto dto)
    {
        return Ok(await _mediator.Send(new UpdateVaccinationCommand(dto)));
    }

    /// <summary>
    /// Delete a vaccination
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteVaccinationCommand(id));
        return Ok();
    }
}
