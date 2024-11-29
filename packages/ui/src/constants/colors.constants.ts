type CoreColors =
  | "primary"
  | "white"
  | "dark"
  | "secondary"
  | "tertiary"
  | "quad"
  | "light"
  | "medium"
  | "darkScreen"
  | "darklight"
  | "black"
  | "blue"
  | "green"
  | "red"
  | "confirm";
type FadedColors = `${CoreColors}-faded`;

type BackgroundPrefix = "bg";
type TextPrefix = "text";
type BorderPrefix = "border";

export type BackgroundColors = `${BackgroundPrefix}-${CoreColors}`;
export type TextColors =
  | `${TextPrefix}-${CoreColors}`
  | `${TextPrefix}-${FadedColors}`;
export type BorderColors =
  | `${BorderPrefix}-${CoreColors}`
  | `${BorderPrefix}-${FadedColors}`;
