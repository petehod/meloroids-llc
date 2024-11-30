import { memo } from "react";
import { DEFAULT_CONTAINER_STYLES } from "./constants/container.constants";
import { BackgroundColors } from "./constants/colors.constants";

type ContentContainerProps = {
  children: React.ReactNode;
  backgroundColor?: BackgroundColors;
  containerStyles?: string;
};

/**
 * A container with a max width of 60 rem
 */
export const ContentContainer = memo(
  ({
    children,
    backgroundColor,
    containerStyles = `flex-col items-center justify-center`
  }: ContentContainerProps) => {
    return (
      <div
        className={`${DEFAULT_CONTAINER_STYLES} ${backgroundColor} ${containerStyles}`}
      >
        {children}
      </div>
    );
  }
);
