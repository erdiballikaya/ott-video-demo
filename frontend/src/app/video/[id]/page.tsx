import { VideoPlayer } from '@/components/VideoPlayer'
import { fetchVideoById } from '@/lib/api'

export default async function VideoDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const video = await fetchVideoById(params.id);
  return (
    <div className="container mx-auto px-4 py-8">
      <VideoPlayer video={video} />
    </div>
  );
}