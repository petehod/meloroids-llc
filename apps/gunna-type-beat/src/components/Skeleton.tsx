"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  className = ""
}) => {
  return (
    <motion.div
      animate={{ opacity: [1, 0.5, 1] }}
      className={`bg-gray-300 rounded ${className}`}
      style={{ width, height }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};
