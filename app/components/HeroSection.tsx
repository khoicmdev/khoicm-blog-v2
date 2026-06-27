"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
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

    const vs = `attribute vec2 a_position;
    varying vec2 v_texCoord;
    void main() {
      v_texCoord = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }`;

    const fs = `precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    varying vec2 v_texCoord;

    void main() {
        vec2 uv = v_texCoord;
        float time = u_time * 0.4;
        
        float noise = sin(uv.x * 10.0 + time) * 0.5 + 0.5;
        noise += sin(uv.y * 8.0 - time * 1.2) * 0.5 + 0.5;
        noise += sin((uv.x + uv.y) * 5.0 + time * 0.8) * 0.5 + 0.5;
        noise /= 3.0;

        vec3 baseColor = vec3(0.043, 0.075, 0.149);
        vec3 primaryColor = vec3(0.537, 0.808, 1.0);
        vec3 secondaryColor = vec3(0.306, 0.871, 0.639);
        
        float flow = smoothstep(0.4, 0.6, noise);
        vec3 finalColor = mix(baseColor, mix(primaryColor, secondaryColor, uv.x) * 0.18, flow);
        
        float vignette = distance(uv, vec2(0.5));
        finalColor *= (1.0 - vignette * 0.65);

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

    let animFrame: number;
    function render(t: number) {
      syncSize();
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animFrame = requestAnimationFrame(render);
    }
    animFrame = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "4rem",
        overflow: "hidden",
      }}
    >
      {/* WebGL Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.45,
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundImage:
            "linear-gradient(rgba(137,206,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(137,206,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Status Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
            background: "rgba(137, 206, 255, 0.08)",
            border: "1px solid rgba(137, 206, 255, 0.2)",
            color: "#89ceff",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.8125rem",
            fontWeight: 400,
            marginBottom: "2rem",
            animation: "fadeInUp 0.6s ease-out forwards",
          }}
        >
          <span style={{ position: "relative", display: "inline-flex", height: "0.5rem", width: "0.5rem" }}>
            <span
              style={{
                position: "absolute",
                display: "inline-flex",
                height: "100%",
                width: "100%",
                borderRadius: "9999px",
                backgroundColor: "#4edea3",
                opacity: 0.75,
                animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                height: "0.5rem",
                width: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: "#4edea3",
              }}
            />
          </span>
          Available for Senior Leadership Roles
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#dae2fd",
            maxWidth: "56rem",
            margin: "0 auto 1.5rem",
            animation: "fadeInUp 0.6s 0.1s ease-out both",
          }}
        >
          Architecting Scalable{" "}
          <span className="text-gradient">AI-Powered Products</span>
          {" & "}Modernizing Ecosystems.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.125rem",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#bec8d2",
            maxWidth: "40rem",
            margin: "0 auto 3rem",
            animation: "fadeInUp 0.6s 0.2s ease-out both",
          }}
        >
          8+ years of expertise in crafting high-performance nodes and
          architectures. Bridging the gap between seasoned frontend
          craftsmanship and cutting-edge AI integration.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            animation: "fadeInUp 0.6s 0.3s ease-out both",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              backgroundColor: "#89ceff",
              color: "#00344d",
              fontFamily: "'Geist', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "0.25rem",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.9";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Portfolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "transparent",
              color: "#dae2fd",
              fontFamily: "'Geist', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "0.25rem",
              border: "1px solid rgba(62, 72, 80, 0.8)",
              cursor: "pointer",
              transition: "background 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(34, 42, 61, 0.8)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(137, 206, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(62, 72, 80, 0.8)";
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          zIndex: 10,
          animation: "bounce 1s infinite",
          color: "#dae2fd",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
