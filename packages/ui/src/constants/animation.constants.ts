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
