using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CM.Backend.Application.Services.Stock.Queries;
using CM.Backend.Application.Services.Stock.Commands;
using CM.Backend.Application.Models.Infrastructures;

namespace CM.Backend.Presentation.Controllers.Stocks;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class StockController : ControllerBase
{
    public readonly IMediator _mediator;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="mediator"></param>
    public StockController(IMediator mediator)
    {
        _mediator = mediator;  
    }

    /// <summary>
    /// Get All Stocks
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Authorize("read:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<StockDto>>> GetList()
    {
        return Ok(await _mediator.Send(new GetStocksQuery()));
    }
    
    /// <summary>
    /// Get Stock By Id 
    /// </summary>
    /// <param name="id">Id</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    [Authorize("read:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<StockDto>> GetById(int id)
    {
        return Ok(await _mediator.Send(new GetStockByIdQuery(id)));
    }

    /// <summary>
    /// Create an stock
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPost]
    [Authorize("write:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<StockDto>> Create([FromBody]StockDto dto)
    {
        return Ok(await _mediator.Send(new CreateStockCommand(dto)));
    }

    /// <summary>
    /// Update an stock 
    /// </summary>
    /// <param name="dto"></param>
    /// <returns></returns>
    [HttpPut]
    [Authorize("write:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<StockDto>> Update([FromBody]StockDto dto)
    {
        return Ok(await _mediator.Send(new UpdateStockCommand(dto)));
    }

    /// <summary>
    /// Delete an stock
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [Authorize("write:infrastructures")]
    [ProducesDefaultResponseType]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult> Delete(int id)
    {
        await _mediator.Send(new DeleteStockCommand(id));
        return Ok();
    }
}
