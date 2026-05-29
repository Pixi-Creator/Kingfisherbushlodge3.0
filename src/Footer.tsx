export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#061224",
        color: "white",
        padding: "80px 8% 40px",
      }}
    >
      {/* TOP GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "50px",
          marginBottom: "60px",
        }}
      >
        {/* LODGE INFO */}
        <div>
          <img
            src="/images/logo/logo.png"
            alt="Kingfisher Bush Lodge"
            style={{
              width: "140px",
              marginBottom: "20px",
            }}
          />

          <p
            style={{
              lineHeight: 1.9,
              color: "#d1d5db",
            }}
          >
            Relaxed bushveld accommodation near Kosi Bay offering unforgettable
            adventures, comfortable stays, delicious dining and authentic South
            African hospitality.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3
            style={{
              color: "#d4b97f",
              marginBottom: "20px",
              fontSize: "1.5rem",
            }}
          >
            Contact Us
          </h3>

          <p style={{ marginBottom: "15px" }}>
            📍 Kosi Bay, KwaZulu-Natal, South Africa
          </p>

          <p style={{ marginBottom: "15px" }}>
            📞 Lodge & Restaurant: 072 242 3571
          </p>

          <p style={{ marginBottom: "15px" }}>
            💆 Spa Bookings: 072 242 3571
          </p>

          <p style={{ marginBottom: "15px" }}>
            ✉️ info@kosibaysouthafrica.co.za
          </p>

          <a
            href="https://wa.me/27722423571"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#556b2f",
              color: "white",
              padding: "14px 28px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            WhatsApp Us
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3
            style={{
              color: "#d4b97f",
              marginBottom: "20px",
              fontSize: "1.5rem",
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <a href="#about" style={linkStyle}>
              About Us
            </a>

            <a href="#rooms" style={linkStyle}>
              Accommodation
            </a>

            <a href="#activities" style={linkStyle}>
              Activities
            </a>

            <a href="#restaurant" style={linkStyle}>
              Restaurant
            </a>

            <a href="#spa" style={linkStyle}>
              Day Spa
            </a>

            <a
              href="https://book.nightsbridge.com/23617"
              target="_blank"
              style={linkStyle}
            >
              Book Online
            </a>
          </div>
        </div>
      </div>

      {/* LOCATION */}
<section
  id="location"
  style={{
    padding: "100px 8%",
    background: "#0f1720",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "3rem",
      color: "#d4b97f",
      marginBottom: "30px",
    }}
  >
    Find Us
  </h2>

  <p
    style={{
      color: "#d1d5db",
      marginBottom: "30px",
      fontSize: "1.1rem",
      lineHeight: 1.8,
    }}
  >
    Kingfisher Bush Lodge <br />
    RD D1846, Kwamazambane, Manguzi, 3973
  </p>

  {/* GOOGLE MAP */}
  <div
    style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    }}
  >
    <iframe
      src="https://www.google.com/maps?q=Kingfisher+Bush+Lodge+Kwamazambane+Manguzi&output=embed"
      width="100%"
      height="500"
      style={{
        border: 0,
      }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* DIRECTIONS BUTTON */}
  <a
    href="https://google.com/maps?cid=1201529776513704726"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "35px",
      background: "#556b2f",
      color: "white",
      padding: "16px 34px",
      borderRadius: "50px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1rem",
    }}
  >
    Open in Google Maps
  </a>
</section>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "30px",
          textAlign: "center",
          color: "#9ca3af",
        }}
      >
        © 2026 Kingfisher Bush Lodge • All Rights Reserved
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/27722423571"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          background: "#25D366",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          textDecoration: "none",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      >
        💬
      </a>
    </footer>
  );
}

const linkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "1rem",
};