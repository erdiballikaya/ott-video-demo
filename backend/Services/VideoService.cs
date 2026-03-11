public class VideoService
{
    private readonly List<VideoModel> _videos = new()
    {
        new VideoModel 
        {
            Id = 1,
            Title = "Sample Video 1",
            Description = "A demo video for the OTT platform",
            ThumbnailUrl = "https://example.com/thumbnail1.jpg",
            VideoUrl = "https://example.com/video1.mp4",
            Category = "Documentary",
            ReleaseDate = DateTime.UtcNow.AddDays(-30)
        },
        new VideoModel 
        {
            Id = 2,
            Title = "Sample Video 2",
            Description = "Another demo video for the OTT platform",
            ThumbnailUrl = "https://example.com/thumbnail2.jpg",
            VideoUrl = "https://example.com/video2.mp4",
            Category = "Action",
            ReleaseDate = DateTime.UtcNow.AddDays(-15)
        }
    };

    public List<VideoModel> GetAllVideos() => _videos;

    public VideoModel? GetVideoById(int id) => 
        _videos.FirstOrDefault(v => v.Id == id);
}