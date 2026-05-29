const navStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "0.95rem",
};

export default function Header() {
  return (
    <>
      {/* DISCOUNT BANNER */}
      <div
        style={{
          width: "100%",
          background: "#d4b97f",
          color: "#111827",
          textAlign: "center",
          padding: "8px 12px",
          fontWeight: "bold",
          fontSize: "0.9rem",
          position: "sticky",
          top: 0,
          zIndex: 1001,
        }}
      >
        🎉 Direct Bookings Receive 15% Discount
      </div>

      <header
        style={{
          width: "100%",
          background: "rgba(6,18,36,0.92)",
          backdropFilter: "blur(10px)",
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: "40px",
          zIndex: 1000,
          boxSizing: "border-box",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <meta
          name="keywords"
          content="Kosi Bay accommodation, bush lodge, safari lodge, Kosi Bay lodge, South Africa lodge, Kosi Bay holiday, bushveld accommodation"
        />

        <meta property="og:title" content="Kingfisher Bush Lodge" />

        <meta
          property="og:description"
          content="Luxury accommodation and unforgettable adventures near Kosi Bay."
        />

        <meta property="og:image" content="/images/social-preview.jpg" />

        <meta property="og:type" content="website" />

        {/* LEFT SIDE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          <img
            src="/images/logo/logo.png"
            alt="Kingfisher Bush Lodge"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />

          <div>
            <h1
              style={{
                color: "white",
                margin: 0,
                fontSize: "1.5rem",
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              Kingfisher Bush Lodge
            </h1>

            <p
              style={{
                color: "#d4b97f",
                marginTop: "4px",
                fontSize: "0.9rem",
              }}
            >
              Kosi Bay • South Africa
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <a href="#home" style={navStyle}>
            Home
          </a>

          <a href="#about" style={navStyle}>
  Important Info
</a>

          <a href="#rooms" style={navStyle}>
            Accommodation
          </a>

          <a href="#activities" style={navStyle}>
            Activities
          </a>

          <a href="#restaurant" style={navStyle}>
            Restaurant
          </a>

          <a href="#spa" style={navStyle}>
            Spa
          </a>

          <a href="#location" style={navStyle}>
  Location
</a>

          <a href="#contact" style={navStyle}>
            Contact
          </a>

          <a
            href="https://book.nightsbridge.com/23617"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#556b2f",
              padding: "12px 22px",
              borderRadius: "50px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            Book Now
          </a>
        </nav>
      </header>
    </>
  );
}