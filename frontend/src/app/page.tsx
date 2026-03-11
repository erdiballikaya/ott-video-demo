import { VideoList } from '@/components/VideoList'
import { fetchVideos } from '@/lib/api'

export default async function HomePage() {
  const videos = await fetchVideos();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Video Library</h1>
      <VideoList videos={videos} />
    </main>
  );
}