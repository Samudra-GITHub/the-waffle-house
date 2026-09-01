const PARTICLES = [
  { cls: "particle--cocoa", style: { left: "8%", top: "6%" } },
  { cls: "particle--cocoa particle--sm", style: { left: "14%", top: "16%" } },
  { cls: "particle--flake", style: { left: "4%", top: "38%" } },
  { cls: "particle--berry-red", style: { left: "70%", top: "8%" } },
  { cls: "particle--berry-blue", style: { left: "78%", top: "14%" } },
  { cls: "particle--droplet", style: { left: "22%", top: "2%" } },
  { cls: "particle--droplet particle--sm", style: { left: "60%", top: "46%" } },
  { cls: "particle--cocoa particle--sm", style: { left: "88%", top: "40%" } },
];

export function Hero() {
  return (
    <header className="hero is-in-view" id="hero">
      {/* 1. background gradient */}
      <div className="hero__bg" />
      {/* 2. atmosphere: vignette + grain, no ambient motion yet — see Phase A motion-prep note in homepage.css */}
      <div className="hero__vignette" />
      <div className="hero__grain" />
      {/* warm radial light seated behind the waffle, blending the photo into the composition */}
      <div className="hero__glow" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">Crafted Fresh Daily</p>
          <h1 className="hero__title">
            <span className="line"><span>The Art of</span></span>
            <span className="line"><span>Belgian Waffles</span></span>
          </h1>
          <p className="hero__subtitle">
            Handcrafted with premium ingredients, artisan syrups and fresh coffee — an unforgettable indulgence.
          </p>
          <div className="hero__ctas">
            <a href="#menu" className="btn btn--primary hero__cta">Order Now</a>
          </div>
        </div>

        {/* 3–6: waffle, steam/drip, floating ingredients, editorial UI details */}
        <div className="hero__visual">
          <img
            className="hero__waffle"
            src="/assets/hero/hero-waffle-clean.png"
            alt="A golden Belgian waffle topped with butter, raspberries, blueberries and chocolate shavings, drizzled with syrup, on a white plate"
            width={1010}
            height={700}
            // @ts-expect-error - fetchpriority isn't in this React version's JSX types yet
            fetchpriority="high"
          />
          <img
            className="hero__steam"
            src="/assets/hero/hero-drip-steam.png"
            alt=""
            width={560}
            height={530}
            aria-hidden="true"
          />

          <div className="hero__particles" aria-hidden="true">
            {PARTICLES.map((p, i) => (
              <span key={i} className={`particle ${p.cls}`} style={p.style} />
            ))}
          </div>

          <div className="hero__badge">
            <span className="hero__badge-num">4.5</span>
            <span className="hero__badge-label">Rating</span>
          </div>

          <p className="hero__caption hero__caption--crafted">Belgian • Handmade</p>

          <svg className="hero__caption-arc" viewBox="0 0 440 180" overflow="visible" aria-hidden="true">
            <path id="heroCaptionArc" d="M 10 15 A 480 480 0 0 1 430 165" fill="none" />
            <text className="hero__caption-arc-text">
              <textPath href="#heroCaptionArc" startOffset="0%" text-anchor="start">Since 2026 • Siliguri</textPath>
            </text>
          </svg>

          <span className="hero__star hero__star--1" aria-hidden="true">✦</span>
          <span className="hero__star hero__star--2" aria-hidden="true">✧</span>

          <p className="hero__ingredient-label hero__ingredient-label--1">Pure Maple Syrup</p>
          <p className="hero__ingredient-label hero__ingredient-label--2">Single-Origin Cocoa</p>
        </div>
      </div>
    </header>
  );
}
