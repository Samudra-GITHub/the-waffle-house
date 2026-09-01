import { Reveal } from "../components/Reveal";

const FEATURES = [
  {
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
    title: "Freshly Made Daily",
    text: "Batter mixed every morning — nothing frozen, nothing sitting overnight.",
  },
  {
    icon: <><path d="M5 20c0-7 4-13 13-14-1 8-6 13-13 14z" /><path d="M8 16c2-3 4-5 8-7" /></>,
    title: "Premium Ingredients",
    text: "Real Belgian chocolate, real cream, real fruit — no shortcuts.",
  },
  {
    icon: <><path d="M4 9h13v4a5 5 0 01-5 5H9a5 5 0 01-5-5V9z" /><path d="M17 10h1.5a2.5 2.5 0 010 5H17" /><path d="M7 5c0 1-1 1-1 2M11 5c0 1-1 1-1 2" /></>,
    title: "Perfect Coffee Pairings",
    text: "Every dessert on the menu has a coffee that was built to sit next to it.",
    steam: true,
  },
  {
    icon: <><path d="M12 3c2 2 2 4 0 6-2-2-2-4 0-6z" /><path d="M6 21c0-5 2.5-8 6-8s6 3 6 8" /></>,
    title: "Cozy Ambience",
    text: "Warm lighting and unhurried corners made for long conversations.",
  },
];

export function ExperienceSection() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">The Waffle Experience</p>
          <h2>What makes it worth the walk.</h2>
        </Reveal>
        <div className="experience-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="feature-card">
              <div className="icon-wrap">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {f.icon}
                </svg>
                {f.steam && (
                  <>
                    <span className="coffee-steam" />
                    <span className="coffee-steam" />
                    <span className="coffee-steam" />
                  </>
                )}
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
