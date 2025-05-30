
using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IVaccinationRepository : IBaseRepository<Vaccination> 
{
    IEnumerable<Vaccination> GetListByCowId(int cowId);
}
