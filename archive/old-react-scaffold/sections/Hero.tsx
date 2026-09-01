import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";

const FLOATERS = [
  { cls: "menu-carousel__float--blueberry", style: { top: "12%", left: "8%" }, y: [0, -10, 0], rotate: 0, duration: 7 },
  { cls: "menu-carousel__float--chip", style: { top: "18%", right: "10%" }, y: [0, -6, 0], rotate: 360, duration: 12 },
  { cls: "menu-carousel__float--crumb", style: { bottom: "16%", left: "12%" }, y: [0, -8, 0], rotate: [0, -4, 0, 4, 0], duration: 8 },
  { cls: "menu-carousel__float--mint", style: { bottom: "10%", right: "9%" }, y: [0, -10, 0], rotate: 0, duration: 9 },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [toppingsPopped, setToppingsPopped] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setIsLoaded(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  // WAFFLE HOUSE: chocolate-fill (0-60% of hero scroll) -> whipped-cream reveal (60-80%) -> toppings (80-100%)
  const chocInset = useTransform(scrollYProgress, [0, 0.6], [100, 0]);
  const chocClipPath = useTransform(chocInset, (v) => `inset(${v}% 0 0 0)`);
  const creamOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const creamScale = useTransform(scrollYProgress, [0.6, 0.8], [0.85, 1]);
  const toppingOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.82 && !toppingsPopped) setToppingsPopped(true);
  });

  return (
    <header className={`hero is-in-view${isLoaded ? " is-loaded" : ""}`} id="hero" ref={heroRef}>
      <div className="hero__ambient" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">EST. 2024 • SHIVMANDIR, SILIGURI</p>
          <h1 className="hero__title">
            <span className="line"><span>Golden perfection in</span></span>
            <span className="line line--gold"><span>every single bite.</span></span>
          </h1>
          <p className="hero__subtitle">Fresh waffles, rich cheesecakes, handcrafted shakes and coffee made daily in the heart of Shivmandir.</p>
          <div className="hero__ctas">
            <a href="#menu" className="btn btn--primary">Explore Menu</a>
            <a href="#visit" className="btn btn--secondary">Visit Cafe</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-glow" />
          <div className="hero__visual-frame hero__float cursor-glow">
            <img
              src="/assets/hero/hero-waffle-stack-01.jpg"
              alt="A stack of golden Belgian waffles, plain and golden"
              width={440}
              height={550}
              // @ts-expect-error - fetchpriority isn't in this React version's JSX types yet
              fetchpriority="high"
            />
            {/* WAFFLE HOUSE: chocolate-fill + whipped-cream reveal, scroll-linked via useScroll/useTransform */}
            <svg className="hero-fx" viewBox="0 0 440 550" preserveAspectRatio="none" aria-hidden="true">
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
                style={{
                  opacity: reduceMotion ? 1 : creamOpacity,
                  scale: reduceMotion ? 1 : creamScale,
                }}
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
          </div>
          <div className="hero__steam">
            <span className="steam" style={{ left: "-1px" }} />
            <span className="steam" style={{ left: "9px" }} />
            <span className="steam" style={{ left: "-11px" }} />
          </div>
          {!reduceMotion &&
            FLOATERS.map((f, i) => (
              <motion.span
                key={i}
                className={`float-ingredient ${f.cls}`}
                style={f.style}
                animate={{ y: f.y, rotate: f.rotate }}
                transition={{ duration: f.duration, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
        </div>
      </div>
      <div className="container hero__stats">
        <div className="hero__stat"><span className="num">⭐ 4.8</span><span className="label">Rating</span></div>
        <div className="hero__stat"><span className="num">490+</span><span className="label">Reviews</span></div>
        <div className="hero__stat"><span className="num">Daily</span><span className="label">Made Fresh</span></div>
      </div>
    </header>
  );
}
