using CM.Backend.Domain.Cows;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CM.Backend.Domain.CowDetails;
public class Gestation
{
    public int GestationId { get; set; }
    public int CowId { get; set; }
    public Cow Cow { get; set; }

    public string Status { get; set; }
    public DateOnly StartDate { get; set; }
    public DateOnly? CalvingDate { get; set; }

}
