"use client";
import { LINKS } from "../../assets/src/links";
import { BUTTON_VARIANTS } from "./constants/animation.constants";
import { YayaText } from "./YayaText";
import { motion } from "framer-motion";
interface MadeByDeanProps {
  href?: string;
}

export const MadeByDean = ({ href = LINKS.shop }: MadeByDeanProps) => {
  return (
    <footer className="mb-2 flex">
      <motion.a
        variants={BUTTON_VARIANTS}
        whileTap="press"
        initial="initial"
        whileHover="hover"
        href={href}
        target="_blank"
        animate="initial"
      >
        <YayaText type="h2">Made By Dean</YayaText>
      </motion.a>
    </footer>
  );
};
