import Link from 'next/link'
import { Video } from '@/types/video'

export function VideoCard({ video }: { video: Video }) {
  return (
    <Link 
      href={`/video/${video.id}`} 
      className="block hover:opacity-80 transition-opacity"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{video.title}</h2>
          <p className="text-gray-600 line-clamp-2">{video.description}</p>
        </div>
      </div>
    </Link>
  );
}