﻿namespace CM.Backend.Application.Models.Users;
// Not to be send to Front-End
public class UserAuth
{
    public string? IdAuth { get; set; }
    public string Username { get; set; }
    public string Lastname { get; set; }
    public string Firstname { get; set; }
    public string Email { get; set; }
    public string Connection { get; set; }
    public string Password { get; set; }
    //public int IdRole { get; set; }
}

