using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Domain.CowDetails;
public class Intervention
{
    public int InterventionId { get; set; }

    public int IntervenantId { get; set; }
    public Intervenant Intervenant { get; set; }

    public DateOnly Date { get; set; }
    public string? Description { get; set; }

}
