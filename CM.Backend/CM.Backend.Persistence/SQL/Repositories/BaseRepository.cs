using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Persistence.EF;
using Microsoft.EntityFrameworkCore;

namespace CM.Backend.Persistence.SQL.Repositories;

public abstract class BaseRepository<T> : IBaseRepository<T> where T : class
{
    protected readonly CMContext _context;

    public BaseRepository(CMContext context)
    {
        _context = context;
    }

    public virtual IEnumerable<T> GetList()
    {
        return _context.Set<T>().ToList();
    }

    public virtual T GetById(int id)
    {
        return  _context.Set<T>().Find(id);
    }

    public virtual T Create(T entity)
    {
         _context.Set<T>().Add(entity);
        return entity;
    }

    public virtual T Update(T entity)
    {
        return _context.Set<T>().Update(entity).Entity;
    }

    public virtual void Delete(int id)
    {
        var entity = _context.Set<T>().Find(id);

        if (entity != null) { 
        _context.Set<T>().Remove(entity);
        }
    }

    public virtual void Save()
    {
        _context.SaveChanges();
    }
}
