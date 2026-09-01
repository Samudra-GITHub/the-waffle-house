/**
 * Layout-only Tailwind config. The design-system/*.css files (imported via
 * src/styles/global.css) remain the single source of truth for color,
 * typography, radius, shadow, and animation — every core plugin that would
 * let a class reach for a color, font, or timing value is disabled below.
 * Spacing is NOT Tailwind's own scale — it's aliased to our own --space-*
 * tokens so `gap-4`, `p-6`, etc. stay in lockstep with the design system
 * instead of introducing a second, competing scale.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  corePlugins: {
    preflight: false, // don't let Tailwind's reset fight design-system/layout.css

    // ---- disabled: color ----
    textColor: false,
    backgroundColor: false,
    borderColor: false,
    outlineColor: false,
    ringColor: false,
    divideColor: false,
    placeholderColor: false,
    fill: false,
    stroke: false,
    gradientColorStops: false,
    backgroundImage: false,

    // ---- disabled: typography ----
    fontFamily: false,
    fontSize: false,
    fontWeight: false,
    fontStyle: false,
    fontVariantNumeric: false,
    letterSpacing: false,
    lineHeight: false,
    textAlign: false,
    textDecoration: false,
    textTransform: false,
    whitespace: false,

    // ---- disabled: animation / transition / decoration ----
    animation: false,
    transitionProperty: false,
    transitionDuration: false,
    transitionTimingFunction: false,
    transitionDelay: false,
    boxShadow: false,
    borderRadius: false,
    borderWidth: false,
    borderStyle: false,
    ringWidth: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
  },
  theme: {
    spacing: {
      0: "0px",
      px: "1px",
      1: "var(--space-1)",
      2: "var(--space-2)",
      3: "var(--space-3)",
      4: "var(--space-4)",
      5: "var(--space-5)",
      6: "var(--space-6)",
      7: "var(--space-7)",
      8: "var(--space-8)",
      9: "var(--space-9)",
      10: "var(--space-10)",
      full: "100%",
    },
    extend: {},
  },
  plugins: [],
};
