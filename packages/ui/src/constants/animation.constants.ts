export const BUTTON_VARIANTS = {
  initial: {
    scale: 1,
    opacity: 1,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2, type: "spring", stiffness: 300 }
  },
  press: {
    scale: 0.95,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.1 }
  }
};
