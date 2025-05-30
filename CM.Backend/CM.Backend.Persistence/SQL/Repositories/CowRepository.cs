using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Cows;
using CM.Backend.Persistence.EF;
using Microsoft.EntityFrameworkCore;

namespace CM.Backend.Persistence.SQL.Repositories;
public class CowRepository : BaseRepository<Cow>, ICowRepository
{
    public CowRepository(CMContext context) : base(context) { }

    public IEnumerable<Cow> GetMilkCowList()
    {
        return _context.Cows.Where(c => c.MilkCow).ToList();
    }

    public IEnumerable<Cow> GetListWithDetails()
    {
        return _context.Cows
            .Include(c => c.Group)
            .Include(c => c.Pen)
            .ToList();
    }

    public Cow GetDetailsById(int id)
    {
        Cow cowDetails = _context.Cows
            .Include(c => c.Vaccinations)
            .Include(c => c.Interventions)
            .Include(c => c.Gestations)
            .Include(c => c.Conditions)
            .Include(c => c.Treatments)
            .Include(c => c.Pen)
            .Include(c => c.Group)
            .Include(c => c.PenMoves) // limit number
            .Include(c => c.GroupMoves)
            .FirstOrDefault(c => c.Id == id);

        return cowDetails;
    }

    public IEnumerable<Cow> GetCowChildrenById(int id)
    {
        IEnumerable<Cow> children = _context.Cows.Where(c => c.FatherId == id || c.MotherId == id).ToList();
        return children;
    }

    public Cow GetCowGenealogyById(int id)
    {
        Cow cowDetails = _context.Cows
            .Include(c => c.Father)
            .ThenInclude(cf => cf.Father)
            .ThenInclude(cf => cf.Mother)
            .Include(c => c.Mother)
            .ThenInclude(cm => cm.Father)
            .ThenInclude(cm => cm.Mother)
            .FirstOrDefault(c => c.Id == id);

        return cowDetails;
    }
}
