"use client";
import { memo } from "react";

import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animations.constants";
type GrowAnimationWrapperProps = {
  children: React.ReactNode;
};
export const GrowAnimationWrapper = memo<GrowAnimationWrapperProps>(
  ({ children }) => {
    return (
      <motion.div
        variants={animationVariants}
        whileTap="tap"
        whileHover="hover"
      >
        {children}
      </motion.div>
    );
  }
);
