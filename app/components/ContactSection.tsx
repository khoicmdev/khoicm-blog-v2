"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-margin"
      style={{ padding: "8rem 0" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: "5rem 2rem",
            borderRadius: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative Icon */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              padding: "2rem",
              opacity: 0.07,
              color: "#89ceff",
            }}
          >
            <svg
              width="160"
              height="160"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>

          {/* Content */}
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#dae2fd",
              marginBottom: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            Let's build something{" "}
            <span style={{ color: "#89ceff" }}>extraordinary</span> together.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "#bec8d2",
              maxWidth: "36rem",
              margin: "0 auto 2.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            Seeking a Senior Engineer to lead your next architectural challenge?
            I'm currently open to selective consulting and leadership
            opportunities.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href="mailto:hello@khoicm.dev"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.25rem 2.5rem",
                backgroundColor: "#89ceff",
                color: "#00344d",
                fontFamily: "'Geist', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(137, 206, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              hello@khoicm.dev
            </a>

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.25rem 2.5rem",
                backgroundColor: "transparent",
                color: "#dae2fd",
                fontFamily: "'Geist', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "0.5rem",
                border: "1px solid rgba(62, 72, 80, 0.8)",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(34, 42, 61, 0.8)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(137, 206, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62, 72, 80, 0.8)";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
