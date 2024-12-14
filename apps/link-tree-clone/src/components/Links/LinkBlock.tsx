import { memo } from "react";
import { LinkWrapper } from "./LinkWrapper";

type LinkBlockProps = {
  link: string;
  title: string;
  icon: React.ReactNode;
  styles?: string;
};
export const LinkBlock = memo<LinkBlockProps>(
  ({ link, title, icon, styles }) => {
    return (
      <LinkWrapper link={link} styles={styles}>
        <div className="w-16 h-full flex justify-center items-center rounded-l-ss">
          {icon}
        </div>
        <h2 className="text-1 w-full max-w-20">{title}</h2>
      </LinkWrapper>
    );
  }
);
