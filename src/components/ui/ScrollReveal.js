"use client";
import { motion } from "motion/react";
import { useReducedMotionOrMobile } from "@/hooks/useReducedMotionOrMobile";

const directions = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const disableMotion = useReducedMotionOrMobile();

  if (disableMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
