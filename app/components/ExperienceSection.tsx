"use client";

const experiences = [
  {
    period: "2021 — PRESENT",
    company: "AnyMind Group",
    role: "Senior Frontend Engineer",
    award: "GCPP Innovation Award Winner",
    bullets: [
      "Led the modernization of the AnyManager platform, impacting thousands of publishers worldwide.",
      "Orchestrated the transition to a micro-frontend architecture, reducing bundle sizes by 35%.",
      "Established internal UI library standards that improved developer velocity by 2×.",
    ],
  },
  {
    period: "2018 — 2021",
    company: "Rosen Group",
    role: "Software Engineer",
    bullets: [
      "Developed high-precision data visualization tools for engineering diagnostics.",
      "Optimized real-time data processing nodes using specialized JavaScript worker threads.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-margin"
      style={{
        padding: "8rem 0",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ padding: "0 1.5rem" }}>
        <h2
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#dae2fd",
            marginBottom: "3rem",
          }}
        >
          Professional Journey
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "1rem",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "2rem",
              }}
            >
              {/* Left: Meta */}
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8125rem",
                    color: "#89ceff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {exp.period}
                </div>
                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#dae2fd",
                    marginBottom: "0.25rem",
                  }}
                >
                  {exp.company}
                </h3>
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#bec8d2",
                    fontStyle: "italic",
                    marginBottom: "1rem",
                  }}
                >
                  {exp.role}
                </p>
                {exp.award && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.25rem 0.75rem",
                      background: "rgba(78, 222, 163, 0.08)",
                      color: "#4edea3",
                      border: "1px solid rgba(78, 222, 163, 0.2)",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "'Geist', sans-serif",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {exp.award}
                  </div>
                )}
              </div>

              {/* Right: Bullets */}
              <div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "#bec8d2",
                      }}
                    >
                      <span style={{ color: "#89ceff", marginTop: "0.375rem", flexShrink: 0 }}>•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .glass-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
