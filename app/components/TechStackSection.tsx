"use client";

const frameworks = [
  "React & Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Three.js",
  "WebGL",
  "Framer Motion",
];

const aiItems = [
  "LLM Integration",
  "Prompt Engineering",
  "CI/CD Pipelines",
  "Vercel AI SDK",
];

const archItems = [
  "Micro-frontends",
  "Design Systems",
  "State Management (Zustand)",
];

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: "0.5rem 1rem",
        background: "rgba(137, 206, 255, 0.05)",
        border: "1px solid rgba(137, 206, 255, 0.2)",
        color: "#89ceff",
        borderRadius: "9999px",
        fontFamily: "'Geist', sans-serif",
        fontSize: "0.875rem",
        fontWeight: 500,
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </span>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem",
        color: "#bec8d2",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4edea3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      {label}
    </li>
  );
}

export default function TechStackSection() {
  return (
    <section
      style={{
        padding: "8rem 0",
        backgroundColor: "#0A0A0A",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#dae2fd",
              marginBottom: "1rem",
            }}
          >
            Core Expertise &amp; Technical Stack
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#bec8d2",
              maxWidth: "36rem",
              margin: "0 auto",
            }}
          >
            A modular approach to modern engineering, leveraging the best of
            contemporary frameworks and emerging AI technologies.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="tech-bento"
        >
          {/* Frameworks — span 2 */}
          <div
            className="glass-card"
            style={{
              gridColumn: "span 2",
              padding: "2rem",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    padding: "0.75rem",
                    background: "rgba(137, 206, 255, 0.1)",
                    borderRadius: "0.5rem",
                    color: "#89ceff",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                </span>
                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#dae2fd",
                  }}
                >
                  Frontend Frameworks
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {frameworks.map((f) => (
                  <Chip key={f} label={f} />
                ))}
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#bec8d2",
                fontStyle: "italic",
              }}
            >
              "Crafting responsive, high-performance interfaces that scale
              seamlessly across device ecosystems."
            </p>
          </div>

          {/* AI & Automation */}
          <div
            className="glass-card"
            style={{ padding: "2rem", borderRadius: "1rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  padding: "0.75rem",
                  background: "rgba(78, 222, 163, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#4edea3",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                </svg>
              </span>
              <h3
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#dae2fd",
                }}
              >
                AI &amp; Automation
              </h3>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
              {aiItems.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div
            className="glass-card"
            style={{ padding: "2rem", borderRadius: "1rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  padding: "0.75rem",
                  background: "rgba(137, 206, 255, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#89ceff",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </span>
              <h3
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#dae2fd",
                }}
              >
                Architecture
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {archItems.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "0.75rem",
                    background: "#1E293B",
                    borderRadius: "0.5rem",
                    border: "1px solid rgba(62, 72, 80, 0.6)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#bec8d2",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Excellence — span 2 */}
          <div
            className="glass-card"
            style={{
              gridColumn: "span 2",
              padding: "2rem",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#dae2fd",
                  marginBottom: "0.5rem",
                }}
              >
                Engineering Excellence
              </h3>
              <p style={{ color: "#bec8d2", maxWidth: "28rem", fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}>
                Focused on performance metrics: 95+ Core Web Vitals and
                sub-100ms interaction latency.
              </p>
            </div>
            <div style={{ display: "flex", gap: "2rem", position: "relative", zIndex: 1 }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#4edea3",
                  }}
                >
                  40%
                </div>
                <div style={{ fontSize: "0.625rem", textTransform: "uppercase", color: "#bec8d2", fontFamily: "'Geist', sans-serif", letterSpacing: "0.05em" }}>
                  CI/CD Speedup
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#89ceff",
                  }}
                >
                  1.2s
                </div>
                <div style={{ fontSize: "0.625rem", textTransform: "uppercase", color: "#bec8d2", fontFamily: "'Geist', sans-serif", letterSpacing: "0.05em" }}>
                  FCP Avg.
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div style={{ position: "absolute", right: "-2rem", bottom: "-2rem", opacity: 0.06 }}>
              <svg width="200" height="200" viewBox="0 0 24 24" fill="#89ceff">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-bento {
            grid-template-columns: 1fr !important;
          }
          .tech-bento > *[style*="span 2"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
