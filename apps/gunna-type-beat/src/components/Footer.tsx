"use client";
import { LINKS } from "@repo/assets/links";
import { MadeByDean } from "@repo/ui/MadeByDean";

export const Footer = () => {
  return (
    <footer className="flex p-4">
      <MadeByDean href={LINKS.shop} />
    </footer>
  );
};
