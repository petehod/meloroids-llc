import { forwardRef, memo } from "react";
import { DEFAULT_LABEL_STYLES } from "./constants/label.constants";
import { TextColors } from "./constants/colors.constants";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
  text?: string;
  containerStyles?: string;
  textColor?: TextColors;
};

export const Label = memo(
  forwardRef<HTMLLabelElement, LabelProps>(
    (
      { htmlFor, text, containerStyles, textColor = "text-white", ...rest },
      ref
    ) => {
      return (
        <label
          ref={ref}
          htmlFor={htmlFor}
          className={`${DEFAULT_LABEL_STYLES} ${textColor} ${containerStyles}`}
          {...rest}
        >
          {text}
        </label>
      );
    }
  )
);

Label.displayName = "Label";
