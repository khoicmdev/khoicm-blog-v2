"use client";

const projects = [
  {
    title: "AnyManager",
    desc: "Global B2B Growth & Monetization Platform(1,800+ B2B clients)",
    badge: "Data Viz",
    badgeColor: "#c2a4ff",
    badgeText: "#1b003a",
    hoverColor: "#c2a4ff",
    image: "/anymanager.webp",
    url: "https://anymanager.io",
  },
  {
    title: "CERTivation",
    desc: "Blockchain-based product certification solution to enhancing trust, increasing efficiency and improving your image.",
    badge: "Blockchain",
    badgeColor: "#4edea3",
    badgeText: "#003824",
    hoverColor: "#4edea3",
    image: "/certivation.png",
    url: "https://www.certivation.com/",
  }
];

function ProjectCard({ title, desc, badge, badgeColor, badgeText, hoverColor, image, url }: (typeof projects)[0]) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{
        cursor: "pointer",
        textDecoration: "none",
        display: "block",
        "--hover-col": hoverColor,
      } as React.CSSProperties}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "16rem",
          width: "100%",
          borderRadius: "0.75rem",
          overflow: "hidden",
          marginBottom: "1.5rem",
          background: "rgba(23, 23, 23, 0.9)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            transition: "transform 0.5s ease",
          }}
          className="project-img"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)",
          }}
        />
        <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
          <span
            style={{
              padding: "0.25rem 0.5rem",
              backgroundColor: badgeColor,
              color: badgeText,
              fontSize: "0.625rem",
              fontWeight: 700,
              fontFamily: "'Geist', sans-serif",
              borderRadius: "0.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {badge}
          </span>
        </div>
      </div>

      <h3
        className="project-title"
        style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#f5f5f5",
          marginBottom: "0.5rem",
          transition: "color 0.2s ease",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9375rem",
          lineHeight: 1.6,
          color: "#a3a3a3",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {desc}
      </p>

      <style>{`
        .project-card:hover .project-img { transform: scale(1.05); }
        .project-card:hover .project-title { color: var(--hover-col); }
      `}</style>
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="showcase"
      className="scroll-margin"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#f5f5f5",
            }}
          >
            Project Showcase
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#a3a3a3", marginTop: "0.5rem" }}>
            A glimpse into high-performance architectures and AI integrations.
          </p>
        </div>
        {projects.length > 3 ? <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "'Geist', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "#c2a4ff",
            textDecoration: "none",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateX(4px)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateX(0)")}
        >
          Explore all projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a> : <></>}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
        className="proj-grid"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
