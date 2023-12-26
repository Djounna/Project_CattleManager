using CM.Backend.Domain.Base;

namespace CM.Backend.Domain.Infrastructures;
public class Stock : BaseEntity
{
    public string Type;
    public int Volume;
}
