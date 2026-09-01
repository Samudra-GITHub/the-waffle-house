import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

/* ─── Animation variants ──────────────────────────────────────────────── */

const COPY_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const IMAGE_VARIANTS = {
  hidden: { opacity: 0, scale: 0.94, x: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
  },
};

/* ─── Tilt hook ───────────────────────────────────────────────────────── */

function useTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 28, mass: 0.6 };
  const rx = useSpring(useTransform(y, [-1, 1], [strength, -strength]), springConfig);
  const ry = useSpring(useTransform(x, [-1, 1], [-strength, strength]), springConfig);
  const liftY = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    x.set(((e.clientX - left) / width - 0.5) * 2);
    y.set(((e.clientY - top) / height - 0.5) * 2);
    liftY.set(-10);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
    liftY.set(0);
  }

  return { ref, rx, ry, liftY, onMouseMove, onMouseLeave };
}

/* ─── Component ──────────────────────────────────────────────────────── */

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const tilt = useTilt(7);

  return (
    <header className="hero" id="hero" ref={sectionRef}>
      {/* Atmosphere layers */}
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__grid">

        {/* ── LEFT: Copy ── */}
        <motion.div
          className="hero__copy"
          variants={COPY_VARIANTS}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p className="hero__kicker" variants={ITEM_VARIANTS}>
            Crafted Fresh Daily
          </motion.p>

          <motion.h1 className="hero__title" variants={ITEM_VARIANTS}>
            <span className="line"><span>The Art of</span></span>
            <span className="line"><span>Belgian Waffles</span></span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={ITEM_VARIANTS}>
            Handcrafted with premium ingredients, artisan syrups and fresh
            coffee — an unforgettable indulgence.
          </motion.p>

          <motion.div className="hero__ctas" variants={ITEM_VARIANTS}>
            <HoverButton href="#menu" className="btn btn--primary hero__cta">
              Order Now
            </HoverButton>
            <HoverButton href="#story" className="btn btn--hero-outline hero__cta">
              Our Story
            </HoverButton>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Waffle image with tilt ── */}
        <motion.div
          className="hero__visual"
          variants={IMAGE_VARIANTS}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Tilt wrapper */}
          <motion.div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={{
              rotateX: tilt.rx,
              rotateY: tilt.ry,
              y: tilt.liftY,
              transformStyle: "preserve-3d",
              perspective: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* Plate glow — moves with the image */}
            <motion.div
              className="hero__plate-glow"
              aria-hidden="true"
              style={{
                opacity: useTransform(tilt.liftY, [0, -10], [0.6, 1]),
                scaleX: useTransform(tilt.liftY, [0, -10], [1, 1.15]),
              }}
            />

            <img
              className="hero__waffle"
              src="/assets/hero/hero-waffle-stack-01.png"
              alt="Belgian waffle stack with maple syrup and berries"
              width={2200}
              height={1200}
              // @ts-expect-error - fetchpriority not in React JSX types yet
              fetchpriority="high"
              draggable="false"
            />
          </motion.div>
        </motion.div>

      </div>
    </header>
  );
}

/* ─── HoverButton ─────────────────────────────────────────────────────── */

function HoverButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ y: -3, transition: { duration: 0.22, ease: "easeOut" } }}
      whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.a>
  );
}