const navStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1rem",
};

export default function Header() {
  return (
    <header
      style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "20px",
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
          gap: "20px",
        }}
      >
        <img
          src="/images/logo/logo.png"
          alt="Kingfisher Bush Lodge"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
          }}
        />

        <div>
          <h1
            style={{
              color: "white",
              margin: 0,
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Kingfisher Bush Lodge
          </h1>

          <p
            style={{
              color: "#d4b97f",
              marginTop: "5px",
              fontSize: "1rem",
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
          gap: "28px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <a href="#home" style={navStyle}>
          Home
        </a>

        <a href="#about" style={navStyle}>
          About
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

        <a href="#contact" style={navStyle}>
          Contact
        </a>

        <a
          href="https://book.nightsbridge.com/23617"
          target="_blank"
          style={{
            background: "#556b2f",
            padding: "14px 26px",
            borderRadius: "50px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}