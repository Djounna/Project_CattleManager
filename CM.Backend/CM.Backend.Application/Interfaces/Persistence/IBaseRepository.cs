using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IBaseRepository<T> where T : class 
{
    Task<T> GetById(int id, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<T>> GetList(CancellationToken cancellationToken = default);
    Task<T> Create(T entity, CancellationToken cancellationToken = default);
    Task<T> Update(T entity, CancellationToken cancellationToken = default);
    Task Delete(int id, CancellationToken cancellationToken = default);
}
