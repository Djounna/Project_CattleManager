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

    public virtual async Task<IEnumerable<T>> GetList()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public virtual async Task<T> GetById(int id)
    {
        return await _context.Set<T>().FindAsync(id);
    }

    public virtual async Task<T> Create(T entity)
    {
        await _context.Set<T>().AddAsync(entity);
        return entity;
    }

    public virtual async Task<T> Update(T entity)
    {
        return _context.Set<T>().Update(entity).Entity;
    }

    public virtual void Delete(T entity)
    {
        _context.Set<T>().Remove(entity);
    }

    public virtual void Save()
    {
        _context.SaveChangesAsync();
    }
}
