using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Models.CowDetails;
public class GenealogyDto
{
    public ParentDto? Mother { get; set; }
    public ParentDto? Father { get; set; }
}

public class ParentDto
{
    public CowDto Cow { get; set; }
    public CowDto? Mother { get; set; }
    public CowDto? Father { get; set; }
}
