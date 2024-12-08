"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import {
  BUTTON_STYLE,
  LARGE_BUTTON_STYLE,
  SMALL_BUTTON_STYLE
} from "./constants/button.constants";
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
  maxWidth?: string;
};

type MotionButtonProps = HTMLMotionProps<"button"> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
type MotionAnchorProps = HTMLMotionProps<"a"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonBaseProps & (MotionButtonProps | MotionAnchorProps);

export const Button = ({
  children,
  icon,
  disabled,
  size = "large",
  iconPosition = "left",
  backgroundColor = "bg-primary",
  borderColor,
  containerStyles,
  maxWidth = "md:max-w-64",
  as = "button",
  textColor = "text-white",
  ...props
}: ButtonProps) => {
  const Component = motion[as] as React.ElementType;

  const sizeStyle = size === "large" ? LARGE_BUTTON_STYLE : SMALL_BUTTON_STYLE;
  const styles = `${BUTTON_STYLE} ${sizeStyle} ${textColor}  ${backgroundColor} ${borderColor && `border-2`} ${borderColor} ${containerStyles} ${maxWidth}`;

  return (
    <Component
      className={styles}
      disabled={disabled && as === "button" ? true : undefined}
      variants={BUTTON_VARIANTS}
      initial="initial"
      whileHover="hover"
      whileTap="press"
      animate="initial"
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Component>
  );
};
