import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

interface Ingredient {
  key: string;
  cls: string;
  style: CSSProperties;
  y: number[];
  rotate: number | number[];
  duration: number;
}

// Tuned for the hero's smaller visual frame — ingredients sit just outside its edges.
export const HERO_INGREDIENTS: Ingredient[] = [
  { key: "blueberry", cls: "float-ingredient--blueberry", style: { top: "-6%", left: "-8%" }, y: [0, -10, 0], rotate: 0, duration: 7 },
  { key: "chip", cls: "float-ingredient--chip", style: { top: "6%", right: "-10%" }, y: [0, -6, 0], rotate: 360, duration: 12 },
  { key: "mint", cls: "float-ingredient--mint", style: { bottom: "10%", left: "-10%" }, y: [0, -10, 0], rotate: 0, duration: 9 },
  { key: "crumb", cls: "float-ingredient--crumb", style: { bottom: "-4%", right: "-6%" }, y: [0, -8, 0], rotate: [0, -4, 0, 4, 0], duration: 8 },
];

// Tuned for the wider carousel stage — ingredients sit inset from its edges.
export const CAROUSEL_INGREDIENTS: Ingredient[] = [
  { key: "blueberry", cls: "menu-carousel__float--blueberry", style: { top: "12%", left: "8%" }, y: [0, -10, 0], rotate: 0, duration: 7 },
  { key: "chip", cls: "menu-carousel__float--chip", style: { top: "18%", right: "10%" }, y: [0, -6, 0], rotate: 360, duration: 12 },
  { key: "crumb", cls: "menu-carousel__float--crumb", style: { bottom: "16%", left: "12%" }, y: [0, -8, 0], rotate: [0, -4, 0, 4, 0], duration: 8 },
  { key: "mint", cls: "menu-carousel__float--mint", style: { bottom: "10%", right: "9%" }, y: [0, -10, 0], rotate: 0, duration: 9 },
];

interface Props {
  items: Ingredient[];
}

/**
 * WAFFLE HOUSE: reusable low-amplitude ambient float — blueberry, choc
 * chip, biscoff crumb, mint leaf. Shared rendering/animation logic; each
 * call site supplies its own tuned position preset (see HERO_INGREDIENTS /
 * CAROUSEL_INGREDIENTS above) since the two hosts are very different sizes.
 * Chip and crumb are hidden under 768px via CSS (see homepage.css
 * .float-ingredient--hide-mobile) — "simplify particle effects" on mobile.
 */
export function FloatingIngredients({ items }: Props) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <>
      {items.map((f) => (
        <motion.span
          key={f.key}
          className={`float-ingredient ${f.cls}${f.key === "chip" || f.key === "crumb" ? " float-ingredient--hide-mobile" : ""}`}
          style={f.style}
          animate={{ y: f.y, rotate: f.rotate }}
          transition={{ duration: f.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}
