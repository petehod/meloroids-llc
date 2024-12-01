"use client";
import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { BUTTON_VARIANTS } from "./constants/animation.constants";

type CardBaseProps = {
  children: React.ReactNode;
  href?: string;
  containerStyles?: string;
};

type CardProps = CardBaseProps &
  (HTMLMotionProps<"div"> | HTMLMotionProps<"a">);

export const Card = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>(
  ({ children, href, containerStyles, ...props }, ref) => {
    const Component = href ? motion.a : motion.div;
    const styles = `card-base-styles ${containerStyles || ""}`;

    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement | HTMLAnchorElement>}
        className={styles}
        href={href}
        variants={BUTTON_VARIANTS}
        initial="initial"
        animate="initial"
        whileHover="hover"
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
