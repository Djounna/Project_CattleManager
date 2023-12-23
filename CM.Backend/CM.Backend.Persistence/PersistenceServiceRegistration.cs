using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Persistence.EF;
using CM.Backend.Persistence.SQL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CM.Backend.Persistence;
public static class PersistenceServiceRegistration
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services, IConfigurationProvider configuration)
    {
        services.AddDbContext<CMContext>(options => options.UseSqlServer("test"));

        services.AddScoped(typeof(IBaseRepository<>),typeof(BaseRepository<>));
        services.AddScoped<IAlertRepository, AlertRepository>();
        services.AddScoped<ICowRepository, CowRepository>();
        services.AddScoped<IGroupRepository, GroupRepository>();
        services.AddScoped<IGestationRepository, GestationRepository>();
        services.AddScoped<IInterventionRepository, InterventionRepository>();
        services.AddScoped<IMilkingRepository, MilkingRepository>();
        services.AddScoped<IMilkProductionRepository, MilkProductionRepository>();
        services.AddScoped<IIntervenantRepository, IntervenantRepository>();
        services.AddScoped<IWorkerRepository, WorkerRepository>();
        services.AddScoped<IJobRepository, JobRepository>();
        services.AddScoped<IRecurringJobRepository, RecurringJobRepository>();
        services.AddScoped<IWorkerJobRepository, WorkerJobRepository>();
        services.AddScoped<IPenRepository, PenRepository>();
        services.AddScoped<IStockRepository, StockRepository>();

        return services;
    }
}
