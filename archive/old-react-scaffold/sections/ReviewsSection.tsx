import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { reviews } from "../data/menu";

function Stars() {
  return (
    <div className="stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.3, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Reviews</p>
          <h2>Don't take our word for it.</h2>
          <span className="pill" style={{ marginTop: "var(--space-2)" }}>★ 4.8 overall · 490 Google Reviews</span>
        </Reveal>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={r.id} kind="pop" delay={i * 0.08} className="review-card">
              <Stars />
              <p className="quote">"{r.quote}"</p>
              <div className="who">
                <div className="review-avatar">
                  <img src={r.avatar} alt={r.name} loading="lazy" width={40} height={40} />
                </div>
                <div>
                  <div className="name">{r.name}</div>
                  <div className="meta">{r.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
