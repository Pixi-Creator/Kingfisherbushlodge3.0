import "./index.css";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { useState } from "react";

const inputStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "#1f2937",
  color: "white",
};

const rooms = [
  {
    title: "Luxury Tented En-Suite Chalet",

    images: [
      "/images/rooms/chalet/1.jpg",
      "/images/rooms/chalet/2.jpg",
      "/images/rooms/chalet/3.jpg",
      "/images/rooms/chalet/4.jpg",
    ],

    description:
      "Fully equipped air-conditioned chalet with kitchenette and private braai area. Sleeps 2 guests comfortably. Extra Bed available on request.",

    lowSeason: {
      2026: "R1400",
      2027: "R1500",
      2028: "R1600",
    },

    highSeason: {
      2026: "R1700",
      2027: "R1800",
      2028: "R1900",
    },
  },

  {
    title: "Standard Safari Tent",

    images: [
      "/images/rooms/safari/1.jpg",
      "/images/rooms/safari/2.jpg",
      "/images/rooms/safari/3.jpg",
      "/images/rooms/safari/4.jpg",
    ],

    description:
      "Comfortable safari tents with communal kitchen, separate from the unit is private ablution facilities and private braai area.",

    lowSeason: {
      2026: "R700",
      2027: "R800",
      2028: "R900",
    },

    highSeason: {
      2026: "R900",
      2027: "R1000",
      2028: "R1100",
    },
  },

  {
    title: "Luxury Family En-Suite Tent",

    images: [
      "/images/rooms/family/1.jpg",
      "/images/rooms/family/2.jpg",
      "/images/rooms/family/3.jpg",
      "/images/rooms/family/4.jpg",
    ],

    description:
      "Spacious family tent with queen bed, bunk bed and sleeper couch. Sleeps up to 5 guests.",

    lowSeason: {
      2026: "R1700",
      2027: "R1800",
      2028: "R1900",
    },

    highSeason: {
      2026: "R2000",
      2027: "R2100",
      2028: "R2200",
    },
  },

  {
    title: "Two Bedroom Family Unit",

    images: [
      "/images/rooms/two-bedroom/1.jpg",
      "/images/rooms/two-bedroom/2.jpg",
      "/images/rooms/two-bedroom/3.jpg",
      "/images/rooms/two-bedroom/4.jpg",
    ],

    description:
      "Two-bedroom family unit with kitchenette, lounge area and private braai facilities.",

    lowSeason: {
      2026: "R1900",
      2027: "R2000",
      2028: "R2100",
    },

    highSeason: {
      2026: "R2100",
      2027: "R2200",
      2028: "R2300",
    },
  },

  {
  title: "Campsites",

  images: [
    "/images/rooms/campsite/1.jpg",
    "/images/rooms/campsite/2.jpg",
    "/images/rooms/campsite/3.jpg",
    "/images/rooms/campsite/4.jpg",
  ],

  description:
    "Spacious campsites featuring electrical points, water points and private ablution facilities. Rates include up to 4 guests per campsite.",

  lowSeason: {
    2026: "R500",
    2027: "R600",
    2028: "R700",
  },

  highSeason: {
    2026: "R500",
    2027: "R600",
    2028: "R700",
  },
},

];

const activities = [
  {
    title: "Kosi Aquarium Snorkeling Adventure",
    image: "/images/activities/snorkeling.jpg",
    description:
      "Explore one of South Africa’s most diverse reefs with specialist marine guides.",
  },

  {
    title: "Kosi Bay Kayaking Adventures",
    image: "/images/activities/kayaking.jpg",
    description:
      "Paddle through crystal-clear channels and mangrove forests with experienced Thonga guides.",
  },

  {
    title: "The Best of Kosi Bay Mouth",
    image: "/images/activities/best-of-kosi.jpg",
    description:
      "A full-day experience including kayaking, snorkeling, fish kraal tours and palm wine tasting.",
  },

  {
    title: "Cultural Fish Kraal Tour",
    image: "/images/activities/fish-kraal.jpg",
    description:
      "Discover the 700-year-old Thonga fish kraal traditions and enjoy palm wine tasting.",
  },

  {
    title: "Birding Walk",
    image: "/images/activities/birding.jpg",
    description:
      "Discover incredible birdlife across the wetlands, estuaries and forests of Kosi Bay.",
  },

  {
    title: "Kosi Mouth Guided Nature Hikes",
    image: "/images/activities/nature-hike.jpg",
    description:
      "Scenic guided hikes exploring wildlife, plants, culture and local history.",
  },

  {
    title: "Three Lake Cruise",
    image: "/images/activities/three-lake.jpg",
    description:
      "Boat cruise through the three lakes of Kosi Bay with snorkeling opportunities included.",
  },

  {
    title: "Turtle Tour",
    image: "/images/activities/turtle-tour.jpg",
    description:
      "Witness nesting Leatherback and Loggerhead turtles during turtle season.",
  },
];

export default function App() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>([]);

  const nextImage = (roomIndex: number, totalImages: number) => {
    setCurrentImageIndexes((prev) => {
      const updated = [...prev];
      updated[roomIndex] =
        ((updated[roomIndex] || 0) + 1) % totalImages;
      return updated;
    });
  };

  const prevImage = (roomIndex: number, totalImages: number) => {
    setCurrentImageIndexes((prev) => {
      const updated = [...prev];
      updated[roomIndex] =
        ((updated[roomIndex] || 0) - 1 + totalImages) %
        totalImages;
      return updated;
    });
  };

  return (
    <div
      style={{
        background: "#0f1720",
        color: "white",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Header />

      <Hero />

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 8%",
          background: "#111827",
          textAlign: "center",
        }}
      >

        <div
  style={{
    marginTop: "50px",
    background: "#3f4f2a",
    padding: "35px",
    borderRadius: "20px",
    maxWidth: "1100px",
    marginInline: "auto",
    border: "2px solid #d4b97f",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  }}
>
  <h3
    style={{
      marginBottom: "20px",
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      color: "#f5f5dc",
    }}
  >
    Important Information
  </h3>

  <p
    style={{
      lineHeight: 1.9,
      fontSize: "1.1rem",
      color: "#f3f4f6",
    }}
  >
    Please note that Kingfisher Bush Lodge is NOT situated directly on the
    beach or lakes. We are located in a peaceful bushveld setting
    approximately 1.6km from Lake Nhlange and close to the beautiful Kosi Bay
    Mouth. 
  </p>
</div>

<div
  style={{
    marginTop: "30px",
    background: "#1f2937",
    padding: "20px",
    borderRadius: "20px",
    maxWidth: "1100px",
    marginInline: "auto",
    border: "1px solid #556b2f",
  }}
>
  <h3
    style={{
      marginBottom: "20px",
      fontSize: "1.8rem",
      color: "#d4b97f",
    }}
  >
    Activities & Tour Information
  </h3>

  <p
    style={{
      lineHeight: 1.9,
      fontSize: "1.05rem",
      color: "#e5e7eb",
    }}
  >
    Kingfisher Bush Lodge works together with trusted third-party activity
    operators and local guides to provide unforgettable Kosi Bay experiences.
    All tours, adventures and activities are arranged on behalf of guests with
    approved external operators. Activity availability, schedules and pricing
    may vary depending on weather conditions, seasonal changes and operator
    availability.
  </p>
</div>

      </section>

      {/* ROOMS */}
      <section
        id="rooms"
        style={{
          padding: "80px 20px",
          backgroundColor: "#111111",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "50px",
            color: "#f5f5dc",
          }}
        >
          Our Rooms
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {rooms.map((room, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {/* SLIDESHOW */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(250px, 50vw, 400px)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={room.images[currentImageIndexes[index] || 0]}
                  alt={room.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* LEFT BUTTON */}
                <button
                  onClick={() => prevImage(index, room.images.length)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  ←
                </button>

                {/* RIGHT BUTTON */}
                <button
                  onClick={() => nextImage(index, room.images.length)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  →
                </button>
              </div>

              {/* ROOM INFO */}
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#f5f5dc",
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    marginBottom: "15px",
                  }}
                >
                  {room.title}
                </h3>

                <p
                  style={{
                    color: "#d3d3d3",
                    lineHeight: "1.8",
                    marginBottom: "25px",
                  }}
                >
                  {room.description}
                </p>

                {/* LOW SEASON */}
                <div
                  style={{
                    marginBottom: "20px",
                    backgroundColor: "#2a2a2a",
                    padding: "15px",
                    borderRadius: "12px",
                  }}
                >
                  <h4
                    style={{
                      color: "#c2b280",
                      marginBottom: "10px",
                    }}
                  >
                    Low Season Rates
                  </h4>

                  {Object.entries(room.lowSeason).map(([year, price]) => (
                    <p
                      key={year}
                      style={{
                        color: "#ffffff",
                        margin: "5px 0",
                      }}
                    >
                      {year}: {price}
                    </p>
                  ))}
                </div>

                {/* HIGH SEASON */}
                <div
                  style={{
                    marginBottom: "25px",
                    backgroundColor: "#2a2a2a",
                    padding: "15px",
                    borderRadius: "12px",
                  }}
                >
                  <h4
                    style={{
                      color: "#c2b280",
                      marginBottom: "10px",
                    }}
                  >
                    High Season Rates
                  </h4>

                  {Object.entries(room.highSeason).map(([year, price]) => (
                    <p
                      key={year}
                      style={{
                        color: "#ffffff",
                        margin: "5px 0",
                      }}
                    >
                      {year}: {price}
                    </p>
                  ))}
                </div>

                {/* BOOK BUTTON */}
                <a
                  href={`"https://book.nightsbridge.com/23617"?room=${encodeURIComponent(room.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#c2b280",
                    color: "#111111",
                    padding: "15px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section
        id="activities"
        style={{
          padding: "100px 8%",
          background: "#111827",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#d4b97f",
            marginBottom: "70px",
          }}
        >
          Activities & Adventures
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              style={{
                background: "#0f1720",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <img
                src={activity.image}
                alt={activity.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    color: "#d4b97f",
                    marginBottom: "20px",
                    fontSize: "1.4rem",
                  }}
                >
                  {activity.title}
                </h3>

                <p
                  style={{
                    lineHeight: 1.9,
                    color: "#d1d5db",
                    marginBottom: "30px",
                  }}
                >
                  {activity.description}
                </p>

                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <input placeholder="Full Name" style={inputStyle} />
                  <input placeholder="Phone Number" style={inputStyle} />
                  <input placeholder="Email Address" style={inputStyle} />
                  <input type="date" style={inputStyle} />

                  <a
                    href="https://wa.me/27722423571"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#556b2f",
                      padding: "16px",
                      borderRadius: "50px",
                      textAlign: "center",
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Enquire on WhatsApp
                  </a>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* RESTAURANT */}
<section
  id="restaurant"
  style={{
    padding: "100px 8%",
    background: "#0f1720",
  }}
>
  <h2
    style={{
      fontSize: "clamp(2rem, 5vw, 3rem)",
      color: "#d4b97f",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    The Hungry Woodpecker Restaurant
  </h2>

  <p
    style={{
      maxWidth: "1100px",
      margin: "0 auto 60px auto",
      lineHeight: 2,
      fontSize: "1.2rem",
      textAlign: "center",
      color: "#e5e7eb",
    }}
  >
    Enjoy delicious meals, refreshing drinks and warm hospitality at The
    Hungry Woodpecker Restaurant. Perfect for breakfast, lunch or an early
    dinner while surrounded by the peaceful atmosphere of Kosi Bay bushveld.
    Open Daily 8am - 7pm.
  </p>

  {/* RESTAURANT IMAGES */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px",
      maxWidth: "1300px",
      margin: "auto",
    }}
  >
    <img
      src="/images/restaurant/1.jpg"
      alt="Hungry Woodpecker Restaurant"
      style={{
        width: "100%",
        height: "450px",
        objectFit: "cover",
        borderRadius: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      }}
    />

    <img
      src="/images/restaurant/2.jpg"
      alt="Restaurant Dining Area"
      style={{
        width: "100%",
        height: "450px",
        objectFit: "cover",
        borderRadius: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      }}
    />
  </div>

  {/* BUTTON */}
  <div
    style={{
      textAlign: "center",
      marginTop: "50px",
    }}
  >
    <a
      href="https://wa.me/27722423571"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        background: "#556b2f",
        color: "white",
        padding: "18px 36px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
    >
      Enquire About Dining
    </a>
  </div>
</section>

      {/* SPA */}
      <section
        id="spa"
        style={{
          padding: "100px 8%",
          background: "#0f1720",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#d4b97f",
            marginBottom: "20px",
          }}
        >
          Ziphozemvelo Day Spa
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            margin: "0 auto 50px auto",
            lineHeight: 1.8,
            color: "#d1d5db",
            fontSize: "1.1rem",
          }}
        >
          Relax, unwind and reconnect with nature through calming treatments,
          massages and wellness experiences in the heart of the bushveld.
        </p>

        {/* SPA IMAGES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <img
            src="/images/spa/1.jpg"
            alt="Spa Treatment"
            style={{
              width: "100%",
              height: "clamp(250px, 50vw, 400px)",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <img
            src="/images/spa/2.jpg"
            alt="Spa Relaxation Area"
            style={{
              width: "100%",
              height: "clamp(250px, 50vw, 400px)",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>

        {/* BUTTON */}
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <a
            href="https://wa.me/27722423571"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#556b2f",
              color: "white",
              padding: "18px 36px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Book Spa Appointment
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
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
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            color: "#d1d5db",
            marginBottom: "20px",
            fontSize: "1.1rem",
          }}
        >
          We'd love to help you plan your perfect Kosi Bay getaway.
        </p>

        {/* EMAIL LINK */}
        <a
          href="mailto:info@kosibaysouthafrica.co.za"
          style={{
            color: "#d4b97f",
            fontSize: "1.2rem",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            marginBottom: "50px",
          }}
        >
          info@kosibaysouthafrica.co.za
        </a>

        {/* CONTACT FORM */}
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "#111827",
            padding: "40px",
            borderRadius: "24px",
          }}
        >
        <form
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const adults = (form.elements.namedItem("adults") as HTMLInputElement).value;
    const children = (form.elements.namedItem("children") as HTMLInputElement).value;

    const subject = `Kingfisher Bush Lodge Enquiry`;

    const body = `
Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Date: ${date}
Adults: ${adults}
Children: ${children}
    `;

    window.location.href = `mailto:info@kosibaysouthafrica.co.za?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }}
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  }}
>
  <input name="name" placeholder="Full Name" style={inputStyle} />

  <input name="phone" placeholder="Phone Number" style={inputStyle} />

  <input name="email" placeholder="Email Address" style={inputStyle} />

  <input name="date" type="date" style={inputStyle} />

  <input name="adults" placeholder="Number of Adults" style={inputStyle} />

  <input name="children" placeholder="Number of Children" style={inputStyle} />

  <button
    type="submit"
    style={{
      background: "#556b2f",
      padding: "16px",
      borderRadius: "50px",
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
      marginTop: "10px",
      border: "none",
      cursor: "pointer",
    }}
  >
    Send Email Enquiry
  </button>

            <a
              href="https://wa.me/27722423571"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                padding: "16px",
                borderRadius: "50px",
                textAlign: "center",
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Chat on WhatsApp
            </a>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

