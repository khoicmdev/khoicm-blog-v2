"use client";

import { useEffect, useRef, useState } from "react";

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
        name: "Certivation",
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

const getDisplayYear = (period: string, idx: number) => {
  if (idx === 0) return "2026";
  const parts = period.split(" - ");
  if (parts.length > 1) {
    return parts[1].split(" ").pop() || "";
  }
  return period.split(" ").pop() || "";
};

export default function ExperienceSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.7;
      const end = windowHeight * 0.3;
      const elementHeight = rect.height;

      const totalDist = elementHeight + start - end;
      const scrolledDist = start - rect.top;

      let progress = scrolledDist / totalDist;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="career-section scroll-margin"
    >
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          {/* Animated vertical timeline bar */}
          <div
            className="career-timeline"
            style={{
              maxHeight: `${scrollProgress * 100}%`,
              opacity: scrollProgress > 0.02 ? 1 : 0,
              transition: "opacity 0.2s ease"
            }}
          >
            <div className="career-dot" />
          </div>

          {experiences.map((exp, index) => {
            const isHovered = hoveredIdx === index;
            const isAnyHovered = hoveredIdx !== null;
            const opacity = isAnyHovered ? (isHovered ? 1 : 0.2) : 1;

            return (
              <div
                key={index}
                className="career-info-box"
                style={{ opacity }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Left side: Role info and Year */}
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{exp.role.replace(" (Full-time)", "").replace(" (Part-time)", "")}</h4>
                    <h5>{exp.company}</h5>
                    <span className="career-period-sub">{exp.period}</span>

                    {exp.award && (
                      <a
                        href="https://advertisingvietnam.com/article/anymind-group-s-anymanager-is-awarded-the-innovation-award-by-the-google-certified-publishing-partner-program-p18369"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.4rem 0.8rem",
                          borderRadius: "0.5rem",
                          background: "rgba(194, 164, 255, 0.08)",
                          border: "1px solid rgba(194, 164, 255, 0.2)",
                          marginTop: "0.75rem",
                          textDecoration: "none",
                          cursor: "pointer",
                          transition: "background 0.2s ease, border-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(194, 164, 255, 0.16)";
                          e.currentTarget.style.borderColor = "rgba(194, 164, 255, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(194, 164, 255, 0.08)";
                          e.currentTarget.style.borderColor = "rgba(194, 164, 255, 0.2)";
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#c2a4ff">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "#c2a4ff",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {exp.award}
                        </span>
                      </a>
                    )}
                  </div>
                  <h3>{getDisplayYear(exp.period, index)}</h3>
                </div>

                {/* Right side: Detailed Work Experience */}
                <div className="career-details">
                  {/* AnyMind Group Platform details */}
                  {exp.projectTitle && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                      <div>
                        <h6
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#c2a4ff",
                            marginBottom: "0.25rem",
                            margin: 0
                          }}
                        >
                          {exp.projectTitle}
                        </h6>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#a3a3a3", fontStyle: "italic", margin: 0, marginTop: "0.25rem" }}>
                          {exp.projectSubtitle}
                        </p>
                      </div>

                      {/* Business Impact */}
                      <div
                        style={{
                          padding: "1.25rem",
                          borderRadius: "0.75rem",
                          backgroundColor: "rgba(20, 20, 20, 0.5)",
                          border: "1px solid rgba(194, 164, 255, 0.15)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c2a4ff" strokeWidth="2.5">
                            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                          </svg>
                          <h6
                            style={{
                              fontFamily: "'Geist', sans-serif",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              color: "#ffffff",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              margin: 0
                            }}
                          >
                            Technical Ownership & Impact
                          </h6>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                          {exp.impact?.map((item) => (
                            <li
                              key={item.label}
                              style={{
                                display: "flex",
                                gap: "0.5rem",
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.85rem",
                                color: "#a3a3a3",
                                lineHeight: "1.4"
                              }}
                            >
                              <span style={{ color: "#c2a4ff", flexShrink: 0 }}>•</span>
                              <span>
                                <strong style={{ color: "#ffffff" }}>{item.label}:</strong> {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Engineering Responsibilities */}
                      <div
                        style={{
                          padding: "1.25rem",
                          borderRadius: "0.75rem",
                          backgroundColor: "rgba(14, 14, 14, 0.4)",
                          border: "1px solid rgba(64, 64, 64, 0.2)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                          </svg>
                          <h6
                            style={{
                              fontFamily: "'Geist', sans-serif",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              color: "#ffffff",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              margin: 0
                            }}
                          >
                            Responsibilities
                          </h6>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                          {exp.responsibilities?.map((r) => (
                            <li
                              key={r}
                              style={{
                                display: "flex",
                                gap: "0.5rem",
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.85rem",
                                color: "#a3a3a3",
                                lineHeight: "1.4"
                              }}
                            >
                              <span style={{ color: "#c2a4ff", flexShrink: 0 }}>•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      {exp.tags && (
                        <div
                          style={{
                            paddingTop: "0.75rem",
                            borderTop: "1px solid rgba(64, 64, 64, 0.3)",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                          }}
                        >
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                padding: "0.2rem 0.5rem",
                                backgroundColor: "rgba(194, 164, 255, 0.05)",
                                border: "1px solid rgba(194, 164, 255, 0.15)",
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.7rem",
                                color: "#c2a4ff",
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

                  {/* Rosen-style project lists */}
                  {exp.projects && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                      {exp.projects.map((proj) => (
                        <div
                          key={proj.name}
                          style={{
                            padding: "1.25rem",
                            borderRadius: "0.75rem",
                            backgroundColor: "rgba(10, 10, 10, 0.3)",
                            border: "1px solid rgba(64, 64, 64, 0.2)",
                          }}
                        >
                          <h6
                            style={{
                              fontFamily: "'Geist', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.95rem",
                              color: "#ffffff",
                              marginBottom: "0.75rem",
                              margin: 0
                            }}
                          >
                            {proj.name}
                          </h6>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.5rem" }}>
                            {proj.items.map((item) => (
                              <li
                                key={item}
                                style={{
                                  display: "flex",
                                  gap: "0.5rem",
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "0.85rem",
                                  color: "#a3a3a3",
                                  lineHeight: "1.4"
                                }}
                              >
                                <span style={{ color: "#c2a4ff", flexShrink: 0 }}>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .career-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          place-items: center;
          justify-content: center;
          position: relative;
          opacity: 1;
          height: auto;
          margin: auto;
          margin-bottom: 120px;
          padding: 120px 1.5rem;
          max-width: 1400px;
        }

        .career-container {
          width: 100%;
        }

        .career-section h2 {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          font-weight: 400;
          text-align: center;
          background: linear-gradient(0deg, #c2a4ff, #ffffff);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          margin-top: 20px;
          margin-bottom: 80px;
          text-transform: capitalize;
        }

        .career-section h2 > span {
          font-family: "Geist", sans-serif;
          font-weight: 300;
          color: #c2a4ff;
        }

        .career-info {
          position: relative;
          display: flex;
          flex-direction: column;
          margin: 0px auto;
          width: 100%;
          gap: 60px;
        }

        .career-info-box {
          display: flex;
          justify-content: space-between;
          transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .career-details {
          width: 45%;
          margin: 0;
        }

        .career-info-in {
          display: flex;
          width: 45%;
          justify-content: space-between;
          gap: 40px;
        }

        .career-info h3 {
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          margin: 0;
          font-weight: 800;
          line-height: 1;
          color: #ffffff;
          font-family: "'Geist', sans-serif";
          letter-spacing: -0.02em;
        }

        .career-role {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .career-info h4 {
          font-size: clamp(1.25rem, 2.5vw, 1.8rem);
          line-height: 1.2;
          font-weight: 700;
          margin: 0;
          color: #ffffff;
          font-family: "'Geist', sans-serif";
          letter-spacing: -0.01em;
        }

        .career-info h5 {
          font-weight: 500;
          font-size: clamp(0.95rem, 1.8vw, 1.2rem);
          margin: 6px 0px;
          color: #c2a4ff;
          font-family: "'Geist', sans-serif";
        }

        .career-period-sub {
          font-family: "'JetBrains Mono', monospace";
          font-size: 0.75rem;
          color: #a3a3a3;
          letter-spacing: 0.05em;
          margin-top: 2px;
        }

        .career-timeline {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background-image: linear-gradient(to top,
              #c2a4ff 20%,
              rgba(194, 164, 255, 0.4) 50%,
              transparent 98%);
          max-height: 0%;
        }

        .career-dot {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          background-color: #c2a4ff;
          width: 8px;
          height: 8px;
          border-radius: 50px;
          box-shadow: 0px 0px 6px 2px #c2a4ff, 
                      0px 0px 18px 8px rgba(194, 164, 255, 0.6),
                      0px 0px 80px 20px rgba(194, 164, 255, 0.4);
          animation: timelinePulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes timelinePulse {
          0%, 100% {
            box-shadow: 0px 0px 6px 2px #c2a4ff, 
                        0px 0px 18px 6px rgba(194, 164, 255, 0.5),
                        0px 0px 60px 15px rgba(194, 164, 255, 0.3);
          }
          50% {
            box-shadow: 0px 0px 4px 1px #c2a4ff, 
                        0px 0px 10px 3px rgba(194, 164, 255, 0.3),
                        0px 0px 30px 8px rgba(194, 164, 255, 0.15);
          }
        }

        @media only screen and (max-width: 900px) {
          .career-section {
            padding: 80px 1.5rem;
            margin-bottom: 40px;
          }
          
          .career-section h2 {
            margin-bottom: 50px;
          }

          .career-info-box {
            flex-direction: column;
            gap: 15px;
            margin-bottom: 20px;
          }

          .career-info-in,
          .career-details {
            width: 100%;
            padding-left: 2rem;
            box-sizing: border-box;
          }

          .career-info-in {
            justify-content: space-between;
            gap: 20px;
          }

          .career-timeline {
            left: 0%;
          }
        }
      `}</style>
    </section>
  );
}
