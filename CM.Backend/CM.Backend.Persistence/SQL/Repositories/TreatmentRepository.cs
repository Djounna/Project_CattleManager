using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class TreatmentRepository : BaseRepository<Treatment>, ITreatmentRepository
{
    public TreatmentRepository(CMContext context) : base(context) { }
}
