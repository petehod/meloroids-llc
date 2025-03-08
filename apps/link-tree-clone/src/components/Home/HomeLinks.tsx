import React, { memo } from "react";
import { LinkBlock as LinkBlockType } from "../../data/linkBlocks.data";
import { ImageIcon } from "../Icons/ImageIcon";
import { LinkBlock } from "../Links/LinkBlock";

type HomeLinksProps = {
  links: LinkBlockType[];
};

export const HomeLinks = memo<HomeLinksProps>(({ links }) => {
  return (
    <div className="w-full flex flex-col gap-2 rounded mb-4">
      {links
        .filter((link) => link.active)
        .map((block, index) => (
          <LinkBlock
            key={index}
            title={block.title}
            link={block.link}
            icon={<ImageIcon icon={block.icon} iconType={block.iconType} />}
          />
        ))}
    </div>
  );
});
