import { Reveal } from "../components/Reveal";

export function StorySection() {
  return (
    <section className="section section--tight" id="story">
      <div className="container story">
        <Reveal kind="slide-left" className="story__media cursor-glow">
          <img src="/assets/story/interior-counter-02.webp" alt="The Waffle House counter and cozy interior seating in Shivmandir, Siliguri" loading="lazy" width={600} height={750} />
        </Reveal>
        <Reveal kind="slide-right" className="story__copy">
          <p className="eyebrow">Our Story</p>
          <h2 style={{ fontSize: "var(--fs-h2)" }}>Crafted For Every Craving</h2>
          <p className="lede">
            From freshly baked waffles to rich cheesecakes and creamy shakes, every item
            is prepared to bring comfort, flavour and memorable moments.
          </p>
          <ul className="story-points">
            <li>Handcrafted daily — fresh batter mixed every morning, never premixed</li>
            <li>Fresh ingredients, sourced with care</li>
            <li>Made to order, friendly and unhurried service</li>
            <li>A local favourite in Shivmandir, one waffle at a time</li>
          </ul>
          <blockquote className="story-quote">"Every waffle is made fresh because great conversations deserve great desserts."</blockquote>
        </Reveal>
      </div>
    </section>
  );
}
