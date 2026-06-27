"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        overflow: "hidden",
      }}
    >

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              border: "1px solid rgba(137, 206, 255, 0.3)",
              background: "rgba(10, 10, 10, 0.6)",
              backdropFilter: "blur(12px)",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: "#4edea3",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8125rem",
                color: "#c2a4ff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Senior Frontend Engineer
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f5f5f5",
              marginBottom: "1.5rem",
            }}
          >
            {"Hi! I'm "}
            <span style={{ color: "#c2a4ff" }}>Cao Minh Khôi</span>
            <br />
            <span style={{ fontSize: "2rem", fontStyle: "italic" }}>{"Your Friendly Frontend Engineer"}</span>
          </h1>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="#experience"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#c2a4ff",
                color: "#1b003a",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 8px 25px rgba(194, 164, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              View Experience
            </a>
            <a
              href="#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(10, 10, 10, 0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(64, 64, 64, 0.8)",
                color: "#f5f5f5",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(38, 38, 38, 0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(10, 10, 10, 0.4)";
              }}
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div style={{ position: "relative" }} className="hero-portrait">
          {/* Glow border */}
          <div
            style={{
              position: "absolute",
              inset: "-4px",
              background: "linear-gradient(135deg, #c2a4ff, #4edea3)",
              borderRadius: "1.25rem",
              filter: "blur(8px)",
              opacity: 0.2,
              transition: "opacity 0.5s ease",
            }}
          />
          <div
            className="glass-card"
            style={{
              position: "relative",
              padding: "0.5rem",
              borderRadius: "1.25rem",
              overflow: "hidden",
              aspectRatio: "3/4",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "0.85rem", overflow: "hidden" }}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCyzN5YKzH-O5mPCYSpnxyQKxGYNPxQzZNApDz7x7_96NGzm4GuD0NUBVPaXH9OOubA7PADp2L5XTtUsEMaSYeJgnWO7hMs-O2uvyEtImT8mGojx9v1TtZG0cbQrQBAP5zadELAY144aSvxxS-igaO-dV0Q7P1vUzPOzFHnh1XD_JJQhOjV3e2cTcRdXI57gWO2eqHKUEJy6DYsOqGwPPplWXVwdIRBAXYSl5f-EDwEPp1eYOoPLOVMYWsb-LF9kTu66c"
                alt="Cao Minh Khoi Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Core Stack card */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.5rem",
                    background: "rgba(194, 164, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c2a4ff",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  &gt;_
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#f5f5f5", fontSize: "0.875rem", margin: 0 }}>
                    Ho Chi Minh City
                  </h4>
                  <p style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#a3a3a3", margin: 0 }}>
                    Enterprise Ready
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  marginTop: "0.75rem",
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", color: "#4edea3" }}>Remote</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", color: "#4edea3" }}>Hybrid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-portrait {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
