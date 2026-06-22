import { motion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion";

/** Scroll-reveal wrapper. Pass `variants` to override the default fade-up. */
export default function Reveal({
  children,
  variants = fadeUp,
  className = "",
  as = "div",
  delay = 0,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
