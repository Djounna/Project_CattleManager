﻿using CM.Backend.Domain.CowDetails;

namespace CM.Backend.Application.Interfaces.Persistence;
public interface IMilkingRepository : IBaseRepository<Milking>
{
    Milking GetByCowAndDate(int cowId, DateOnly date);

    IEnumerable<Milking> GetListByDate(DateOnly date);

    IEnumerable<Milking> GetListByDateRange(DateOnly start, DateOnly end);

    IEnumerable<Milking> GetRangeByCowId(int cowId, int range);

    IEnumerable<Milking> GetDateRangeByCowId(int cowId, DateOnly start, DateOnly end);
}
