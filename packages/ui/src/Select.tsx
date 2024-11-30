import { forwardRef, memo } from "react";
import { DEFAULT_SELECT_STYLE } from "./constants/select.constants";
import { BackgroundColors, TextColors } from "./constants/colors.constants";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  containerStyles?: string;
  marginBottom?: string;
  backgroundColor?: BackgroundColors;
  textColor?: TextColors;
};

export const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(
    (
      {
        backgroundColor = "bg-white",
        textColor = "text-dark",
        options,
        containerStyles = "",
        marginBottom = "mb-4",
        ...rest
      },
      ref
    ) => {
      return (
        <select
          ref={ref}
          className={`${DEFAULT_SELECT_STYLE} ${backgroundColor} ${textColor} ${containerStyles} ${marginBottom} text-dark`}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }
  )
);

Select.displayName = "Select";
