using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IBaseRepository<T> where T : class 
{
    Task<T> GetById(int id);
    Task<IReadOnlyList<T>> GetList();
    Task<T> Create(T entity);
    Task<T> Update(T entity);
    Task Delete(int id);
}
