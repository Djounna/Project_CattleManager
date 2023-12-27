using CM.Backend.Application;
using CM.Backend.Persistence;
using CM.Backend.Presentation.Configurations;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Add JwtBearer Authentication
builder.Services.AddAuthenticationJwtBearer(configuration);

// Add Application Services
builder.Services.AddApplicationServices();
// Add Persistence Services
builder.Services.AddPersistenceServices(configuration);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerConfig();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//app.UseStaticFiles(); // Needed if you want to customize the swagger UI page

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
