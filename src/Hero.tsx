export default function Hero() {
  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/hero/main.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
        }}
      >
        <p
          style={{
            color: "#d4b97f",
            letterSpacing: "5px",
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "1rem",
          }}
        >
          BUSHVELD ACCOMMODATION • WELCOME TO
        </p>

        <h1
          style={{
            color: "white",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            margin: 0,
            lineHeight: 1,
            fontWeight: "bold",
          }}
        >
          Kingfisher Bush Lodge
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "clamp(1rem, 2vw, 1.6rem)",
            marginTop: "35px",
            lineHeight: 1.8,
            maxWidth: "900px",
            marginInline: "auto",
          }}
        >
          Experience the beauty of Kosi Bay with relaxed bushveld accommodation,
          unforgettable adventures, authentic local experiences, comfortable
          stays and warm South African hospitality.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://book.nightsbridge.com/23617"
            target="_blank"
            style={{
              background: "#d4b97f",
              color: "#000",
              padding: "18px 40px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "0.3s",
            }}
          >
            Book Accommodation
          </a>

          <a
            href="https://wa.me/27722423571"
            target="_blank"
            style={{
              background: "#556b2f",
              color: "white",
              padding: "18px 40px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            WhatsApp Us
          </a>
        </div>

        {/* SCROLL ICON */}
        <div
          style={{
            marginTop: "80px",
            color: "white",
            fontSize: "2rem",
            opacity: 0.7,
          }}
        >
          ↓
        </div>
      </div>
    </section>
  );
}