"use client";
import { ReactNode, useEffect } from "react";
import { BackgroundColors } from "./constants/colors.constants";
import { motion } from "framer-motion";
import { BUTTON_VARIANTS } from "./constants/animation.constants";
export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  backgroundColor?: BackgroundColors;
}

export const Modal = ({
  onClose,
  children,
  maxWidth = "max-w-660",
  backgroundColor = "bg-white"
}: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 w-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`relative  h-full w-full  p-6 rounded-lg shadow-lg overflow-scroll  ${backgroundColor} ${maxWidth}`}
      >
        <div className="w-full flex justify-end">
          <motion.button
            variants={BUTTON_VARIANTS}
            whileHover={"hover"}
            whileTap={"press"}
            onClick={onClose}
            className=" text-1.5 text-white "
          >
            &#x2715;
          </motion.button>
        </div>
        {children}
      </div>
    </div>
  );
};
