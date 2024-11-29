import { memo } from "react";
import { BackgroundColors } from "./constants/colors.constants";
import { DEFAULT_FORM_STYLE } from "./constants/form.constants";

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
  title?: string;
  backgroundColor?: BackgroundColors;
  containerStyles?: string;
};

export const Form = memo(
  ({
    title,
    children,
    backgroundColor = "bg-dark",
    containerStyles,
    ...rest
  }: FormProps) => {
    return (
      <form
        className={`${DEFAULT_FORM_STYLE} ${backgroundColor} ${containerStyles}`}
        {...rest}
      >
        {title && <h2>{title}</h2>}
        {children}
      </form>
    );
  }
);
