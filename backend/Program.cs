var builder = WebApplication.CreateBuilder(args);

// Add CORS support
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://your-frontend-domain.com")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Enable CORS
app.UseCors();

// Video catalog endpoint
app.MapGet("/api/videos", () =>
{
    return new[]
    {
        new { 
            id = "1", 
            title = "Big Buck Bunny", 
            description = "Animated short film", 
            thumbnailUrl = "/thumbnails/big-buck-bunny.jpg",
            videoUrl = "/videos/big-buck-bunny.m3u8"
        },
        new { 
            id = "2", 
            title = "Sintel", 
            description = "Open movie by the Blender Foundation", 
            thumbnailUrl = "/thumbnails/sintel.jpg",
            videoUrl = "/videos/sintel.m3u8"
        }
    };
});

// Video streaming endpoint (placeholder)
app.MapGet("/api/videos/{id}", (string id) =>
{
    // In a real implementation, this would fetch video metadata and streaming URL
    return new 
    { 
        id = id, 
        streamUrl = $"/videos/{id}.m3u8" 
    };
});

app.Run();