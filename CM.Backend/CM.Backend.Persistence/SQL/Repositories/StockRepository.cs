using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class StockRepository : BaseRepository<Stock>, IStockRepository
{
    public StockRepository(CMContext context) : base(context) { }
}
