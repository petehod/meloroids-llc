import { ReactNode, useEffect } from "react";
import { BackgroundColors } from "./constants/colors.constants";

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
    <div className="fixed inset-0 z-50 w-full flex items-center justify-center bg-black bg-opacity-50 ">
      <div
        className={`relative  h-full w-full  p-6 rounded-lg shadow-lg overflow-scroll  ${backgroundColor} ${maxWidth}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-1.5 text-white hover:text-gray-900"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};
