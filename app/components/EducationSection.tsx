"use client";

import Image from "next/image";

export default function EducationSection() {
  return (
    <section
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto 8rem",
        backgroundColor: "rgba(18, 18, 18, 0.3)",
        borderRadius: "1.5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
        }}
        className="edu-grid"
      >
        {/* Education */}
        <div>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#f5f5f5",
              marginBottom: "2rem",
            }}
          >
            Education
          </h2>
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              borderRadius: "0.75rem",
              borderLeft: "4px solid #c0c1ff",
            }}
          >
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }} className="edu-header">
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  flexShrink: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "0.5rem",
                  padding: "0.375rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/uit-logo.png"
                  alt="UIT Logo"
                  width={36}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem",
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
                        color: "#f5f5f5",
                        margin: 0,
                      }}
                    >
                      University of Information Technology - VNU
                    </h3>
                    <p
                      style={{
                        color: "#c2a4ff",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        marginTop: "0.25rem",
                        margin: 0,
                      }}
                    >
                      Major: Computer Network and Communication
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8125rem",
                      color: "#a3a3a3",
                      whiteSpace: "nowrap",
                    }}
                  >
                    2014 - 2019
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.25rem",
                      backgroundColor: "rgba(192, 193, 255, 0.1)",
                      color: "#c0c1ff",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      border: "1px solid rgba(192, 193, 255, 0.2)",
                    }}
                  >
                    GPA: 8.62 / 10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#f5f5f5",
              marginBottom: "2rem",
            }}
          >
            Achievements
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* IEEE */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(78, 222, 163, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4edea3",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                📄
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "#f5f5f5", fontSize: "1rem", margin: 0 }}>
                  IEEE Publication
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#a3a3a3", margin: "0.25rem 0 0" }}>
                  Votereum: An Ethereum-Based E-Voting System (2019)
                </p>
              </div>
            </div>

            {/* Scholarship */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(194, 164, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c2a4ff",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                🎓
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "#f5f5f5", fontSize: "1rem", margin: 0 }}>
                  Encouraging Scholarships
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#a3a3a3", margin: "0.25rem 0 0" }}>
                  Annual academic excellence at University of Information Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .edu-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 640px) {
          .edu-header { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
