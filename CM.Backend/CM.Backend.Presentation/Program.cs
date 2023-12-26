using CM.Backend.Application;
using CM.Backend.Persistence;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Add Application Services
builder.Services.AddApplicationServices();
// Add Persistence Services
builder.Services.AddPersistenceServices(configuration);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
