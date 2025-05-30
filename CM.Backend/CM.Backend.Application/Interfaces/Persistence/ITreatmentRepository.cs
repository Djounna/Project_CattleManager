using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface ITreatmentRepository : IBaseRepository<Treatment>
{
    IEnumerable<Treatment> GetListByCowId(int cowId);
}
