import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { GalleryImage } from "../data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Full-screen viewer for GallerySection. The image morphs from its masonry
 * tile via a shared layoutId (set on the matching <motion.img> in
 * GallerySection) rather than fading in from nothing.
 */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const reduceMotion = useReducedMotion();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const isOpen = index !== null;
  const current = isOpen ? images[index] : null;

  useEffect(() => {
    if (isOpen) {
      lastFocusedRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      lastFocusedRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || index === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNavigate((index! + 1) % images.length);
      else if (e.key === "ArrowLeft") onNavigate((index! - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
        >
          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <motion.img
              layoutId={`gallery-img-${current.id}`}
              src={current.src}
              alt={current.alt}
              className="lightbox__image"
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <p className="lightbox__caption">{current.alt}</p>
          </div>

          <button ref={closeBtnRef} type="button" className="lightbox__close" aria-label="Close image" onClick={onClose}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! - 1 + images.length) % images.length);
            }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! + 1) % images.length);
            }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="lightbox__counter" aria-hidden="true">{index! + 1} / {images.length}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
