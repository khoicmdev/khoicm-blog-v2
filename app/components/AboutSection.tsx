"use client";

const s = {
  section: {
    padding: "8rem 0",
    maxWidth: "1200px",
    margin: "0 auto",
  } as React.CSSProperties,
  sectionInner: {
    padding: "0 1.5rem",
  } as React.CSSProperties,
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "4rem",
    alignItems: "center",
  } as React.CSSProperties,
};

export default function AboutSection() {
  return (
    <section id="about" style={s.section} className="scroll-margin">
      <div style={s.sectionInner}>
        <div style={s.grid}>
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div
              className="glass-card"
              style={{
                aspectRatio: "1/1",
                borderRadius: "1rem",
                overflow: "hidden",
                padding: "0.5rem",
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqgIdAQ60gMmdLUOpVlOwi_d2hy13l6rJwrbrHNYKbblaAuVEeAccUrqYD7Xz4vNbNbBRqkubw7AQGfeY0TfciUN4LmcZHr88vLa0BkTbgnQQ018C0Tmq8uPKsfgYGkgLigOmBbIWTVnXQrcDzkMk2JpiBnAHbs9hSIaO52zEDamzbn7IHmp-H1JECZa7ivAp7vCz6ay9AXzP8fk6L75SVf2Mt2N854nkWMSmem7Guu-6SEeO6fMKk6r94o89cQKnxb4E"
                alt="Khoi CM — Senior Frontend Engineer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                }}
              />
            </div>
            {/* Experience Badge */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                padding: "1.5rem",
                borderRadius: "0.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "#4edea3",
                  lineHeight: 1,
                }}
              >
                8+
              </div>
              <div
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#bec8d2",
                  marginTop: "0.25rem",
                }}
              >
                Years Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "2rem",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "#dae2fd",
                marginBottom: "1.5rem",
              }}
            >
              Mastering the Art of{" "}
              <span style={{ color: "#89ceff" }}>Interface Engineering</span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#bec8d2",
              }}
            >
              <p>
                With over eight years in the industry, I have evolved from a
                passionate developer into a Senior Frontend Architect. My
                journey has been defined by a relentless pursuit of performance
                and the seamless integration of AI-assisted development cycles
                into production-grade environments.
              </p>
              <p>
                Currently focused on modernizing complex enterprise ecosystems,
                I specialize in building scalable design systems and AI-powered
                interfaces that don't just solve problems but elevate the user
                experience to new architectural heights.
              </p>
              <div
                style={{
                  paddingTop: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  borderTop: "1px solid rgba(62, 72, 80, 0.6)",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#89ceff",
                      fontWeight: 700,
                      fontFamily: "'Geist', sans-serif",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Focus
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8125rem",
                      color: "#bec8d2",
                    }}
                  >
                    AI Modernization
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#89ceff",
                      fontWeight: 700,
                      fontFamily: "'Geist', sans-serif",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Location
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8125rem",
                      color: "#bec8d2",
                    }}
                  >
                    Global / Remote
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
