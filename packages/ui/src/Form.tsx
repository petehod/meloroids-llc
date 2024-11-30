import { memo } from "react";
import { BackgroundColors, TextColors } from "./constants/colors.constants";
import { DEFAULT_FORM_STYLE } from "./constants/form.constants";
import { YayaText } from "./YayaText";

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
  button: JSX.Element;
  title?: string;
  backgroundColor?: BackgroundColors;
  textColor?: TextColors;
  containerStyles?: string;
};

export const Form = memo(
  ({
    title,
    children,
    button,
    backgroundColor = "bg-primary",
    textColor = "text-white",
    containerStyles,
    ...rest
  }: FormProps) => {
    return (
      <form
        className={`${DEFAULT_FORM_STYLE} ${backgroundColor} ${textColor} ${containerStyles} `}
        {...rest}
      >
        {title && (
          <YayaText type="h2" className="mb-4">
            {title}
          </YayaText>
        )}
        {children}
        {button}
      </form>
    );
  }
);
