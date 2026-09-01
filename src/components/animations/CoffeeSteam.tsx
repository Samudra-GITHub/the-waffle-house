interface Props {
  /** "straight" (hero, rises and fades) or "wavy" (coffee cup icon, drifts side to side). */
  variant?: "straight" | "wavy";
  count?: number;
}

/**
 * WAFFLE HOUSE: three soft steam wisps, infinite loop, opacity fade
 * in/out with a little horizontal drift on the "wavy" variant. Pure CSS
 * keyframes (design-system/motion.css .steam / .coffee-steam) — no
 * benefit to driving a purely decorative infinite loop through JS.
 */
export function CoffeeSteam({ variant = "wavy", count = 3 }: Props) {
  const cls = variant === "straight" ? "steam" : "coffee-steam";
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={cls} />
      ))}
    </>
  );
}
