"use client";

export default function EducationSection() {
  return (
    <section
      style={{
        padding: "8rem 0",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Academic */}
        <div>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#dae2fd",
              marginBottom: "2rem",
            }}
          >
            Academic Foundation
          </h2>
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              borderLeft: "4px solid #89ceff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#dae2fd",
                    marginBottom: "0.25rem",
                  }}
                >
                  University of Information Technology
                </h3>
                <p style={{ color: "#bec8d2", fontFamily: "'Inter', sans-serif" }}>
                  B.S. in Software Engineering
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8125rem",
                  color: "#89ceff",
                  whiteSpace: "nowrap",
                }}
              >
                2014 — 2018
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#bec8d2",
              }}
            >
              Specialized in Advanced Algorithms and Distributed Systems.
              Graduated with high honors.
            </p>
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#dae2fd",
              marginBottom: "2rem",
            }}
          >
            Selected Publications
          </h2>
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              borderLeft: "4px solid #4edea3",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#dae2fd",
                    marginBottom: "0.25rem",
                  }}
                >
                  IEEE Xplore Digital Library
                </h3>
                <p style={{ color: "#bec8d2", fontFamily: "'Inter', sans-serif" }}>
                  Lead Research Author
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8125rem",
                  color: "#4edea3",
                }}
              >
                2017
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#bec8d2",
                marginBottom: "1.5rem",
              }}
            >
              Published research on "Optimized Network Protocols for
              Low-Latency Industrial IoT Systems."
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#4edea3",
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.75")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Read Publication
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
