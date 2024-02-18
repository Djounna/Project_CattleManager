using AutoMapper;
using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Application.Models.Cows;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Application.Services.Group.Commands;
public  record AssignToGroupCommand(GroupDetailsDto dto): IRequest<GroupDetailsDto>;

public class AssignToGroupCommandHandler: IRequestHandler<AssignToGroupCommand, GroupDetailsDto>
{
    
    private readonly IGroupRepository _groupRepository;
    private readonly ICowRepository _cowRepository;
    private readonly IMapper _mapper;

    public AssignToGroupCommandHandler(IGroupRepository groupRepository, ICowRepository cowRepository, IMapper mapper)
    {
        _groupRepository = groupRepository;
        _cowRepository = cowRepository;
        _mapper = mapper;
    }

    public async Task<GroupDetailsDto> Handle(AssignToGroupCommand request, CancellationToken token)
    {
        request.dto.Cows.ForEach(c =>
        {
            if (c.GroupId != request.dto.Id)
            {
                c.GroupId = request.dto.Id;
                _cowRepository.Update(_mapper.Map<Domain.Cows.Cow>(c));
            }
            _cowRepository.Save();
        });

        return _mapper.Map<GroupDetailsDto>(_groupRepository.GetDetailsById(request.dto.Id));
    }
}
