using CM.Backend.Application;
using CM.Backend.Infrastructure;
using CM.Backend.Infrastructure.SignalR;
using CM.Backend.Persistence;
using CM.Backend.Presentation.Configurations;

var builder = WebApplication.CreateBuilder(args);

//#if Debug
//builder.WebHost.UseUrls("http://192.168.1.8:5139");
//#endif

var configuration = builder.Configuration;

// Add JwtBearer Authentication
builder.Services.AddAuthenticationJwtBearer(configuration);

// Add Application Services
builder.Services.AddApplicationServices();
// Add Persistence Services
builder.Services.AddPersistenceServices(configuration);
// Add Infrastructure Services
builder.Services.AddInfrastructureServices(configuration);

// Add services to the container.
builder.Services.AddControllers();

// Cors
string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
      builder => builder
      .WithOrigins("http://localhost:4200")
      .AllowAnyHeader()
      .AllowAnyMethod()
      .AllowCredentials());
});

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


//app.UseHttpsRedirection();

//app.UseStaticFiles(); // Needed if you want to customize the swagger UI page

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapHub<CMHub>("/CMhub");
app.Run();
