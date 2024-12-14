import { memo } from "react";

import { ImageProps } from "next/image";
import { YOUTUBE_LINK } from "../../constants/links.constants";
import { SuperImage } from "../Image/SuperImage";
import { LinkWrapper } from "./LinkWrapper";

type ImageLinkProps = {
  link: string;
};
export const ImageLink = memo<ImageLinkProps & ImageProps>(
  ({ link, alt, src, ...rest }) => {
    return (
      <LinkWrapper link={YOUTUBE_LINK} styles="relative w-16 h-16 mb-2">
        <SuperImage src={src} alt={alt} {...rest} />
      </LinkWrapper>
    );
  }
);
