﻿using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Persistence.EF;
using CM.Backend.Persistence.SQL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace CM.Backend.Persistence;
public static class PersistenceServiceRegistration
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<CMContext>(options => options.UseSqlServer(configuration.GetConnectionString("CMConnectionString")));

        //services.AddScoped(typeof(IBaseRepository<>),typeof(BaseRepository<>));
        services.AddScoped<IAlertRepository, AlertRepository>();
        services.AddScoped<ICowRepository, CowRepository>();
        services.AddScoped<IGroupRepository, GroupRepository>();
        services.AddScoped<IGroupMoveRepository, GroupMoveRepository>();
        services.AddScoped<IGestationRepository, GestationRepository>();
        services.AddScoped<IInterventionRepository, InterventionRepository>();
        services.AddScoped<IVaccinationRepository, VaccinationRepository>();
        services.AddScoped<IConditionRepository, ConditionRepository>();
        services.AddScoped<ITreatmentRepository, TreatmentRepository>();
        services.AddScoped<IMilkingRepository, MilkingRepository>();
        services.AddScoped<IMilkProductionRepository, MilkProductionRepository>();
        services.AddScoped<IIntervenantRepository, IntervenantRepository>();
        services.AddScoped<IJobRepository, JobRepository>();
        services.AddScoped<IRecurringJobRepository, RecurringJobRepository>();
        services.AddScoped<IWorkerJobRepository, WorkerJobRepository>();
        services.AddScoped<IPenRepository, PenRepository>();
        services.AddScoped<IPenMoveRepository, PenMoveRepository>();
        services.AddScoped<IStockRepository, StockRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IRoleRepository, RoleRepository>();
        //services.AddScoped<IWorkerRepository, WorkerRepository>();

        return services;
    }
}
