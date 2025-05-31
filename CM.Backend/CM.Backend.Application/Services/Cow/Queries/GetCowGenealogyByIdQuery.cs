using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.CowDetails;
using CM.Backend.Application.Models.Cows;
using MediatR;

namespace CM.Backend.Application.Services.Cow.Queries;

public record GetCowGenealogyByIdQuery(int id) : IRequest<CowGenealogyDto>;

public class GetCowGenealogyByIdQueryHandler : IRequestHandler<GetCowGenealogyByIdQuery, CowGenealogyDto>
{
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public GetCowGenealogyByIdQueryHandler(ICowRepository cowRepository, IMapper mapper)
    {
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<CowGenealogyDto> Handle(GetCowGenealogyByIdQuery request, CancellationToken cancellationToken)
    {
        var cow = _cowRepository.GetCowGenealogyById(request.id);

        CowGenealogyDto genealogy = new()
        {
            Cow = _mapper.Map<CowDto>(cow),
            Father = cow.Father != null ? new ParentDto()
            {
                Cow = _mapper.Map<CowDto>(cow.Father),
                Father = cow.Father?.Father != null ? _mapper.Map<CowDto>(cow.Father.Father) : null,
                Mother = cow.Father?.Mother != null ? _mapper.Map<CowDto>(cow.Father.Mother) : null,
            } : null,
            Mother = cow.Mother != null ? new ParentDto()
            {
                Cow = _mapper.Map<CowDto>(cow.Mother),
                Father = cow.Mother?.Father != null ? _mapper.Map<CowDto>(cow.Mother.Father) : null,
                Mother = cow.Mother?.Mother != null ? _mapper.Map<CowDto>(cow.Mother.Mother) : null,
            } : null
        };

        return genealogy; // , cancellationToken
    }
}
