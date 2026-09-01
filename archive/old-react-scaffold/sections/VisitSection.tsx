import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

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
          <h2>Come say hello.</h2>
        </Reveal>
        <div className="visit-layout">
          <Reveal kind="slide-left" className="visit-info">
            <div className="visit-info-row">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.3" /></svg>
              <div><h4>Address</h4><p>Shivmandir, Siliguri, West Bengal, India</p></div>
            </div>
            <div className="visit-info-row">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
              <div>
                <h4>Opening Hours</h4>
                <div className="visit-hours">
                  <div className="row today"><span>Today</span><span>{status.text}</span></div>
                  <div className="row"><span>Mon – Sun</span><span>11:00 AM – 11:00 PM</span></div>
                </div>
                <div className="status-pill">
                  <span className={`status-dot${status.open ? " open" : ""}`} />
                  <span style={{ fontSize: "var(--fs-caption)", color: "var(--wh-text-muted)" }}>Kitchen closes 30 min before closing</span>
                </div>
              </div>
            </div>
            <div className="visit-info-row">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 5c0-1 1-2 2-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 1-1 2-2 2-8 0-14-6-14-14z" /></svg>
              <div><h4>Phone</h4><a href="tel:+910000000000">+91 00000 00000</a></div>
            </div>
            <div className="visit-info-row">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.2" /><circle cx="16.2" cy="7.8" r=".6" fill="currentColor" /></svg>
              <div><h4>Instagram</h4><a href="https://instagram.com/thewafflehouse" target="_blank" rel="noopener">@thewafflehouse</a></div>
            </div>
            <div className="visit-info-row">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20l1.4-4.2A7.9 7.9 0 1112 20a7.9 7.9 0 01-3.8-1L4 20z" /></svg>
              <div><h4>WhatsApp</h4><a href="https://wa.me/910000000000" target="_blank" rel="noopener">+91 00000 00000</a></div>
            </div>
            <div className="visit-actions">
              <a className="btn btn--primary" href="https://maps.google.com/?q=Shivmandir,+Siliguri,+West+Bengal" target="_blank" rel="noopener" aria-label="Get directions to The Waffle House on Google Maps">Get Directions</a>
              <a className="btn btn--secondary" href="https://wa.me/910000000000" target="_blank" rel="noopener" aria-label="Order via WhatsApp">WhatsApp Order</a>
            </div>
          </Reveal>
          <Reveal kind="fade" className="visit-map" role="img" aria-label="Map showing The Waffle House location in Shivmandir, Siliguri">
            <div className="map-fill" />
            <div className="pin" />
            <div className="map-label">Shivmandir, Siliguri</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
