"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backdropFilter: "blur(12px)",
        backgroundColor: scrolled
          ? "rgba(11, 19, 38, 0.92)"
          : "rgba(11, 19, 38, 0.75)",
        borderBottom: "1px solid rgba(62, 72, 80, 0.6)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "4rem",
          padding: "0 1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "0.375rem",
              background: "linear-gradient(135deg, #89ceff, #4edea3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Geist', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#00344d",
            }}
          >
            K
          </div>
          <span
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#dae2fd",
              letterSpacing: "-0.01em",
            }}
          >
            khoicmdev
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#bec8d2",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#89ceff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#bec8d2")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#89ceff",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            ) : (
              <>
                <rect y="4" width="24" height="2" rx="1"/>
                <rect y="11" width="24" height="2" rx="1"/>
                <rect y="18" width="24" height="2" rx="1"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(11, 19, 38, 0.98)",
            borderTop: "1px solid rgba(62, 72, 80, 0.5)",
            padding: "1rem 1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#bec8d2",
                textDecoration: "none",
                borderBottom: "1px solid rgba(62, 72, 80, 0.3)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
