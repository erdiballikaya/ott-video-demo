'use client'

import React, { useRef, useEffect } from 'react'
import Hls from 'hls.js'

interface VideoPlayerProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  title = 'Video Player',
  autoPlay = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current

    if (videoElement) {
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(src)
        hls.attachMedia(videoElement)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            videoElement.play().catch(error => {
              console.error('Autoplay was prevented:', error)
            })
          }
        })
      } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari support
        videoElement.src = src
        if (autoPlay) {
          videoElement.play().catch(error => {
            console.error('Autoplay was prevented:', error)
          })
        }
      }
    }

    return () => {
      // Cleanup HLS resources if needed
    }
  }, [src, autoPlay])

  return (
    <div className="video-player-container">
      <h2>{title}</h2>
      <video 
        ref={videoRef}
        controls 
        className="video-player"
      />
    </div>
  )
}

export default VideoPlayer