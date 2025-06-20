using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class VaccinationRepository : BaseRepository<Vaccination>, IVaccinationRepository
{
    public VaccinationRepository(CMContext context) : base(context) { }
    public IEnumerable<Vaccination> GetListByCowId(int cowId)
    {
        return _context.Vaccinations.Where(gm => gm.CowId == cowId).ToList();
    }
}
