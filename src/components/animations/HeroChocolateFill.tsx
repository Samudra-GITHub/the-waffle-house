import { useState, type RefObject } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";

interface Props {
  /** The element whose scroll progress drives the fill — typically the hero section itself. */
  containerRef: RefObject<HTMLElement>;
  width?: number;
  height?: number;
}

/**
 * WAFFLE HOUSE: chocolate pours in (0–60% of the container's scroll
 * range) -> whipped cream fades/scales in (60–80%) -> fruit toppings
 * bounce in, staggered (80–100%). Continuously scroll-scrubbed and
 * reversible (except the topping bounce, a one-time pop) — this is a
 * different animation model from ChocolateDrip's single viewport
 * trigger, which is why it's a separate component.
 */
export function HeroChocolateFill({ containerRef, width = 440, height = 550 }: Props) {
  const reduceMotion = useReducedMotion();
  const [toppingsPopped, setToppingsPopped] = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const chocInset = useTransform(scrollYProgress, [0, 0.6], [100, 0]);
  const chocClipPath = useTransform(chocInset, (v) => `inset(${v}% 0 0 0)`);
  const creamOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const creamScale = useTransform(scrollYProgress, [0.6, 0.8], [0.85, 1]);
  const toppingOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.82 && !toppingsPopped) setToppingsPopped(true);
  });

  return (
    <svg className="hero-fx" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="wh-hero-choc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B3A1B" />
          <stop offset="100%" stopColor="#3A1D08" />
        </linearGradient>
      </defs>
      <motion.path
        style={{ clipPath: reduceMotion ? "inset(0 0 0 0)" : chocClipPath }}
        fill="url(#wh-hero-choc)"
        d="M0,0 H440 V300
          C420,300 410,355 390,355 C370,355 365,300 335,300
          C305,300 295,385 265,385 C235,385 228,300 200,300
          C172,300 165,365 140,365 C115,365 108,300 80,300
          C55,300 48,378 25,378 C10,378 5,300 0,300 Z"
      />
      <motion.g
        style={{ opacity: reduceMotion ? 1 : creamOpacity, scale: reduceMotion ? 1 : creamScale }}
        fill="var(--wh-text-primary)"
      >
        <ellipse cx="130" cy="150" rx="46" ry="30" />
        <ellipse cx="230" cy="110" rx="54" ry="34" />
        <ellipse cx="330" cy="155" rx="42" ry="28" />
      </motion.g>
      <motion.g style={{ opacity: reduceMotion ? 1 : toppingOpacity }}>
        <motion.circle
          cx="150" cy="160" r="8" fill="var(--wh-blueberry)"
          animate={reduceMotion || toppingsPopped ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
        />
        <motion.circle
          cx="270" cy="120" r="7" fill="var(--wh-blueberry)"
          animate={reduceMotion || toppingsPopped ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.08 }}
        />
        <motion.path
          d="M320 148c9-11 22-6 22 5 0 9-11 20-22 26-11-6-22-17-22-26 0-11 13-16 22-5z"
          fill="var(--wh-berry)"
          animate={reduceMotion || toppingsPopped ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.16 }}
        />
      </motion.g>
    </svg>
  );
}
