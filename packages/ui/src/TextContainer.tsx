import { memo } from "react";
import { DEFAULT_TEXT_CONTAINER_STYLES } from "./constants/container.constants";

type TextContainerProps = {
  children: React.ReactNode;
  containerStyles?: string;
};

export const TextContainer = memo(
  ({ children, containerStyles = `` }: TextContainerProps) => {
    return (
      <div className={`${DEFAULT_TEXT_CONTAINER_STYLES} ${containerStyles}`}>
        {children}
      </div>
    );
  }
);
