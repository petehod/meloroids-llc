"use client";
import { X } from "react-feather";
import { BackgroundColors } from "./constants/colors.constants";
import { DEFAULT_HEADER_STYLES } from "./constants/header.constants";
import { motion } from "framer-motion";
import { BUTTON_VARIANTS } from "./constants/animation.constants";
import { MadeByDean } from "./MadeByDean";
import { ContentContainer } from "./ContentContainer";
interface MobileMenuProps {
  navLinks: JSX.Element[];
  onClick: () => void;
  isOpen: boolean;
  logo: JSX.Element;
  backgroundColor: BackgroundColors;
}

export const MobileMenu = ({
  navLinks,
  onClick,
  isOpen,
  logo,
  backgroundColor,
  ...rest
}: MobileMenuProps) => {
  return (
    <ContentContainer
      containerStyles={`${DEFAULT_HEADER_STYLES}   fixed inset-0 h-screen w-full shadow-md min-h-screen z-50 flex flex-col items-center justify-between  ${backgroundColor} lg:hidden`}
    >
      <div className=" flex w-full h-24 justify-between items-center">
        {logo}
        <button
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className={`flex justify-end items-center h-full`}
        >
          <X size={36} />
        </button>
      </div>
      <ul className="w-full flex-1">
        {navLinks.map((link, index) => (
          <motion.li
            variants={BUTTON_VARIANTS}
            whileHover={"hover"}
            whileTap={"press"}
            // animate="initial"
            key={index}
            className="cursor-pointer w-full   m-0 h-16 pl-2 flex justify-center items-center "
          >
            <button onClick={onClick} className="w-full h-full">
              {link}
            </button>
          </motion.li>
        ))}
      </ul>
      <MadeByDean />
    </ContentContainer>
  );
};
