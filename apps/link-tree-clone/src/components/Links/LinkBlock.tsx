"use client";
import { memo } from "react";
import { BUTTON_VARIANTS } from "@repo/ui/animationVariants";
import { motion } from "framer-motion";
import Link from "next/link";
type AnimatedLinkBlockProps = {
  title: string;
  icon: React.ReactNode;
  link: string;
};
export const LinkBlock = memo<AnimatedLinkBlockProps>(
  ({ icon, link, title }) => {
    const styles =
      "flex rounded-sm h-16 border-1 border-dark w-full items-center justify-start";
    return (
      <motion.div variants={BUTTON_VARIANTS} whileTap="tap" whileHover="hover">
        <Link href={link} className={styles}>
          <div className="w-16 h-full flex justify-center items-center rounded-l-ss">
            {icon}
          </div>
          <h2 className="text-1 w-full max-w-20">{title}</h2>
        </Link>
      </motion.div>
    );
  }
);
