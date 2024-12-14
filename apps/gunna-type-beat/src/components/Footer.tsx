"use client";
import { MadeByDean } from "@repo/ui/MadeByDean";
import { LINKS } from "../../../../packages/assets/src/links";

export const Footer = () => {
  return (
    <footer className="flex p-4">
      <MadeByDean href={LINKS.shop} />
    </footer>
  );
};
