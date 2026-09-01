import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_DRIP_PATH = `M0,0 H420 V180
  C398,180 390,225 368,225 C346,225 339,180 312,180
  C287,180 279,248 252,248 C225,248 217,180 190,180
  C164,180 157,232 134,232 C111,232 104,180 78,180
  C55,180 48,245 24,245 C10,245 4,180 0,180 Z`;

interface Props {
  /** Must be unique per instance — becomes the SVG gradient id. */
  id: string;
  width?: number;
  height?: number;
  dripPath?: string;
}

/**
 * WAFFLE HOUSE: chocolate drip -> whipped-cream fill -> topping pop.
 * Plays once, the first time this component scrolls into view. Reusable
 * anywhere a "waffle gains toppings" moment is wanted — currently every
 * Signature Menu card (see sections/menu/MenuCard.tsx). For the hero's
 * continuous scroll-scrubbed version, see HeroChocolateFill instead —
 * that's a different animation model (tied to scroll position, not a
 * one-time viewport trigger) and intentionally a separate component.
 */
export function ChocolateDrip({ id, width = 420, height = 360, dripPath = DEFAULT_DRIP_PATH }: Props) {
  const reduceMotion = useReducedMotion();
  const gradientId = `wh-choc-${id}`;

  return (
    <motion.svg
      className="menu-slide__drip"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.5 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B3A1B" />
          <stop offset="100%" stopColor="#3A1D08" />
        </linearGradient>
      </defs>

      <motion.path
        fill={`url(#${gradientId})`}
        style={reduceMotion ? { clipPath: "inset(0 0 0 0)" } : undefined}
        variants={{ hidden: { clipPath: "inset(0 0 100% 0)" }, visible: { clipPath: "inset(0 0 0% 0)" } }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        d={dripPath}
      />

      <motion.g
        fill="var(--wh-text-primary)"
        variants={{ hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1], delay: 1.4 }}
        style={{ transformOrigin: "50% 55%" }}
      >
        <ellipse cx={width * 0.286} cy={height * 0.264} rx={width * 0.1} ry={height * 0.072} />
        <ellipse cx={width * 0.512} cy={height * 0.194} rx={width * 0.114} ry={height * 0.083} />
        <ellipse cx={width * 0.738} cy={height * 0.272} rx={width * 0.095} ry={height * 0.069} />
      </motion.g>

      {[
        { cx: width * 0.333, cy: height * 0.292, r: 7, fill: "var(--wh-blueberry)", delay: 1.95 },
        { cx: width * 0.607, cy: height * 0.222, r: 6, fill: "var(--wh-blueberry)", delay: 2.07 },
      ].map((t, i) => (
        <motion.circle
          key={i}
          cx={t.cx} cy={t.cy} r={t.r} fill={t.fill}
          variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ type: "spring", stiffness: 260, damping: 14, delay: t.delay }}
        />
      ))}
      <motion.path
        d={`M${width * 0.714} ${height * 0.256}c7-9 18-5 18 4 0 7-9 16-18 21-9-5-18-14-18-21 0-9 11-13 18-4z`}
        fill="var(--wh-berry)"
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 2.19 }}
      />
      <motion.rect
        x={width * 0.405} y={height * 0.244} width={9} height={9} rx={2} fill="var(--mc-chocolate)"
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 2.31 }}
      />
    </motion.svg>
  );
}
