const YEAR = new Date().getFullYear()
const WA   = 'https://wa.me/27722423571'
const NB   = 'https://book.nightsbridge.com/23617'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <span className="footer-logo-name">Kingfisher Bush Lodge</span>
            <span className="footer-logo-sub">Kosi Bay · KwaZulu-Natal · South Africa</span>
            <p>
              Affordable, owner-managed accommodation in Kosi Bay within the iSimangaliso Wetland
              Park UNESCO World Heritage Site. Luxury chalets, safari tents, family units and
              campsites. Direct bookings always welcome.
            </p>
            <a
              href="https://maps.google.com/?cid=1201529776513704726"
              target="_blank"
              rel="noopener"
              className="footer-rating"
            >
              <span className="stars">★★★★½</span>
              4.5 · 160 Google reviews
            </a>
          </div>

          <div className="footer-col">
            <h5>Navigate</h5>
            <a href="#about">About the Lodge</a>
            <a href="#accommodation">Accommodation</a>
            <a href="#activities">Activities &amp; Tours</a>
            <a href="#restaurant">Restaurant</a>
            <a href="#spa">Spa</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Find Us</a>
            <a href={NB} target="_blank" rel="noopener">Book Online</a>
          </div>

          <div className="footer-col">
            <h5>Contact Us</h5>
            <a href="tel:+27722423571">📞 +27 72 242 3571</a>
            <a href="mailto:info@kosibaysouthafrica.co.za">✉️ info@kosibaysouthafrica.co.za</a>
            <a href={WA} target="_blank" rel="noopener">💬 WhatsApp (preferred)</a>
            <div style={{ marginTop: '1.1rem' }}>
              <h5>Address</h5>
              <a
                href="https://maps.google.com/?cid=1201529776513704726"
                target="_blank"
                rel="noopener"
                style={{ lineHeight: 1.75 }}
              >
                RD D1846, Kwamazambane<br />
                Manguzi, 3973<br />
                KwaZulu-Natal, South Africa
              </a>
            </div>
            <div style={{ marginTop: '1.1rem' }}>
              <h5>Hours</h5>
              <span style={{ display: 'block', fontSize: '.86rem', color: 'rgba(245,240,232,.6)', lineHeight: 1.65 }}>
                Restaurant: 08:00 – 19:00 daily<br />
                Spa: by appointment
              </span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {YEAR} Kingfisher Bush Lodge · All rights reserved</span>
          <span>
            Website by{' '}
            <a href="https://www.cozywebstudio.co.za" target="_blank" rel="noopener">
              CozyWeb Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}