import { motion, useReducedMotion, type HTMLMotionProps, type TargetAndTransition, type Transition } from "framer-motion";

type Kind = "fade-up" | "fade" | "scale" | "slide-left" | "slide-right" | "pop";

const VARIANTS: Record<Kind, { hidden: TargetAndTransition; visible: TargetAndTransition; transition: Transition }> = {
  "fade-up": { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  "slide-left": { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  "slide-right": { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  pop: { hidden: { opacity: 0, y: 24, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
};

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> {
  kind?: Kind;
  delay?: number;
}

/** Drop-in replacement for the old .reveal-* + IntersectionObserver combo. */
export function Reveal({ kind = "fade-up", delay = 0, children, ...rest }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const { hidden, visible, transition } = VARIANTS[kind];
  return (
    <motion.div
      initial={reduceMotion ? visible : hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      transition={{ ...transition, delay: reduceMotion ? 0 : delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
