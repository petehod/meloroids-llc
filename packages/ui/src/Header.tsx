"use client";
import { memo, useState } from "react";
import { ContentContainer } from "./ContentContainer";
import { DEFAULT_HEADER_STYLES } from "./constants/header.constants";
import { Menu, X } from "react-feather";
import { BackgroundColors } from "./constants/colors.constants";
import { MobileMenu } from "./MobileMenu";

type HeaderProps = {
  logo: JSX.Element;
  navLinks: JSX.Element[];
};

export const Header = memo(({ logo, navLinks }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburgerMenu = () => setIsOpen((prev) => !prev);

  const ICON_SIZE = 36;

  const backgroundColor: BackgroundColors = "bg-primary";
  return (
    <header
      className={`${DEFAULT_HEADER_STYLES}  lg:px-0 flex justify-center items-center `}
    >
      <ContentContainer containerStyles="flex-row relative z-10 justify-between items-center w-full">
        {logo}

        <nav className="gap-8 h-full items-center justify-center hidden lg:flex">
          {navLinks}
        </nav>

        <button
          onClick={toggleHamburgerMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="lg:hidden"
        >
          <Menu size={ICON_SIZE} className="hamburger" />
        </button>

        {isOpen && (
          <MobileMenu
            backgroundColor={backgroundColor}
            isOpen
            logo={logo}
            navLinks={navLinks}
            onClick={toggleHamburgerMenu}
          />
        )}
      </ContentContainer>
    </header>
  );
});
