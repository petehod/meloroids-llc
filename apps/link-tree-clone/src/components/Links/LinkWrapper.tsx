import Link from "next/link";
import { memo } from "react";

type LinkWrapperProps = {
  link: string;
  children: React.ReactNode;
  styles?: string;
};

export const LinkWrapper = memo<LinkWrapperProps>(
  ({ link, children, styles }) => {
    return (
      <Link href={link} className={styles}>
        {children}
      </Link>
    );
  }
);
