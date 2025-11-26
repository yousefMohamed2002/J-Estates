import React, { useEffect, useRef } from "react";

export default function App() {
  const unitsRef = useRef(null);
  const contactRef = useRef(null);

  // Fade-in animation on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  const scrollToUnits = () =>
    unitsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={styles.container}>
      {/* HERO */}
      <section style={styles.hero} className="fade-in">
        <h1 style={styles.logo}>J-Estates</h1>
        <h2 style={styles.heroTitle}>Find Your Perfect Home</h2>
        <p style={styles.heroText}>
          Premium homes and investment opportunities across New Cairo, New
          Capital, 6th October & Sheikh Zayed.
        </p>
        <button style={styles.cta} onClick={scrollToUnits}>
          Explore Units
        </button>
      </section>

      {/* ABOUT */}
      <section style={styles.section} className="fade-in">
        <h2 style={styles.sectionTitle}>About J-Estates</h2>
        <p style={styles.sectionText}>
          J-Estates provides trusted real estate consulting, helping you find
          the best units with exclusive prices and direct deals with Egypt’s top
          developers.
        </p>
      </section>

      {/* FEATURED UNITS */}
      <section
        ref={unitsRef}
        style={{ ...styles.section, background: "#f7f7f7" }}
        className="fade-in">
        <h2 style={styles.sectionTitle}>Featured Units</h2>

        <div style={styles.unitList}>
          {/* Unit 1 */}
          <div style={styles.unitCard} className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Zayed Compound"
              style={styles.unitImage}
            />
            <h3>Icon Town – New Zayed</h3>
            <p>Luxury Apartments & Villas</p>
            <button style={styles.unitButton} onClick={scrollToContact}>
              View Details
            </button>
          </div>

          {/* Unit 2 */}
          <div style={styles.unitCard} className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
              alt="New Capital Tower"
              style={styles.unitImage}
            />
            <h3>Downtown – New Capital</h3>
            <p>Admin & Commercial Units</p>
            <button style={styles.unitButton} onClick={scrollToContact}>
              View Details
            </button>
          </div>

          {/* Unit 3 */}
          <div style={styles.unitCard} className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
              alt="Palm Hills"
              style={styles.unitImage}
            />
            <h3>Palm Hills – October</h3>
            <p>Villas & Premium Apartments</p>
            <button style={styles.unitButton} onClick={scrollToContact}>
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={contactRef}
        style={{ ...styles.section, background: "#e6f0f3" }}
        className="fade-in">
        <div style={styles.contactGrid}>
          {/* IMAGE */}
          <div style={styles.contactImageContainer}>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Real Estate Consultation"
              style={styles.contactImage}
            />
          </div>

          {/* TEXT */}
          <div style={styles.contactText}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: 20,
              }}>
              Contact J-Estates
            </h2>
            <p style={{ fontSize: "18px", color: "#333", lineHeight: 1.6 }}>
              Your next home is one message away. Get personalized
              recommendations, exclusive offers, and expert support.
            </p>

            <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: 20 }}>
              📞 0102 699 7368
            </p>
            <p style={{ color: "#555", marginBottom: 20 }}>
              Available 10 AM – 10 PM
            </p>

            <a
              href="https://wa.me/201026997368"
              target="_blank"
              rel="noreferrer"
              style={styles.whatsapp}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div>© {new Date().getFullYear()} J-Estates</div>
        <div style={{ marginTop: 6, opacity: 0.7 }}>
          Designed by Joe | Premium Real Estate Consultant
        </div>
      </footer>

      {/* ANIMATION CSS */}
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease-out;
          }
          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .unit-card:hover {
            transform: scale(1.03);
            transition: 0.3s;
          }
        `}
      </style>
    </div>
  );
}

/* ------------------ STYLES ------------------ */
const styles = {
  container: { width: "100%", fontFamily: "Arial, sans-serif" },

  hero: {
    textAlign: "center",
    padding: "120px 20px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  },
  logo: {
    fontSize: "50px",
    fontWeight: "bold",
    textShadow: "0 4px 10px rgba(0,0,0,0.6)",
  },
  heroTitle: {
    marginTop: "20px",
    fontSize: "36px",
    textShadow: "0 4px 6px rgba(0,0,0,0.4)",
  },
  heroText: {
    maxWidth: "600px",
    margin: "20px auto",
    opacity: 0.95,
    fontSize: "18px",
  },
  cta: {
    background: "#ffb800",
    padding: "12px 30px",
    border: "none",
    fontSize: "18px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  section: { padding: "70px 20px", textAlign: "center" },
  sectionTitle: { fontSize: "30px", marginBottom: "20px" },
  sectionText: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "17px",
    opacity: 0.85,
  },

  unitList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },
  unitCard: {
    width: "320px",
    padding: "15px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    textAlign: "center",
    transition: "0.3s",
  },
  unitImage: { width: "100%", borderRadius: "10px", marginBottom: "15px" },
  unitButton: {
    marginTop: "10px",
    background: "#000",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },

  contactGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  contactImageContainer: {
    flex: "1 1 300px",
    maxWidth: "500px",
    overflow: "hidden",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  contactImage: {
    width: "100%",
    borderRadius: "20px",
    transition: "transform 0.7s",
    objectFit: "cover",
  },
  contactText: { flex: "1 1 300px", maxWidth: "500px", textAlign: "left" },

  whatsapp: {
    display: "inline-block",
    background: "#25D366",
    color: "white",
    padding: "12px 25px",
    borderRadius: "10px",
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  footer: {
    background: "#000",
    color: "white",
    textAlign: "center",
    padding: "30px",
    marginTop: "40px",
    fontSize: "15px",
  },
};
