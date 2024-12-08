"use client";
import { memo, useState } from "react";
import { ContentContainer } from "./ContentContainer";
import { DEFAULT_HEADER_STYLES } from "./constants/header.constants";
import { Menu, X } from "react-feather";
import { BackgroundColors } from "./constants/colors.constants";

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
      className={`${DEFAULT_HEADER_STYLES} w-full flex justify-center items-center `}
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
        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className={`absolute inset-0 h-screen w-full shadow-md min-h-screen z-50 flex flex-col items-center  ${backgroundColor}`}
          >
            <div className=" flex w-full justify-between items-center">
              {logo}
              <button
                onClick={toggleHamburgerMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className={`flex justify-end items-center h-24`}
              >
                <X size={ICON_SIZE} />
              </button>
            </div>
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={toggleHamburgerMenu}
                className="w-full border-2 border-b-2 border-b-0 border-white m-0 h-16 pl-2 flex justify-center items-center rounded"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </ContentContainer>
    </header>
  );
});
