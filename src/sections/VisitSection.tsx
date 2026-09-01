import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

const DIRECTIONS_URL =
  "https://maps.google.com/?q=Atharokhai+Math,+Satyajit+Sarani,+Kadamtala,+Bairatisal,+Shivmandir,+Siliguri,+West+Bengal+734011";

const SERVICES = ["Dine-In", "Kerbside Pickup", "No-Contact Delivery"];

export function VisitSection() {
  const [status, setStatus] = useState<{ text: string; open: boolean }>({ text: "—", open: false });

  useEffect(() => {
    const hour = new Date().getHours();
    const isOpen = hour >= 11 && hour < 23;
    setStatus({ text: isOpen ? "Open now" : "Opens at 11:00 AM", open: isOpen });
  }, []);

  return (
    <section className="section" id="visit">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Visit Us</p>
          <h2>Come Say Hello.</h2>
          <p>Whether you're stopping by for a post-college treat, a coffee date, or a late-night waffle craving, we'd love to welcome you.</p>
        </Reveal>

        <div className="visit-cards">
          <Reveal kind="pop" className="visit-card">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.3" /></svg>
            <h3>Location</h3>
            <p>Atharokhai Math, Satyajit Sarani, Kadamtala, Bairatisal, Shivmandir, Siliguri, West Bengal 734011</p>
          </Reveal>

          <Reveal kind="pop" delay={0.08} className="visit-card">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
            <h3>Opening Hours</h3>
            <p className="visit-card__highlight">Open Every Day</p>
            <div className="visit-hours-row"><span>11:00 AM – 11:00 PM</span></div>
            <div className="status-pill">
              <span className={`status-dot${status.open ? " open" : ""}`} />
              <span style={{ fontSize: "var(--fs-caption)", color: "var(--mc-muted)" }}>{status.text}</span>
            </div>
            <p>Kitchen closes 30 minutes before closing.</p>
          </Reveal>

          <Reveal kind="pop" delay={0.16} className="visit-card">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.2" /><circle cx="16.2" cy="7.8" r=".6" fill="currentColor" /></svg>
            <h3>Instagram</h3>
            <a href="https://instagram.com/thewafflehouse_slg" target="_blank" rel="noopener">@thewafflehouse_slg</a>
            <p>Follow us for new flavours, seasonal specials, and behind-the-scenes moments.</p>
          </Reveal>

          <Reveal kind="pop" delay={0.24} className="visit-card">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20l1.4-4.2A7.9 7.9 0 1112 20a7.9 7.9 0 01-3.8-1L4 20z" /></svg>
            <h3>WhatsApp</h3>
            <p>Chat with us for order enquiries and quick updates.</p>
            <a className="btn btn--secondary" href="https://wa.me/910000000000" target="_blank" rel="noopener" aria-label="Message The Waffle House on WhatsApp">Message Us</a>
          </Reveal>
        </div>

        <Reveal kind="fade" className="visit-map-block">
          <div className="visit-map" role="img" aria-label="Map showing The Waffle House location in Shivmandir, Siliguri">
            <div className="map-fill" />
            <div className="pin" />
            <div className="map-label">Shivmandir, Siliguri</div>
          </div>
          <a className="btn btn--primary" href={DIRECTIONS_URL} target="_blank" rel="noopener" aria-label="Get directions to The Waffle House on Google Maps">
            Get Directions
          </a>
        </Reveal>

        <Reveal kind="fade" className="visit-services">
          {SERVICES.map((s) => (
            <span key={s} className="pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              {s}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
