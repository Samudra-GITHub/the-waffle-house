import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";

const LINKS = [
  { href: "#gallery", label: "Our Waffles" },
  { href: "#experience", label: "Café Experience" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Locations" },
];

/* ─── Animated underline that slides between active items ─────────────── */

function NavLinks({ activeId }: { activeId: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Move the gold dot indicator to the active link
  useEffect(() => {
    const id = hovered ?? activeId;
    const el = refs.current[id];
    if (!el) { setIndicatorStyle((s) => ({ ...s, opacity: 0 })); return; }
    const parent = el.closest("ul");
    if (!parent) return;
    const pRect = parent.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: eRect.left - pRect.left + eRect.width / 2 - 3,
      width: 6,
      opacity: 1,
    });
  }, [hovered, activeId]);

  return (
    <ul
      className="site-nav__links"
      style={{ position: "relative" }}
      onMouseLeave={() => setHovered(null)}
    >
      {LINKS.map((l) => {
        const id = l.href.slice(1);
        const isActive = activeId === id;
        return (
          <li key={l.href}>
            <a
              ref={(el) => { refs.current[id] = el; }}
              className={`nav-item${isActive ? " is-active" : ""}`}
              href={l.href}
              aria-current={isActive ? "page" : undefined}
              onMouseEnter={() => setHovered(id)}
            >
              {l.label}
            </a>
          </li>
        );
      })}

      {/* Sliding gold dot */}
      <motion.span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -2,
          height: 3,
          borderRadius: 99,
          background: "var(--color-gold, #c8922a)",
          pointerEvents: "none",
        }}
        animate={indicatorStyle}
        transition={{ type: "spring", stiffness: 340, damping: 30 }}
      />
    </ul>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────────────── */

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 50));

  // Subtle navbar scale-down spring on scroll
  const navScale = useSpring(
    useTransform(scrollY, [0, 120], [1, 0.98]),
    { stiffness: 200, damping: 30 }
  );

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`site-nav${isScrolled ? " is-scrolled" : ""}`}
        style={{ scale: navScale, originX: "50%", originY: "0%" }}
      >
        <div className="container site-nav__inner">
          {/* Brand */}
          <motion.a
            href="#hero"
            className="site-nav__brand"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.18 }}
          >
            The Waffle House
          </motion.a>

          {/* Desktop links with sliding indicator */}
          <NavLinks activeId={activeId} />

          {/* Actions */}
          <div className="site-nav__actions">
            <motion.a
              className="btn btn--hero-outline"
              href="#visit"
              aria-label="Book a table"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.96 }}
            >
              Book a Table
            </motion.a>
            <motion.button
              className="btn btn--icon site-nav__toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              whileTap={{ scale: 0.88 }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              style={{
                position: "fixed", inset: 0, zIndex: 90,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              className="mobile-menu is-open"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close button */}
              <motion.button
                className="btn btn--icon"
                style={{ position: "absolute", top: 20, right: 20 }}
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.88, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </motion.button>

              {/* Links staggered in */}
              <motion.div
                style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
                }}
              >
                {LINKS.map((l) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  >
                    {l.label}
                  </motion.a>
                ))}

                <motion.a
                  className="btn btn--hero-outline"
                  href="#visit"
                  style={{ marginTop: 8, fontFamily: "var(--font-body)" }}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Table
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}