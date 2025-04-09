using AutoMapper;
using CM.Backend.Application.Models.CowDetails;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Externals;
using CM.Backend.Application.Models.Infrastructures;
using CM.Backend.Application.Models.Jobs;
using CM.Backend.Application.Models.Notifications;
using CM.Backend.Application.Models.Users;
using CM.Backend.Application.Services.Group.Commands;
using CM.Backend.Domain.Alerts;
using CM.Backend.Domain.CowDetails;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Externals;
using CM.Backend.Domain.Infrastructures;
using CM.Backend.Domain.Jobs;
using CM.Backend.Domain.Users;

namespace CM.Backend.Application.Mappings;
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<DateTime, DateOnly>().ConvertUsing<DateTimeToDateOnlyConverter>();
        CreateMap<DateOnly, DateTime>().ConvertUsing<DateOnlyToDateTimeConverter>();

        CreateMap<Cow, CowDto>()
            .ForMember(dest => dest.BirthDate, opt => opt.MapFrom(src => src.BirthDate))
            .ReverseMap()
            .ForMember(dest => dest.BirthDate, opt => opt.MapFrom(src => src.BirthDate));

        CreateMap<Job, JobDto>()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date))
            .ReverseMap()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date));

        CreateMap<Group, GroupDto>().ReverseMap();
        CreateMap<Group, GroupDetailsDto>().ReverseMap();
        CreateMap<GroupMove, GroupMoveDto>().ReverseMap();
        CreateMap<Pen, PenDto>().ReverseMap();
        CreateMap<Pen, PenDetailsDto>().ReverseMap();
        CreateMap<PenMove, PenMoveDto>().ReverseMap();
        CreateMap<Stock, StockDto>().ReverseMap();
        CreateMap<WorkerJob, WorkerJobDto>().ReverseMap();
        CreateMap<RecurringJob, RecurringJobDto>().ReverseMap();
        CreateMap<Intervenant, IntervenantDto>().ReverseMap();

        CreateMap<Intervention, InterventionDto>()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date))
            .ReverseMap()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date));

        CreateMap<Gestation, GestationDto>()
            .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate))
            .ForMember(dest => dest.CalvingDate, opt => opt.MapFrom(src => src.CalvingDate))
            .ReverseMap()
            .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate))
            .ForMember(dest => dest.CalvingDate, opt => opt.MapFrom(src => src.CalvingDate));

        CreateMap<Vaccination, VaccinationDto>()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date))
            .ReverseMap()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date));

        CreateMap<Condition, ConditionDto>()
            .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate))
            .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.EndDate))
            .ReverseMap()
            .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate))
            .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.EndDate));

        CreateMap<Treatment, TreatmentDto>()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date))
            .ReverseMap()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date));

        CreateMap<MilkProduction, MilkProductionDto>().ReverseMap();
        CreateMap<Milking, MilkingDto>().ReverseMap();
        CreateMap<Alert, AlertDto>().ReverseMap();
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<User, UserAuth>().ReverseMap();
        CreateMap<Role, RoleDto>().ReverseMap();
        //CreateMap<Worker, WorkerDto>().ReverseMap();
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

    public class DateTimeToDateOnlyConverter : ITypeConverter<DateTime, DateOnly>
    {
        public DateOnly Convert(DateTime source, DateOnly destination, ResolutionContext context)
        {
            return DateOnly.FromDateTime(source);
        }
    }

    public class DateOnlyToDateTimeConverter : ITypeConverter<DateOnly, DateTime>
    {
        public DateTime Convert(DateOnly source, DateTime destination, ResolutionContext context)
        {
            return source.ToDateTime(TimeOnly.MinValue);
        }
    }
}
