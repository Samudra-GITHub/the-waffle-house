import { Reveal } from "../components/Reveal";

export function StorySection() {
  return (
    <section className="section section--tight" id="story">
      <div className="container story">
        <Reveal kind="slide-left" className="story__media cursor-glow">
          <img src="/assets/story/interior-counter-02.png" alt="The Waffle House counter and cozy interior seating in Shivmandir, Siliguri" loading="lazy" width={600} height={750} />
        </Reveal>
        <Reveal kind="slide-right" className="story__copy">
          <p className="eyebrow">Our Story</p>
          <h2 style={{ fontSize: "var(--fs-h2)" }}>A cozy dessert destination in Shivmandir.</h2>
          <p className="lede">Four flavours, one love — built one waffle at a time.</p>
          <ul className="story-points">
            <li>Fresh batter mixed every morning, never premixed</li>
            <li>Quality ingredients, sourced with care</li>
            <li>Friendly, unhurried service</li>
            <li>Affordable indulgence — dessert without the guilt of the bill</li>
          </ul>
          <blockquote className="story-quote">"Every waffle is made fresh because great conversations deserve great desserts."</blockquote>
        </Reveal>
      </div>
    </section>
  );
}
