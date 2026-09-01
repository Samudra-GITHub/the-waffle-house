export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              THE WAFFLE <span>HOUSE</span>
            </div>
            <p className="footer-tag">Four Flavours. One Love. Handcrafted waffles, cheesecakes and coffee in Shivmandir, Siliguri.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Menu</h4>
              <ul>
                <li><a href="#menu">Waffles</a></li>
                <li><a href="#menu">Cheesecakes</a></li>
                <li><a href="#menu">Coffee &amp; Shakes</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Visit</h4>
              <ul>
                <li><a href="#visit">Location</a></li>
                <li><a href="#visit">Hours</a></li>
                <li><a href="#visit">Get Directions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://instagram.com/thewafflehouse" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="https://wa.me/910000000000" target="_blank" rel="noopener">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Made with{" "}
            <svg className="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 20s-7-4.5-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 11c-2.5 4.5-9.5 9-9.5 9z" />
            </svg>{" "}
            in Siliguri · © 2026 The Waffle House
          </p>
          <div className="social-row">
            <a className="btn btn--icon" href="https://instagram.com/thewafflehouse" target="_blank" rel="noopener" aria-label="The Waffle House on Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r=".8" fill="currentColor" />
              </svg>
            </a>
            <a className="btn btn--icon" href="https://wa.me/910000000000" target="_blank" rel="noopener" aria-label="Message The Waffle House on WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 20l1.4-4.2A7.9 7.9 0 1112 20a7.9 7.9 0 01-3.8-1L4 20z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
