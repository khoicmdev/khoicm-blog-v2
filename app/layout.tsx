import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "khoicmdev | Senior Frontend Engineer Portfolio",
  description:
    "Portfolio of Khoi CM — Senior Frontend Engineer specializing in architecting scalable AI-powered products and modernizing enterprise ecosystems.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "AI Integration",
    "khoicmdev",
  ],
  authors: [{ name: "Khoi CM", url: "https://khoidev.vercel.app/" }],
  openGraph: {
    title: "khoicmdev | Senior Frontend Engineer Portfolio",
    description:
      "8+ years of expertise in crafting high-performance interfaces and AI-powered architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@dev.icons/core@latest/dist/font/devicons.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
      <Analytics />
    </html>
  );
}
