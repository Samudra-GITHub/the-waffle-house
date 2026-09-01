import { useEffect } from "react";

/**
 * Desktop-pointer-only gold glow that tracks the cursor over any element
 * carrying the .cursor-glow class (menu cards, gallery tiles, hero photo).
 * Delegated at the document level so it works for elements mounted later —
 * mount this once near the app root.
 */
export function CursorGlow() {
  useEffect(() => {
    const isDesktop = () => window.innerWidth > 768;
    if (!window.matchMedia("(pointer: fine)").matches || !isDesktop()) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onEnter = (e: Event) => (e.target as HTMLElement).closest(".cursor-glow")?.classList.add("is-glowing");
    const onLeave = (e: Event) => (e.target as HTMLElement).closest(".cursor-glow")?.classList.remove("is-glowing");
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(".cursor-glow");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("pointerover", onEnter);
    document.addEventListener("pointerout", onLeave);
    document.addEventListener("pointermove", onMove);
    return () => {
      document.removeEventListener("pointerover", onEnter);
      document.removeEventListener("pointerout", onLeave);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
