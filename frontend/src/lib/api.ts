import { Video } from '@/types/video'

const BASE_URL = 'https://ott-video-demo.onrender.com/videos';

export async function fetchVideos(): Promise<Video[]> {
  try {
    const response = await fetch(BASE_URL, {
      next: { revalidate: 3600 } // 1-hour cache
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }
    
    return response.json();
  } catch (error) {
    console.error('Video fetch error:', error);
    return [];
  }
}

export async function fetchVideoById(id: string): Promise<Video> {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch video details');
    }
    
    return response.json();
  } catch (error) {
    console.error('Video details fetch error:', error);
    throw error;
  }
}