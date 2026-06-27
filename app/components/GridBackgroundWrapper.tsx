"use client";

import React, { useEffect, useRef } from "react";

export default function GridBackgroundWrapper({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(syncSize);
      ro.observe(canvas);
    }
    syncSize();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track mouse position relative to canvas (start offscreen)
    const mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mouseleave", onMouseLeave);

    let animFrame: number;
    const gridSize = 45; // grid size similar to the image grid density

    function render() {
      syncSize();
      const w = canvas!.width;
      const h = canvas!.height;

      ctx!.clearRect(0, 0, w, h);

      // 1. Draw base faint grid lines (made slightly more visible)
      ctx!.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx!.lineWidth = 1;

      ctx!.beginPath();
      // Vertical lines
      for (let x = 0; x < w; x += gridSize) {
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, h);
      }
      // Horizontal lines
      for (let y = 0; y < h; y += gridSize) {
        ctx!.moveTo(0, y);
        ctx!.lineTo(w, y);
      }
      ctx!.stroke();

      // 2. Draw glowing interactive grid lines around the mouse (made more visible on hover)
      if (mouse.x !== -1000 && mouse.y !== -1000) {
        const pulse = Math.sin(Date.now() * 0.0025) * 15;
        const glowRadius = 260 + pulse;
        
        const glow = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
        glow.addColorStop(0, "rgba(194, 164, 255, 0.55)");  // Strong purple glow at center
        glow.addColorStop(0.5, "rgba(78, 222, 163, 0.25)"); // Visible green glow transition
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx!.strokeStyle = glow;
        ctx!.lineWidth = 1.8; // Thicker lines for higher visibility on hover

        ctx!.beginPath();
        // Vertical lines
        for (let x = 0; x < w; x += gridSize) {
          ctx!.moveTo(x, 0);
          ctx!.lineTo(x, h);
        }
        // Horizontal lines
        for (let y = 0; y < h; y += gridSize) {
          ctx!.moveTo(0, y);
          ctx!.lineTo(w, y);
        }
        ctx!.stroke();
      }

      animFrame = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div style={{ position: "relative", backgroundColor: "#0A0A0A", overflow: "hidden" }}>
      {/* Interactive Grid Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 0,
        }}
      />

      {/* Overlay Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, transparent 20%, #0A0A0A 95%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
