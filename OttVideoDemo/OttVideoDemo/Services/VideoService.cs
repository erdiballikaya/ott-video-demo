public class VideoService
{
    private readonly List<Video> _videos = new List<Video>
    {
        new Video 
        {
            Id = 1,
            Title = "Introduction to .NET 8",
            Description = "Learn about the latest features in .NET 8",
            ThumbnailUrl = "https://example.com/thumbnail1.jpg",
            VideoUrl = "https://example.com/video1.mp4",
            CategoryId = 1,
            ReleaseDate = DateTime.Now.AddDays(-30)
        },
        new Video 
        {
            Id = 2,
            Title = "Advanced C# Techniques",
            Description = "Deep dive into advanced C# programming",
            ThumbnailUrl = "https://example.com/thumbnail2.jpg",
            VideoUrl = "https://example.com/video2.mp4",
            CategoryId = 1,
            ReleaseDate = DateTime.Now.AddDays(-15)
        }
    };

    public List<Video> GetAllVideos() => _videos;

    public Video GetVideoById(int id) => 
        _videos.FirstOrDefault(v => v.Id == id);
}