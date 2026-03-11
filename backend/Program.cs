using Microsoft.OpenApi.Models;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Swagger Configuration
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { 
        Title = "OTT Video Demo API", 
        Version = "v1" 
    });
});

// CORS Configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowVercelOrigin",
        builder => builder
            .WithOrigins("https://*.vercel.app", "http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
    );
});

// Services
builder.Services.AddSingleton<VideoService>();

var app = builder.Build();

// Swagger Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => 
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "OTT Video Demo API v1");
    });
}

// CORS
app.UseCors("AllowVercelOrigin");

// Video Endpoints
app.MapGet("/videos", (VideoService videoService) => 
    Results.Ok(videoService.GetAllVideos()))
    .Produces<List<VideoModel>>(200)
    .WithName("GetVideos")
    .WithTags("Videos");

app.MapGet("/videos/{id}", (int id, VideoService videoService) => 
{
    var video = videoService.GetVideoById(id);
    return video != null 
        ? Results.Ok(video) 
        : Results.NotFound();
})
.Produces<VideoModel>(200)
.Produces(404)
.WithName("GetVideoById")
.WithTags("Videos");

app.Run();

// Expose for testing
public partial class Program { }