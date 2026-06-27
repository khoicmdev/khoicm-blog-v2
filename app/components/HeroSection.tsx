"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
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

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    // Slow, deep liquid obsidian shader from new design
    const vs = `attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }`;

    const fs = `precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
          vec2 uv = v_texCoord;
          float time = u_time * 0.25;
          
          float noise = sin(uv.x * 6.0 + time) * 0.5 + 0.5;
          noise += sin(uv.y * 5.0 - time * 0.7) * 0.5 + 0.5;
          noise += sin((uv.x + uv.y) * 3.5 + time * 0.4) * 0.5 + 0.5;
          noise /= 3.0;

          vec3 deepBlack = vec3(0.039, 0.039, 0.039);
          vec3 primaryHighlight = vec3(0.537, 0.808, 1.0);
          vec3 secondaryHighlight = vec3(0.761, 0.643, 1.0);
          vec3 targetHighlight = mix(primaryHighlight, secondaryHighlight, uv.x * 0.5 + 0.25);
          
          float flow = smoothstep(0.3, 0.7, noise);
          vec3 finalColor = mix(deepBlack, targetHighlight * 0.14, flow);
          
          float vignette = distance(uv, vec2(0.5));
          finalColor *= (1.0 - vignette * 0.5);

          gl_FragColor = vec4(finalColor, 1.0);
      }`;

    function createShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
        mouse.y = (1 - (e.clientY - rect.top) / rect.height) * canvas.height;
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    let animFrame: number;
    function render(t: number) {
      syncSize();
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animFrame = requestAnimationFrame(render);
    }
    animFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
      }}
    >
      {/* WebGL Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(10,10,10,0.2)",
          backdropFilter: "blur(1px)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              border: "1px solid rgba(137, 206, 255, 0.3)",
              background: "rgba(10, 10, 10, 0.6)",
              backdropFilter: "blur(12px)",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: "#4edea3",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8125rem",
                color: "#c2a4ff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Senior Frontend Engineer
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f5f5f5",
              marginBottom: "1.5rem",
            }}
          >
            Architecting Scalable{" "}
            <span style={{ color: "#c2a4ff" }}>AI-Powered</span> Products &amp;
            Modernizing Ecosystems.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              fontWeight: 500,
              lineHeight: 1.6,
              color: "#f5f5f5",
              maxWidth: "36rem",
              marginBottom: "2.5rem",
            }}
          >
            8+ years of expertise in crafting high-performance web
            architectures. Bridging the gap between seasoned frontend
            craftsmanship and cutting-edge LLM integration.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="#experience"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#c2a4ff",
                color: "#1b003a",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 8px 25px rgba(194, 164, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              View Experience
            </a>
            <a
              href="#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(10, 10, 10, 0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(64, 64, 64, 0.8)",
                color: "#f5f5f5",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(38, 38, 38, 0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(10, 10, 10, 0.4)";
              }}
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div style={{ position: "relative" }} className="hero-portrait">
          {/* Glow border */}
          <div
            style={{
              position: "absolute",
              inset: "-4px",
              background: "linear-gradient(135deg, #c2a4ff, #4edea3)",
              borderRadius: "1.25rem",
              filter: "blur(8px)",
              opacity: 0.2,
              transition: "opacity 0.5s ease",
            }}
          />
          <div
            className="glass-card"
            style={{
              position: "relative",
              padding: "0.5rem",
              borderRadius: "1.25rem",
              overflow: "hidden",
              aspectRatio: "3/4",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "0.85rem", overflow: "hidden" }}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCyzN5YKzH-O5mPCYSpnxyQKxGYNPxQzZNApDz7x7_96NGzm4GuD0NUBVPaXH9OOubA7PADp2L5XTtUsEMaSYeJgnWO7hMs-O2uvyEtImT8mGojx9v1TtZG0cbQrQBAP5zadELAY144aSvxxS-igaO-dV0Q7P1vUzPOzFHnh1XD_JJQhOjV3e2cTcRdXI57gWO2eqHKUEJy6DYsOqGwPPplWXVwdIRBAXYSl5f-EDwEPp1eYOoPLOVMYWsb-LF9kTu66c"
                alt="Cao Minh Khoi Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Core Stack card */}
            <div
              className="glass-card"
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.5rem",
                    background: "rgba(194, 164, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c2a4ff",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  &gt;_
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#f5f5f5", fontSize: "0.875rem", margin: 0 }}>
                    Core Stack
                  </h4>
                  <p style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#a3a3a3", margin: 0 }}>
                    Enterprise Ready
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  marginTop: "0.75rem",
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", color: "#4edea3" }}>Angular 18+</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.625rem", color: "#4edea3" }}>React & Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-portrait {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
