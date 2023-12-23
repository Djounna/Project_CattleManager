﻿using CM.Backend.Application.Interfaces.Persistence;
using CM.Backend.Domain.Alerts;
using CM.Backend.Persistence.EF;

namespace CM.Backend.Persistence.SQL.Repositories;
public class AlertRepository : BaseRepository<Alert>, IAlertRepository
{
    public AlertRepository(CMContext context): base(context){}
}
