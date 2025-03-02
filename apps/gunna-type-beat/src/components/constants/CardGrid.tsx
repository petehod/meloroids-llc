import type { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
}
export const CardGrid = ({ children }: CardGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{children}</div>
  );
};
