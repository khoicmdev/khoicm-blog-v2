"use client";

import React from "react";

const socials = [
  {
    href: "https://github.com/khoicmdev",
    label: "GitHub",
    iconClass: "devicon-github-original",
  },
  {
    href: "https://linkedin.com/in/khoicmdev",
    label: "LinkedIn",
    iconClass: "devicon-linkedin-plain",
  },
  {
    href: "tel:+84368774688",
    label: "Phone",
    iconClass: null, // falls back to custom SVG since devicons doesn't have a phone icon
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        padding: "3rem 0",
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
              © 2026 Crafted with Next.js &amp; Coffee.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("tel:") ? undefined : "_blank"}
              rel={s.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
              style={{
                color: "#bec8d2",
                textDecoration: "none",
                transition: "color 0.2s ease, transform 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
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
              {s.iconClass ? (
                <i className={s.iconClass} style={{ fontSize: "1.25rem" }}></i>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
