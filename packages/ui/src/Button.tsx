"use client";
import { forwardRef } from "react";
import {
  BUTTON_STYLE,
  DISABLED_BUTTON_STYLE,
  PRIMARY_BUTTON_STYLE,
} from "./constants/button.constants";
import { motion, HTMLMotionProps } from "framer-motion";
import { BUTTON_VARIANTS } from "./constants/animation.constants";

type ButtonBaseProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  as?: "button" | "a";
  disabled?: boolean;
};

type ButtonProps = ButtonBaseProps &
  (HTMLMotionProps<"button"> | HTMLMotionProps<"a">);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      icon,
      disabled,
      iconPosition = "left",
      as = "button",
      ...props
    },
    ref
  ) => {
    const Component = motion[as];
    const styles = `${BUTTON_STYLE} ${PRIMARY_BUTTON_STYLE} ${disabled && DISABLED_BUTTON_STYLE}`;

    return (
      <Component
        className={`${styles}`}
        ref={ref}
        variants={BUTTON_VARIANTS}
        initial="initial"
        whileHover={"hover"}
        whileTap={"press"}
        animate={"initial"}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </Component>
    );
  }
);

Button.displayName = "Button";
