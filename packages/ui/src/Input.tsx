import { forwardRef, memo } from "react";
import { DEFAULT_INPUT_STYLE } from "./constants/input.constants";
import { BackgroundColors, TextColors } from "./constants/colors.constants";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  backgroundColor?: BackgroundColors;
  textColor?: TextColors;
  containerStyle?: string;
  marginBottom?: string;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        backgroundColor = "bg-white",
        textColor = "text-dark",
        containerStyle,
        marginBottom = "mb-4",
        ...rest
      },
      ref
    ) => {
      return (
        <input
          ref={ref}
          className={`${DEFAULT_INPUT_STYLE} ${backgroundColor} ${textColor} ${marginBottom} ${containerStyle}`}
          {...rest}
        />
      );
    }
  )
);

Input.displayName = "Input";
