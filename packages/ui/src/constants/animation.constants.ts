import { Variants } from "framer-motion";
export const BUTTON_VARIANTS = {
  initial: {
    scale: 1,
    opacity: 1,

    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.05,

    transition: { duration: 0.2, type: "spring", stiffness: 300 }
  },
  press: {
    scale: 0.95,

    transition: { duration: 0.1 }
  }
};

export const MENU_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120, // Adjust spring speed
      damping: 20 // Adjust bounce
    }
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const MENU_LINK_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.2 }
  },
  hover: {
    scale: 1.02, // Slightly scale up
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)", // Add a shadow
    backgroundColor: "#2c2c2c" // Optional: Change background color
  }
};

export const MENU_LIST_VARIANTS: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
