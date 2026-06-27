"use client";

export default function AboutSection() {
  const expertise = [
    "Frontend Architecture & System Design",
    "Analytics & Data Visualization",
    "AI-Powered Product Development",
  ];
  const leadership = [
    "Technical Leadership & Mentoring",
    "Performance Optimization",
    "AI-Assisted Development Workflows",
  ];

  return (
    <section
      id="about"
      className="scroll-margin"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 8fr",
          gap: "3rem",
          alignItems: "flex-start",
        }}
        className="about-grid"
      >
        {/* Left: Sticky sidebar */}
        <div className="sticky-sidebar">
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
            About Me
          </h2>
          <div
            style={{
              height: "4px",
              width: "5rem",
              backgroundColor: "#c2a4ff",
              marginBottom: "2rem",
            }}
          />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#a3a3a3",
              marginBottom: "1.5rem",
            }}
          >
            I am a Senior Frontend Engineer with 8+ years of experience
            building scalable web applications and analytics platforms.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#171717",
              border: "1px solid #404040",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4edea3" style={{ flexShrink: 0 }}>
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4edea3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#f5f5f5", margin: 0 }}>
                8+ Years Experience
              </p>
              <p style={{ fontSize: "0.75rem", color: "#a3a3a3", margin: 0 }}>
                Global Enterprise Projects
              </p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Quote card */}
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              borderRadius: "0.75rem",
              borderLeft: "4px solid #c2a4ff",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                lineHeight: 1.6,
                color: "#f5f5f5",
              }}
            >
              Recently, I&apos;ve focused on AI-assisted software development and
              LLM-powered applications. By leveraging tools like Claude Code,
              OpenAI APIs, and GitHub Copilot, I accelerate delivery and build
              intelligent product experiences that solve real-world problems.
            </p>
          </div>

          {/* Two columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="about-cols"
          >
            {/* Core Expertise */}
            <div>
              <h3
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#c2a4ff",
                  marginBottom: "1rem",
                }}
              >
                Core Expertise
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {expertise.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "#a3a3a3",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership */}
            <div>
              <h3
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#c2a4ff",
                  marginBottom: "1rem",
                }}
              >
                Leadership
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {leadership.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "#a3a3a3",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
