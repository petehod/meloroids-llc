"use client";
import { forwardRef } from "react";
import {
  BUTTON_STYLE,
  LARGE_BUTTON_STYLE,
  SMALL_BUTTON_STYLE
} from "./constants/button.constants";
import { motion, HTMLMotionProps } from "framer-motion";
import { BUTTON_VARIANTS } from "./constants/animation.constants";
import {
  BackgroundColors,
  BorderColors,
  TextColors
} from "./constants/colors.constants";

type ButtonBaseProps = {
  children: React.ReactNode;
  size?: "large" | "small";
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  as?: "button" | "a";
  containerStyles?: string;
  disabled?: boolean;
  backgroundColor?: BackgroundColors;
  borderColor?: BorderColors;
  textColor?: TextColors;
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
      size = "large",
      iconPosition = "left",
      backgroundColor = "bg-primary",
      borderColor,
      containerStyles,
      as = "button",
      textColor = "text-white",
      ...props
    },
    ref
  ) => {
    const Component = motion[as];
    const sizeStyle =
      size === "large" ? LARGE_BUTTON_STYLE : SMALL_BUTTON_STYLE;
    const styles = `${BUTTON_STYLE} ${sizeStyle} ${textColor}  ${backgroundColor} ${borderColor && `border-2`} ${borderColor} ${containerStyles} `;

    return (
      <Component
        className={styles}
        ref={ref as React.Ref<HTMLButtonElement | HTMLAnchorElement>}
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
