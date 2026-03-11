'use client'

import VideoPlayer from '@/components/VideoPlayer'

export default function Home() {
  const sampleVideoUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'

  return (
    <main>
      <h1>OTT Video Streaming Platform</h1>
      <VideoPlayer 
        src={sampleVideoUrl} 
        title="Sample HLS Video Stream" 
      />
    </main>
  )
}