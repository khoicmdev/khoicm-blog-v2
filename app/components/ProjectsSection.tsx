"use client";

const projects = [
  {
    title: "AnyManager",
    description:
      "Flagship publisher platform processing billions of requests daily with sub-millisecond precision.",
    tags: ["React", "Go", "PostgreSQL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBry3IxK3gBr-SNCEihaQpypCmRkD7i8WgovaZeT7mtXgczEyusuU3QQQ8BHE5DfRINgCmdX2ZkUETbpyyFyx3Ld_apiaZyon_hm-sLYYC1uiUMWjbvv5Xvw6UhDXRLe-NhxqJluzMQrnZ3rMbsFF62mLmPqVM1Vt2VvAqb1M-b_vSZ0Ss4SFk1lCA9-dCutXLvwccLBoVbSd6hcxSZ_ATj1eaYwY_R9C9zztRIeIWLcBCjFk52VRb_6w",
    link: "#",
  },
  {
    title: "AI Multi-Modal Interface",
    description:
      "A seamless interface for interacting with diverse LLMs, featuring real-time context streaming.",
    tags: ["Next.js", "OpenAI SDK", "Vercel"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCseOCEntlk9Xiio0eCHlW9l4MvXr2TMkBlxSoe3gaaH56ZVldy1rWaoanXsjbmBMf6rJ4GHyP_8X_FBNGIZyqMndmoTACDEv8EiKzoXqj76FoUY6UdMi1hXFkojWAwbfdASI0_AVWR4I2fyl7z3k5wKYvmPyCegjYVBXHa8hvPNdRq7iOzaHJGLZzp-h3kyEykhuKkeSlwxKgzjCyFlcCE_TANNKNuxD9hhOarwrkIPGmJB_uueFOPjw",
    link: "#",
  },
  {
    title: "Voterum",
    description:
      "Decentralized voting mechanism for DAOs using zero-knowledge proofs for absolute privacy.",
    tags: ["Solidity", "Ether.js", "Svelte"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEnYZTlJtCICqbpn0votEYbcf4Lgv3bjQwNnUMqDG7HTQfGh_z1vEuPrXc94R6HCMY2G2IpMkUbPyZfoC1BRQlZnOuVn2lvPIBuzENOz3lIEV_5NyEZ0_7rC2nBooEtF9ik75YhZih7Sba06fki2heSm03Xw6o7mi3Co7ToWv6DqeqqlzWk5_skCJTT9BxVpOJyDEEiy0ur7CmfOnHpGYvghb1TvOJ1wgcT6ModbUb-NlmSWMHD_cBNg",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-margin"
      style={{
        padding: "8rem 0",
        backgroundColor: "#0A0A0A",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "2rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#dae2fd",
                marginBottom: "1rem",
              }}
            >
              Select Engineering Works
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#bec8d2",
                maxWidth: "36rem",
              }}
            >
              A curated collection of projects focusing on AI integration,
              blockchain, and enterprise-grade tools.
            </p>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'Geist', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#89ceff",
              textDecoration: "none",
              transition: "gap 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const arrow = e.currentTarget.querySelector("svg");
              if (arrow) (arrow as HTMLElement).style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const arrow = e.currentTarget.querySelector("svg");
              if (arrow) (arrow as HTMLElement).style.transform = "translateX(0)";
            }}
          >
            Explore Full Archive
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transition: "transform 0.2s ease" }}
            >
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}) {
  return (
    <div
      className="glass-card"
      style={{ borderRadius: "1rem", overflow: "hidden" }}
    >
      {/* Image */}
      <div
        style={{
          height: "14rem",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.transform = "scale(1)")
          }
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0b1326 0%, transparent 60%)",
            opacity: 0.7,
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#dae2fd",
            }}
          >
            {title}
          </h3>
          <a
            href={link}
            style={{
              color: "#89ceff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#4edea3")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#89ceff")
            }
            aria-label={`Open ${title}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
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
          {description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.625rem",
                padding: "0.25rem 0.5rem",
                border: "1px solid rgba(62, 72, 80, 0.8)",
                borderRadius: "0.125rem",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Geist', sans-serif",
                letterSpacing: "0.05em",
                color: "#bec8d2",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
