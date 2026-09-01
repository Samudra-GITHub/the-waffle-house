import { motion, useReducedMotion } from "framer-motion";
import type { MenuItem } from "../../data/menu";

type Pos = "center" | "left1" | "right1" | "left2" | "right2" | "hidden";

interface Props {
  item: MenuItem;
  pos: Pos;
}

/** WAFFLE HOUSE: chocolate drip -> cream fill -> topping pop, once per card, on first view. */
export function MenuCard({ item, pos }: Props) {
  const reduceMotion = useReducedMotion();
  const dripVisible = reduceMotion ? { clipPath: "inset(0 0 0 0)" } : undefined;

  return (
    <article className="menu-slide" data-slide={item.id} data-pos={pos}>
      <div className="menu-slide__card cursor-glow">
        <div className="menu-slide__media">
          <img src={item.image} alt={item.name} loading="lazy" width={420} height={360} />
          <motion.svg
            className="menu-slide__drip"
            viewBox="0 0 420 360"
            preserveAspectRatio="none"
            aria-hidden="true"
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.5 }}
          >
            <defs>
              <linearGradient id={`wh-choc-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6B3A1B" />
                <stop offset="100%" stopColor="#3A1D08" />
              </linearGradient>
            </defs>
            <motion.path
              className="menu-slide__choc"
              fill={`url(#wh-choc-${item.id})`}
              style={dripVisible}
              variants={{
                hidden: { clipPath: "inset(0 0 100% 0)" },
                visible: { clipPath: "inset(0 0 0% 0)" },
              }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              d="M0,0 H420 V180
                C398,180 390,225 368,225 C346,225 339,180 312,180
                C287,180 279,248 252,248 C225,248 217,180 190,180
                C164,180 157,232 134,232 C111,232 104,180 78,180
                C55,180 48,245 24,245 C10,245 4,180 0,180 Z"
            />
            <motion.g
              fill="var(--wh-text-primary)"
              variants={{ hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1], delay: 1.4 }}
              style={{ transformOrigin: "50% 55%" }}
            >
              <ellipse cx="120" cy="95" rx="42" ry="26" />
              <ellipse cx="215" cy="70" rx="48" ry="30" />
              <ellipse cx="310" cy="98" rx="40" ry="25" />
            </motion.g>
            {[
              { cx: 140, cy: 105, r: 7, fill: "var(--wh-blueberry)", delay: 1.95 },
              { cx: 255, cy: 80, r: 6, fill: "var(--wh-blueberry)", delay: 2.07 },
            ].map((t, i) => (
              <motion.circle
                key={i}
                cx={t.cx} cy={t.cy} r={t.r} fill={t.fill}
                variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay: t.delay }}
              />
            ))}
            <motion.path
              d="M300 92c7-9 18-5 18 4 0 7-9 16-18 21-9-5-18-14-18-21 0-9 11-13 18-4z"
              fill="var(--wh-berry)"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 2.19 }}
            />
            <motion.rect
              x={170} y={88} width={9} height={9} rx={2} fill="var(--mc-chocolate)"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 2.31 }}
            />
          </motion.svg>
          <div className="menu-slide__reflection" aria-hidden="true" />
        </div>
        <span className="menu-slide__tag">{item.tag}</span>
        <span className="menu-slide__price">{item.price}</span>
        <div className="menu-slide__body">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <a className="btn btn--primary" href="#visit" aria-label={`Order the ${item.name} waffle`} tabIndex={pos === "center" ? 0 : -1}>
            Order This Waffle
          </a>
        </div>
      </div>
    </article>
  );
}
