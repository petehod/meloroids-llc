import { formatYouTubeUrlForIframe } from "../../utils/youtube.utils";

interface SongDetailsIFrameProps {
  source: string;
  width?: string | number;
  height?: string | number;
  containerStyles?: string;
}

export const SongDetailsIFrame = ({
  source,
  width = "100%",
  height = 400,
  containerStyles
}: SongDetailsIFrameProps) => {
  const formattedUrl = formatYouTubeUrlForIframe(source);

  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={`rounded mb-6 ${containerStyles}`}
      height={height}
      referrerPolicy="strict-origin-when-cross-origin"
      src={formattedUrl}
      title="YouTube video player"
      width={width}
    />
  );
};
