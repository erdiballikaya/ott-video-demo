import { Video } from '@/types/video'

export function VideoPlayer({ video }: { video: Video }) {
  return (
    <div className="max-w-4xl mx-auto">
      <video 
        controls 
        className="w-full rounded-lg shadow-lg"
        src={video.videoUrl}
      >
        Your browser does not support the video tag.
      </video>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <p className="text-gray-600 mt-2">{video.description}</p>
      </div>
    </div>
  );
}