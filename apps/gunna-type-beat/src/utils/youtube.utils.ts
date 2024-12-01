export function formatYouTubeUrlForIframe(youtubeUrl: string): string {
  const urlPattern =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = youtubeUrl.match(urlPattern);

  if (match && match[1]) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  throw new Error("Invalid YouTube URL");
}
