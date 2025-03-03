using CM.Backend.Application.Models.Cows;

namespace CM.Backend.Application.Models.CowDetails;
public class MilkingInputsDto
{
    public DateOnly Date { get; set; }
    public List<MilkingInputDto> MilkingInputs { get; set; } = new List<MilkingInputDto>();
}

public class MilkingInputDto
{
    public int CowId { get; set; }
    public bool Done { get; set; }
    public double Volume { get; set; }
    public DateOnly? Date { get; set; }
    public bool Cancelled { get; set; } 
}
