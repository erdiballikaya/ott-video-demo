using Microsoft.OpenApi.Models;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo 
    { 
        Title = "OTT Video Demo API", 
        Version = "v1",
        Description = "A demo API for OTT video streaming platform"
    });
});

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowVercelFrontend", builder =>
    {
        builder.WithOrigins("https://*.vercel.app", "http://localhost:3000")
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Register services
builder.Services.AddSingleton<VideoService>();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => 
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "OTT Video Demo API v1");
        c.RoutePrefix = "swagger";
    });
}

// Apply CORS
app.UseCors("AllowVercelFrontend");

// Video Endpoints
app.MapGet("/videos", (VideoService videoService) => 
{
    return Results.Ok(videoService.GetAllVideos());
})
.WithName("GetVideos")
.WithOpenApi();

app.MapGet("/videos/{id}", (int id, VideoService videoService) => 
{
    var video = videoService.GetVideoById(id);
    return video != null 
        ? Results.Ok(video) 
        : Results.NotFound();
})
.WithName("GetVideoById")
.WithOpenApi();

app.Run();