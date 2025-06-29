﻿using CM.Backend.Application.Models.Users;
using CM.Backend.Domain.Base;
using CM.Backend.Domain.Jobs;

namespace CM.Backend.Domain.Users;
public class User: BaseEntity
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string IdAuth { get; set; }

    public int RoleId { get; set; }
    public virtual Role Role { get; set; }

    public ICollection<WorkerJob> WorkerJobs { get; set; } = new List<WorkerJob>();
}
