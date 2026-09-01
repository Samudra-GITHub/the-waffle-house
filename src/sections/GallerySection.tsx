import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { Lightbox } from "../components/Lightbox";
import { gallery } from "../data/gallery";

export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Gallery</p>
          <h2>Straight from our table to your feed.</h2>
        </Reveal>
        <div className="masonry">
          {gallery.map((g, i) => (
            <Reveal key={g.id} kind="scale" delay={i * 0.05} className="masonry-tile cursor-glow">
              <button type="button" className="masonry-tile__trigger" onClick={() => setOpenIndex(i)} aria-label={`View larger: ${g.alt}`}>
                <motion.img layoutId={`gallery-img-${g.id}`} src={g.src} alt={g.alt} loading="lazy" width={400} height={g.height} />
                <div className="masonry-tile__overlay">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M11 8v6M8 11h6" />
                  </svg>
                  View
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="gallery-cta">
          <a className="btn btn--secondary" href="https://instagram.com/thewafflehouse" target="_blank" rel="noopener">View Instagram</a>
        </div>
      </div>

      <Lightbox images={gallery} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </section>
  );
}
