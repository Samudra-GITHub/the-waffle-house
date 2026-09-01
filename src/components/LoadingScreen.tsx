import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const TOTAL_MS = 2000;
const REDUCED_MS = 400;

/**
 * WAFFLE HOUSE: ~2s cinematic intro — a waffle icon fills with chocolate,
 * then the whole overlay fades out to reveal the homepage. Locks page
 * scroll while active. Under prefers-reduced-motion, it's a brief,
 * static-feeling flash rather than skipped outright, so the brand moment
 * still registers without any motion someone asked to avoid.
 */
export function LoadingScreen() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const duration = reduceMotion ? REDUCED_MS : TOTAL_MS;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loading-screen__waffle">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <linearGradient id="wh-loader-choc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6B3A1B" />
                  <stop offset="100%" stopColor="#3A1D08" />
                </linearGradient>
                <clipPath id="wh-loader-clip">
                  <rect x="4" y="4" width="112" height="112" rx="18" />
                </clipPath>
              </defs>
              <rect x="4" y="4" width="112" height="112" rx="18" fill="var(--wh-gold)" />
              <g clipPath="url(#wh-loader-clip)">
                <motion.rect
                  x="4" y="4" width="112" height="112"
                  fill="url(#wh-loader-choc)"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{ duration: reduceMotion ? 0.01 : 1.4, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : 0.2 }}
                />
              </g>
              {/* waffle groove grid, drawn on top so it reads through the chocolate too */}
              <g stroke="rgba(43,23,13,0.35)" strokeWidth="3" strokeLinecap="round">
                <line x1="4" y1="34" x2="116" y2="34" />
                <line x1="4" y1="64" x2="116" y2="64" />
                <line x1="4" y1="94" x2="116" y2="94" />
                <line x1="34" y1="4" x2="34" y2="116" />
                <line x1="64" y1="4" x2="64" y2="116" />
                <line x1="94" y1="4" x2="94" y2="116" />
              </g>
              <rect x="4" y="4" width="112" height="112" rx="18" fill="none" stroke="var(--wh-gold)" strokeWidth="2" />
            </svg>
          </div>
          <motion.p
            className="loading-screen__brand"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.3 }}
          >
            THE WAFFLE <span>HOUSE</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
