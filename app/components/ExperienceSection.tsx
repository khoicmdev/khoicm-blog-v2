"use client";

const experiences = [
  {
    period: "APR 2021 - MAR 2026",
    company: "Anymind Group",
    role: "Senior Software Engineer (Full-time)",
    award: "GCPP Innovation Award",
    active: true,
    projectTitle: "AnyManager Platform",
    projectSubtitle: "Global B2B Growth & Monetization Platform (1,800+ B2B clients)",
    impact: [
      { label: "Workflow Transformation (AI)", text: "Spearheaded the transition to Spec-Driven Development (SDD), architecting an \"AI-ready\" codebase optimized for autonomous coding agents that increased sprint velocity by 45%" },
      { label: "Performance & Optimization", text: "Personally designed the BI analytics dashboard and data visualization engine using Highcharts and NgRx; implemented caching and lazy-loading that cut report latency from 5 minutes to sub-seconds" },
      { label: "AI Feature Innovation", text: "Directed frontend development for the multi-modal AI Assistant, engineering a complex data-streaming UI for real-time charts and tables to maximize self-service discoverability" },
      { label: "Modernization", text: "Owned the migration strategy from RxJS to Angular Signals, leveraging AI agents to reduce refactoring time by 60%." },
    ],
    responsibilities: [
      "Established and enforced modular component design standards across a large-scale ecosystem using Angular 21+, NgRx, and Tailwind CSS",
      "Partnered with Product Owners and Designers to translate high-level business logic into scalable technical specifications and PBIs",
      "Created an automated E2E testing culture via Playwright and Cypress, securing 95%+ unit test coverage and lowering regressions by 30%",
      "Maintained Node.js/TypeScript microservices for GraphQL/REST integrations, and managed CI/CD optimizations using GitHub Actions and Claude Code",
    ],
    tags: ["Angular", "TypeScript", "NgRx", "GraphQL", "Node.js"],
  },
  {
    period: "APR 2019 - APR 2021",
    company: "Rosen Group",
    role: "Frontend Developer (Full-time)",
    active: false,
    projects: [
      {
        name: "Project 4 & 5",
        items: [
          "Scaffolding and structuring front-end source code.",
          "Translate the wireframe design into web components using React with Typescript, Redux, Tailwind, and Material.",
          "Implement complex and build new UI components from scratch.",
          "Working with Websocket for some BE-specific feature (real-time notification and chat app).",
          "Writing unit test and E2E test (Jest/Cypress).",
        ],
      },
      {
        name: "Project 3",
        items: [
          "Scaffolding and structuring front-end source code.",
          "Translate wireframe design into web components using React.",
          "Working with the image upload and editing library.",
          "Research and apply state management (Redux).",
        ],
      },
    ],
  },
  {
    period: "MAY 2017 - APR 2019",
    company: "Rosen Group",
    role: "Frontend Developer (Part-time)",
    active: false,
    dimmed: true,
    projects: [
      {
        name: "Certivation Phase 2",
        items: [
          "Translate UI/UX design into web components using HTML/SCSS/Typescript and Angular Material.",
          "Writing documents on front-end architecture.",
          "Writing unit test and E2E test (Jasmine/Protractor).",
        ],
      },
      {
        name: "Project 1",
        items: [
          "Implementing visual UI using HTML/CSS and logical events in a web application.",
          "Research, learn, and practice the Angular/React framework.",
        ],
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-margin"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#f5f5f5",
          }}
        >
          Work Experience
        </h2>
        <div style={{ height: "4px", width: "5rem", backgroundColor: "#c2a4ff", marginTop: "1rem" }} />
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          paddingLeft: "3rem",
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "1.5rem",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(194, 164, 255, 0.15)",
          }}
        />

        {experiences.map((exp, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-1.85rem",
                top: "0.375rem",
                width: "0.75rem",
                height: "0.75rem",
                borderRadius: "9999px",
                backgroundColor: exp.active ? "#c2a4ff" : "#404040",
                outline: "4px solid #0A0A0A",
                zIndex: 10,
                opacity: exp.dimmed ? 0.5 : 1,
              }}
            />

            {/* Content grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "4fr 8fr",
                gap: "2rem",
                opacity: exp.dimmed ? 0.8 : 1,
              }}
              className="exp-grid"
            >
              {/* Left: meta */}
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8125rem",
                    color: exp.active ? "#c2a4ff" : "#a3a3a3",
                    letterSpacing: "0.08em",
                    marginBottom: "0.5rem",
                    opacity: exp.dimmed ? 0.6 : 1,
                  }}
                >
                  {exp.period}
                </span>
                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#f5f5f5",
                    marginBottom: "0.25rem",
                    opacity: exp.dimmed ? 0.8 : 1,
                  }}
                >
                  {exp.company}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "#a3a3a3",
                    marginBottom: "1rem",
                    opacity: exp.dimmed ? 0.6 : 1,
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
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      background: "rgba(78, 222, 163, 0.08)",
                      border: "1px solid rgba(78, 222, 163, 0.2)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#4edea3">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#4edea3",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.award}
                    </span>
                  </div>
                )}
              </div>

              {/* Right: details */}
              <div>
                {/* AnyMind-specific rich content */}
                {exp.projectTitle && (
                  <div
                    className="glass-card"
                    style={{
                      padding: "1.5rem",
                      borderRadius: "0.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "#c2a4ff",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {exp.projectTitle}
                      </h4>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#a3a3a3", fontStyle: "italic" }}>
                        {exp.projectSubtitle}
                      </p>
                    </div>

                    {/* Impact */}
                    <div
                      style={{
                        padding: "1.5rem",
                        borderRadius: "0.75rem",
                        backgroundColor: "rgba(20, 20, 20, 0.9)",
                        border: "1px solid rgba(194, 164, 255, 0.2)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c2a4ff" strokeWidth="2">
                          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                          <line x1="6" y1="20" x2="6" y2="14"/>
                        </svg>
                        <h5
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#f5f5f5",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Technical Ownership & Business Impact
                        </h5>
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {exp.impact?.map((item) => (
                          <li
                            key={item.label}
                            style={{
                              display: "flex",
                              gap: "0.5rem",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.875rem",
                              color: "#a3a3a3",
                            }}
                          >
                            <span style={{ color: "#c2a4ff", flexShrink: 0 }}>•</span>
                            <span>
                              <strong style={{ color: "#f5f5f5" }}>{item.label}:</strong> {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div
                      style={{
                        padding: "1.5rem",
                        borderRadius: "0.75rem",
                        backgroundColor: "rgba(14, 14, 14, 0.8)",
                        border: "1px solid rgba(64, 64, 64, 0.3)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2">
                          <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                        </svg>
                        <h5
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#f5f5f5",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Engineering Responsibilities
                        </h5>
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {exp.responsibilities?.map((r) => (
                          <li
                            key={r}
                            style={{
                              display: "flex",
                              gap: "0.5rem",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.875rem",
                              color: "#a3a3a3",
                            }}
                          >
                            <span style={{ color: "#c2a4ff", flexShrink: 0 }}>•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    {exp.tags && (
                      <div
                        style={{
                          paddingTop: "1rem",
                          borderTop: "1px solid #404040",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "0.25rem 0.5rem",
                              backgroundColor: "#171717",
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.75rem",
                              color: "#a3a3a3",
                              borderRadius: "0.25rem",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Rosen-style project list */}
                {exp.projects && (
                  <div
                    className="glass-card"
                    style={{
                      padding: "1.5rem",
                      borderRadius: "0.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    {exp.projects.map((proj) => (
                      <div key={proj.name}>
                        <h4 style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, color: "#f5f5f5", marginBottom: "0.75rem" }}>
                          {proj.name}
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          {proj.items.map((item) => (
                            <li
                              key={item}
                              style={{
                                display: "flex",
                                gap: "0.5rem",
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.875rem",
                                color: "#a3a3a3",
                              }}
                            >
                              <span style={{ color: "#c2a4ff", flexShrink: 0 }}>•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
