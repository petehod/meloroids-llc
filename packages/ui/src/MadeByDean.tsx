"use client";
import { BUTTON_VARIANTS } from "./constants/animation.constants";
import { YayaText } from "./YayaText";
import { motion } from "framer-motion";
interface MadeByDeanProps {
  href: string;
}

export const MadeByDean = ({ href }: MadeByDeanProps) => {
  return (
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
  );
};
