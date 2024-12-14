"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Icon, IconProps } from "@iconify/react";
import { BUTTON_VARIANTS } from "@repo/ui/animationVariants";

export const SocialMediaIcon = memo(({ ...props }: IconProps) => {
  return (
    <motion.div
      className="bg-white text-dark rounded-full p-2"
      variants={BUTTON_VARIANTS}
      whileTap={"tap"}
      whileHover={`hover`}
    >
      <Icon height={32} width={32} {...props} />
    </motion.div>
  );
});
