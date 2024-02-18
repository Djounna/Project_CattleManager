using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Persistence.EF;
using Microsoft.EntityFrameworkCore;

namespace CM.Backend.Persistence.SQL.Repositories;
public class PenRepository : BaseRepository<Pen>, IPenRepository
{
    public PenRepository(CMContext context): base(context){}

    public Pen GetDetailsById(int id)
    {
        return _context.Pens.Include(g => g.Cows).SingleOrDefault(g => g.Id == id);
    }
}
