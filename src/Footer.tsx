const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <span className="footer-logo-name">Kingfisher Bush Lodge</span>
            <span className="footer-logo-sub">Kosi Bay · KwaZulu-Natal · South Africa</span>
            <p>
              A boutique owner-managed bush lodge within the iSimangaliso Wetland Park UNESCO
              World Heritage Site. Direct bookings always welcome — no fees, no middlemen.
            </p>
            <div className="footer-rating">
              <span className="stars">★★★★½</span>
              <a href="https://maps.google.com/?cid=1201529776513704726" target="_blank" rel="noopener">
                4.5 · 160 Google reviews
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Navigate</h5>
            <a href="#about">About the Lodge</a>
            <a href="#accommodation">Accommodation</a>
            <a href="#tembe">Tembe Safari</a>
            <a href="#activities">Things to do</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Find Us</a>
            <a href="https://book.nightsbridge.com/23617" target="_blank" rel="noopener">Book Online</a>
          </div>

          <div className="footer-col">
            <h5>Contact Us</h5>
            <a href="tel:+27722423571">📞 +27 72 242 3571</a>
            <a href="mailto:info@kosibaysouthafrica.co.za">✉️ info@kosibaysouthafrica.co.za</a>
            <a href="https://wa.me/27722423571" target="_blank" rel="noopener">💬 WhatsApp (preferred)</a>
            <div style={{ marginTop: '1rem' }}>
              <h5>Address</h5>
              <a href="https://maps.google.com/?cid=1201529776513704726" target="_blank" rel="noopener" style={{ lineHeight: 1.7 }}>
                RD D1846, Kwamazambane<br />
                Manguzi, 3973<br />
                KwaZulu-Natal, South Africa
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {YEAR} Kingfisher Bush Lodge · All rights reserved</span>
          <span>
            Website by{' '}
            <a href="https://www.cozywebstudio.co.za" target="_blank" rel="noopener">CozyWeb Studio</a>
          </span>
        </div>
      </div>
    </footer>
  )
}