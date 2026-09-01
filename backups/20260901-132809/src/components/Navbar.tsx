import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#gallery", label: "Our Waffles" },
  { href: "#experience", label: "Café Experience" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Locations" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 50));

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className={`site-nav${isScrolled ? " is-scrolled" : ""}`}>
        <div className="container site-nav__inner">
          <a href="#hero" className="site-nav__brand">
            The Waffle House
          </a>
          <ul className="site-nav__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className="nav-item" href={l.href} aria-current={activeId === l.href.slice(1) ? "page" : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="site-nav__actions">
            <a
              className="btn btn--hero-outline"
              href="#visit"
              aria-label="Book a table"
            >
              Book a Table
            </a>
            <button
              className="btn btn--icon site-nav__toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu is-open"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <button className="btn btn--icon" style={{ position: "absolute", top: 20, right: 20 }} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className="btn btn--hero-outline"
              href="#visit"
              style={{ marginTop: 8, fontFamily: "var(--font-body)" }}
              onClick={() => setMenuOpen(false)}
            >
              Book a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
