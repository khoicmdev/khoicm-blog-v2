"use client";

const socials = [
  { href: "https://github.com/khoicm", label: "GitHub" },
  { href: "https://linkedin.com/in/khoicm", label: "LinkedIn" },
  { href: "https://x.com/khoicm", label: "X / Twitter" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        padding: "3rem 0",
        borderTop: "1px solid rgba(62, 72, 80, 0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "1.75rem",
              height: "1.75rem",
              borderRadius: "0.25rem",
              background: "linear-gradient(135deg, #89ceff, #4edea3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Geist', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "#00344d",
            }}
          >
            K
          </div>
          <div>
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#dae2fd",
                display: "block",
              }}
            >
              khoicmdev
            </span>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                color: "#bec8d2",
                margin: 0,
              }}
            >
              © 2026 Crafted with precision &amp; code.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                color: "#bec8d2",
                textDecoration: "none",
                transition: "color 0.2s ease, transform 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#4edea3";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#bec8d2";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
