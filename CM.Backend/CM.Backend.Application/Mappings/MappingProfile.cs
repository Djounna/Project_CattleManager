using AutoMapper;
using CM.Backend.Application.Models.CowDetails;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Externals;
using CM.Backend.Application.Models.Infrastructures;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Notifications;
using CM.Backend.Application.Models.Users;
using CM.Backend.Application.Models.Workers;
using CM.Backend.Domain.Alerts;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Externals;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Domain.Jobs;
using CM.Backend.Domain.Users;
using CM.Backend.Domain.Workers;

namespace CM.Backend.Application.Mappings;
public class MappingProfile : Profile
{
    public MappingProfile() 
    {
        CreateMap<Cow, CowDto>().ReverseMap();
        CreateMap<Job, JobDto>().ReverseMap();
        CreateMap<Group, GroupDto>().ReverseMap();
        CreateMap<Pen, PenDto>().ReverseMap();
        CreateMap<Stock, StockDto>().ReverseMap();
        CreateMap<WorkerJob, WorkerJobDto>().ReverseMap();
        CreateMap<RecurringJob, RecurringJobDto>().ReverseMap();
        CreateMap<Intervenant, IntervenantDto>().ReverseMap();
        CreateMap<Intervention, InterventionDto>().ReverseMap();
        CreateMap<Gestation, GestationDto>().ReverseMap();
        CreateMap<MilkProduction, MilkProductionDto>().ReverseMap();
        CreateMap<Milking, MilkingDto>().ReverseMap();
        CreateMap<Alert, AlertDto>().ReverseMap();
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<Role, RoleDto>().ReverseMap();
        CreateMap<Worker, WorkerDto>().ReverseMap();
    }
    
    //public MappingProfile()
    //{
    //    // Calling the private method
    //    ApplyMappingFromAssembly(Assembly.GetExecutingAssembly());
    //}

    //private void ApplyMappingFromAssembly(Assembly assembly)
    //{
    //    // Getting the list of classes and all types that implement IMapFrom

    //    var types = assembly.GetExportedTypes()
    //        .Where(t => t.GetInterfaces()
    //            .Any(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapFrom<>)))
    //        .ToList();

    //    // Here we're looping through all elements in order to apply the method Mapping

    //    foreach (var type in types)
    //    {
    //        var instance = Activator.CreateInstance(type);
    //        var methodInfo = type.GetMethod("Mapping") ??
    //                         type.GetInterface("IMapFrom`1")!.GetMethod("Mapping");
    //        methodInfo?.Invoke(instance, new object[] { this });
    //    }
    //}
}
