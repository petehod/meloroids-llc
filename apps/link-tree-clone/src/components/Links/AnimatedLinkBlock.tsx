"use client";
import { memo } from "react";
import { GrowAnimationWrapper } from "../../components/AnimationWrapper/GrowAnimationWrapper";
import { LinkBlock } from "./LinkBlock";

type AnimatedLinkBlockProps = {
  title: string;
  icon: React.ReactNode;
  link: string;
};
export const AnimatedLinkBlock = memo<AnimatedLinkBlockProps>(
  ({ icon, link, title }) => {
    return (
      <GrowAnimationWrapper>
        <LinkBlock
          icon={icon}
          link={link}
          title={title}
          styles="flex rounded-sm h-16 border-1 border-dark w-full items-center justify-start"
        />
      </GrowAnimationWrapper>
    );
  }
);
