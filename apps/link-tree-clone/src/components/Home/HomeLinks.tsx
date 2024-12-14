import React, { memo } from "react";
import { linkBlocks } from "../../data/linkBlocks.data";
import { ImageIcon } from "../Icons/ImageIcon";
import { AnimatedLinkBlock } from "../Links/AnimatedLinkBlock";

export const HomeLinks = memo(() => {
  return (
    <div className="w-full flex flex-col gap-2 rounded mb-4">
      {linkBlocks
        .filter((link) => link.active)
        .map((block, index) => (
          <AnimatedLinkBlock
            key={index}
            title={block.title}
            link={block.link}
            icon={<ImageIcon icon={block.icon} iconType={block.iconType} />}
          />
        ))}
    </div>
  );
});
