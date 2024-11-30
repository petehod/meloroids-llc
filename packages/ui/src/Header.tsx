import { memo } from "react";
import { ContentContainer } from "./ContentContainer";
import { DEFAULT_HEADER_STYLES } from "./constants/header.constants";

type HeaderProps = {
  logo: JSX.Element;
  navLinks: JSX.Element;
};

export const Header = memo(({ logo, navLinks }: HeaderProps) => {
  return (
    <header
      className={`${DEFAULT_HEADER_STYLES} w-full flex justify-center items-center`}
    >
      <ContentContainer containerStyles="flex-row justify-between items-center w-full">
        {logo}

        <nav className="flex gap-8 h-full items-center justify-center">
          {navLinks}
        </nav>
      </ContentContainer>
    </header>
  );
});
