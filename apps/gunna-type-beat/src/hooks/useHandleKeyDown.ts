export const useHandleKeyDown = (onClick?: () => void) => {
  return (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };
};
