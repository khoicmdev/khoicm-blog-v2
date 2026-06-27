"use client";

const frameworks = [
  "Angular (Expert)", "React", "TypeScript", "NgRx", "Redux", "RxJS", "Signals",
];

const aiTools = [
  "Claude Code", "OpenAI API", "GitHub Copilot", "Agentic Workflows", "Prompt Engineering",
];

const archItems = [
  "Micro-frontends", "NX Monorepos", "Module Federation", "CI/CD Workflows",
];

function TechChip({ label, color }: { label: string; color: "primary" | "secondary" }) {
  const c = color === "primary" ? "#c2a4ff" : "#4edea3";
  return (
    <span
      style={{
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        background: `${c}1a`,
        border: `1px solid ${c}26`,
        color: c,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.75rem",
        fontWeight: 400,
      }}
    >
      {label}
    </span>
  );
}

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="scroll-margin"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#f5f5f5",
            marginBottom: "1rem",
          }}
        >
          Technical Stack
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#a3a3a3", maxWidth: "36rem", margin: "0 auto" }}>
          Modern technologies and methodologies used to deliver high-impact engineering results.
        </p>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="tech-grid">
        {/* Frameworks */}
        <div
          className="glass-card"
          style={{
            padding: "2rem",
            borderRadius: "0.75rem",
            borderTop: "2px solid #c2a4ff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2a4ff" strokeWidth="2">
              <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
              <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
            <h3 style={{ fontFamily: "'Geist', sans-serif", fontSize: "1.5rem", fontWeight: 600, color: "#f5f5f5" }}>
              Frameworks
            </h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {frameworks.map((f) => <TechChip key={f} label={f} color="primary" />)}
          </div>
        </div>

        {/* AI & Automation */}
        <div
          className="glass-card"
          style={{
            padding: "2rem",
            borderRadius: "0.75rem",
            borderTop: "2px solid #4edea3",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2">
              <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
            </svg>
            <h3 style={{ fontFamily: "'Geist', sans-serif", fontSize: "1.5rem", fontWeight: 600, color: "#f5f5f5" }}>
              AI & Automation
            </h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {aiTools.map((t) => <TechChip key={t} label={t} color="secondary" />)}
          </div>
        </div>

        {/* Architecture — full width */}
        <div
          className="glass-card tech-full"
          style={{
            padding: "2rem",
            borderRadius: "0.75rem",
            borderTop: "2px solid #c0c1ff",
            gridColumn: "span 2",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0c1ff" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            <h3 style={{ fontFamily: "'Geist', sans-serif", fontSize: "1.5rem", fontWeight: 600, color: "#f5f5f5" }}>
              Architecture & Tooling
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} className="arch-grid">
            {archItems.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.875rem",
                  color: "#a3a3a3",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: "#c0c1ff",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: 1fr !important; }
          .tech-full { grid-column: span 1 !important; }
          .arch-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
