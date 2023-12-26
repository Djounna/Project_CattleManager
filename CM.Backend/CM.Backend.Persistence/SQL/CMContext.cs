using CM.Backend.Domain.Alerts;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Externals;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Domain.Jobs;
using CM.Backend.Domain.Workers;
using Microsoft.EntityFrameworkCore;

namespace CM.Backend.Persistence.EF;

public class CMContext : DbContext
{
    public CMContext() { }
    public CMContext(DbContextOptions<CMContext> options) : base(options) { }

    public DbSet<Cow> Cows { get; set; }
    public DbSet<Group> Groups { get; set; }

    public DbSet<Pen> Pens { get; set; }
    public DbSet<Stock> Stocks { get; set; }

    public DbSet<Job> Jobs { get; set; }
    public DbSet<RecurringJob> RecurringJobs { get; set; }
    public DbSet<WorkerJob> WorkerJobs { get; set; }

    public DbSet<Worker> Workers { get; set; }
    public DbSet<Intervenant> Intervenants { get; set; }

    public DbSet<Gestation> Gestations { get; set; }
    public DbSet<Intervention> Interventions { get; set; }
    public DbSet<MilkProduction> MilkProductions { get; set; }
    public DbSet<Milking> Milkings { get; set; }

    public DbSet<Alert> Alerts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=LAPTOP-R3GDQJIT;Database=CattleManager;Trusted_Connection=True;TrustServerCertificate=True");
    }
}
