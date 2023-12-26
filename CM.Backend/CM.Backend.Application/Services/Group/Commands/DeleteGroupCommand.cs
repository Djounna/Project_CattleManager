using MediatR;
using CM.Backend.Application.Interfaces.Persistence;

namespace CM.Backend.Application.Services.Group.Commands;
public record DeleteGroupCommand(int id) : IRequest;

public class DeleteGroupCommandHandler : IRequestHandler<DeleteGroupCommand>
{
    private readonly IGroupRepository _groupRepository;

    public DeleteGroupCommandHandler(IGroupRepository groupRepository)
    {
        _groupRepository = groupRepository;
    }

    public async Task Handle(DeleteGroupCommand request, CancellationToken cancellationToken)
    {
        _groupRepository.Delete(request.id);
        _groupRepository.Save();
    }
}

