import Image, { ImageProps } from "next/image";
import { memo } from "react";

export const SuperImage = memo<ImageProps>(({ alt, src, ...rest }) => {
  return <Image alt={alt} src={src} {...rest} />;
});
