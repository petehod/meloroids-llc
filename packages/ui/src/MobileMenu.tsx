"use client";
import { X } from "react-feather";
import { BackgroundColors } from "./constants/colors.constants";
import { DEFAULT_HEADER_STYLES } from "./constants/header.constants";
import { motion } from "framer-motion";
import { MadeByDean } from "./MadeByDean";
import {
  MENU_CONTAINER_VARIANTS,
  MENU_LINK_VARIANTS,
  MENU_LIST_VARIANTS
} from "./constants/animation.constants";

interface MobileMenuProps {
  navLinks: JSX.Element[];
  onClick: () => void;
  logo: JSX.Element;
  backgroundColor: BackgroundColors;
  footer: JSX.Element;
}

export const MobileMenu = ({
  navLinks,
  onClick,
  logo,
  backgroundColor,
  footer
}: MobileMenuProps) => {
  return (
    <motion.div
      variants={MENU_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`${DEFAULT_HEADER_STYLES} px-4 fixed inset-0 h-screen w-full shadow-md min-h-screen z-50 flex flex-col items-center justify-between ${backgroundColor} lg:hidden`}
    >
      <div className="flex w-full h-24 justify-between items-center">
        <motion.button
          aria-controls="mobile-menu"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-end items-center h-full "
          onClick={onClick}
        >
          {logo}
        </motion.button>
        <motion.button
          onClick={onClick}
          aria-controls="mobile-menu"
          whileHover={{ rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-end items-center h-full "
        >
          <X size={36} />
        </motion.button>
      </div>
      <motion.ul
        variants={MENU_LIST_VARIANTS}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="w-full flex-1"
      >
        {navLinks.map((link, index) => (
          <motion.li
            variants={MENU_LINK_VARIANTS}
            whileHover={"hover"}
            key={index}
            className="group cursor-pointer w-full h-16  flex items-center justify-center border-b border-gray-300 hover:bg-primary-light "
          >
            <button
              onClick={onClick}
              className="w-full h-full flex items-center  justify-center text-lg font-medium  group-hover:text-primary-dark focus:outline-none"
            >
              {link}
            </button>
          </motion.li>
        ))}
      </motion.ul>
      {footer}
    </motion.div>
  );
};
