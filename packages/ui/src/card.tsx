"use client";
import { memo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { BUTTON_VARIANTS } from "./constants/animation.constants";

type CardBaseProps = {
  children: React.ReactNode;
  href?: string;
  containerStyles?: string;
};

type MotionDivProps = HTMLMotionProps<"div"> &
  React.HTMLAttributes<HTMLDivElement>;
type MotionAnchorProps = HTMLMotionProps<"a"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type CardProps = CardBaseProps & (MotionDivProps | MotionAnchorProps);

export const Card = memo<CardProps>(
  ({ children, href, containerStyles, ...props }) => {
    if (href) {
      return (
        <motion.a
          className={`card-base-styles ${containerStyles || ""}`}
          href={href}
          variants={BUTTON_VARIANTS}
          initial="initial"
          animate="initial"
          whileHover="hover"
          {...(props as MotionAnchorProps)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div
        className={`card-base-styles ${containerStyles || ""}`}
        variants={BUTTON_VARIANTS}
        initial="initial"
        animate="initial"
        whileHover="hover"
        {...(props as MotionDivProps)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
