using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;
using CM.Backend.Application.Models.Cows;
using CM.Backend.Application.Models.Infrastructures;
using MediatR;

namespace CM.Backend.Application.Services.Cow.Queries;
public record GetCowDetailsByIdQuery(int id): IRequest<CowDetailsDto>;

public class GetCowDetailsByIdQueryHandler: IRequestHandler<GetCowDetailsByIdQuery, CowDetailsDto>
{
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public GetCowDetailsByIdQueryHandler(ICowRepository cowRepository, 
        IMapper mapper)
    {
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<CowDetailsDto> Handle(GetCowDetailsByIdQuery request, CancellationToken cancellationToken)
    {
        var cow = _cowRepository.GetDetailsById(request.id);

        //GenealogyDto genealogy = new()
        //{
        //    Father =  cow.Father != null ? new ParentDto() 
        //    { 
        //        Cow = _mapper.Map<CowDto>(cow.Father),
        //        Father = cow.Father?.Father != null ? _mapper.Map<CowDto>(cow.Father.Father): null,
        //        Mother = cow.Father?.Mother != null ? _mapper.Map<CowDto>(cow.Father.Mother): null,
        //    } : null,
        //    Mother =  cow.Mother != null ? new ParentDto() 
        //    { 
        //        Cow = _mapper.Map<CowDto>(cow.Mother),
        //        Father = cow.Mother?.Father != null ? _mapper.Map<CowDto>(cow.Mother.Father): null,
        //        Mother = cow.Mother?.Mother != null ? _mapper.Map<CowDto>(cow.Mother.Mother): null,
        //    } : null
        //};

        //List<CowDto> children = _mapper.Map<List<CowDto>>( _cowRepository.GetCowChildrenById(request.id));

        CowDetailsDto cowDetails = new()
        {
            Id = cow.Id,
            Identifier = cow.Identifier,
            Name = cow.Name,
            Race = cow.Race,
            Gender = cow.Gender,
            BirthDate = cow.BirthDate.ToDateTime(TimeOnly.MinValue),
            MilkCow = cow.MilkCow,
            ImgLink = cow.ImgLink,
            Pen = _mapper.Map<PenDto>(cow.Pen),
            Group = _mapper.Map<GroupDto>(cow.Group),
            PenMoves = _mapper.Map<List<PenMoveDto>>(cow.PenMoves),
            GroupMoves = _mapper.Map<List<GroupMoveDto>>(cow.GroupMoves),
            Vaccinations = _mapper.Map<List<VaccinationDto>>(cow.Vaccinations),
            Interventions = _mapper.Map<List<InterventionDto>>(cow.Interventions),
            Gestations = _mapper.Map<List<GestationDto>>(cow.Gestations),
            Conditions = _mapper.Map<List<ConditionDto>>(cow.Conditions),
            Treatments = _mapper.Map<List<TreatmentDto>>(cow.Treatments),
            //Genealogy = genealogy,
            //Children = children,
            //Milkings = _mapper.Map<List<MilkingDto>>(cow.Milkings),
        };

        return cowDetails;
    }
}
