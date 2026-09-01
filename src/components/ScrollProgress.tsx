import { motion, useScroll } from "framer-motion";

/** WAFFLE HOUSE: chocolate syrup scroll-progress bar, driven by useScroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.div className="scroll-progress__fill" style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%", width: "100%" }} />
    </div>
  );
}
