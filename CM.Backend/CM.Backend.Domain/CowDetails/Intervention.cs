using CM.Backend.Domain.Base;
using CM.Backend.Domain.Cows;
using CM.Backend.Domain.Externals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Domain.CowDetails;
public class Intervention : BaseEntity
{
    public int CowId { get; set; }
    public virtual Cow Cow {get; set;}

    public int IntervenantId { get; set; }
    public virtual Intervenant Intervenant { get; set; }

    public DateOnly Date { get; set; }
    public string? Description { get; set; }

}
