import { Reveal } from "../components/Reveal";
import { gallery } from "../data/menu";

export function GallerySection() {
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
              <img src={g.src} alt={g.alt} loading="lazy" width={400} height={g.height} />
              <div className="masonry-tile__overlay">@thewafflehouse</div>
            </Reveal>
          ))}
        </div>
        <div className="gallery-cta">
          <a className="btn btn--secondary" href="https://instagram.com/thewafflehouse" target="_blank" rel="noopener">View Instagram</a>
        </div>
      </div>
    </section>
  );
}
