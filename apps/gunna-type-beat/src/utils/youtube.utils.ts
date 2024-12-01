export function formatYouTubeUrlForIframe(youtubeUrl: string): string {
  const urlPattern =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)(?<temp1>[a-zA-Z0-9_-]{11})/;

  const match = urlPattern.exec(youtubeUrl);

  if (match?.[1]) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  throw new Error("Invalid YouTube URL");
}
