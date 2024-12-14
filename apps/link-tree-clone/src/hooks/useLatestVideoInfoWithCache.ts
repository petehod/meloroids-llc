import { useState, useEffect } from "react";

interface VideoInfo {
  url: string;
  title: string;
  thumbnailUrl: string;
}

export const useLatestVideoInfoWithCache = () => {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({
    url: "",
    title: "",
    thumbnailUrl: "",
  });

  useEffect(() => {
    const cacheKey = `latestVideo-${process.env.NEXT_PUBLIC_CHANNEL_ID}`;
    const cachedData = localStorage.getItem(cacheKey);
    const now = new Date();

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      const hoursDiff =
        (now.getTime() - new Date(timestamp).getTime()) / (1000 * 60 * 60);
      if (hoursDiff < 24) {
        setVideoInfo(data);
        return;
      }
    }

    const fetchLatestVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=id,snippet&order=date&maxResults=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch the latest video");
        }
        const data = await response.json();
        if (data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          const title = data.items[0].snippet.title;
          const thumbnailUrl = data.items[0].snippet.thumbnails.high.url;
          const newVideoInfo = {
            url: `https://www.youtube.com/watch?v=${videoId}`,
            title,
            thumbnailUrl,
          };
          setVideoInfo(newVideoInfo);
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ data: newVideoInfo, timestamp: now })
          );
        }
      } catch (error) {
        console.error("Error fetching the latest video:", error);
      }
    };

    fetchLatestVideo();
  }, []);

  return videoInfo;
};
