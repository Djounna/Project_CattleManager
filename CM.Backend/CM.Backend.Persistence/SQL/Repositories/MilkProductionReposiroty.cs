using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class MilkProductionRepository : BaseRepository<MilkProduction>, IMilkProductionRepository
{
    public MilkProductionRepository(CMContext context) : base(context) { }
}
