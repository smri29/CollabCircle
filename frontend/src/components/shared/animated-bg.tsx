"use client";

import { useEffect, useRef } from "react";
import styles from "./animated-bg.module.css";

/* ─── Types ─────────────────────────────────────────────── */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  pulseSpeed: number;
}

/* ─── Config ─────────────────────────────────────────────── */
const NODE_COUNT    = 38;
const MAX_DIST      = 175;
const NODE_MIN_R    = 1.8;
const NODE_MAX_R    = 4.2;
const SPEED_SCALE   = 0.28;
const LINE_ALPHA    = 0.22;
const NODE_ALPHA    = 0.55;

/* Helper – convert any CSS colour string to rgba(…) with custom alpha */
function withAlpha(cssColor: string, alpha: number): string {
  const tmp = document.createElement("canvas");
  tmp.width = tmp.height = 1;
  const t = tmp.getContext("2d")!;
  t.fillStyle = cssColor;
  t.fillRect(0, 0, 1, 1);
  const [r, g, b] = t.getImageData(0, 0, 1, 1).data;
  return `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
}

function getCSSVar(prop: string, fallback: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(prop).trim() || fallback;
}

function makeNodes(w: number, h: number): Node[] {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED_SCALE,
    vy: (Math.random() - 0.5) * SPEED_SCALE,
    r: NODE_MIN_R + Math.random() * (NODE_MAX_R - NODE_MIN_R),
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.008 + Math.random() * 0.012,
  }));
}

/* ─── Component ──────────────────────────────────────────── */
export function AnimatedBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let nodes: Node[] = [];
    let W = 0;
    let H = 0;

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width  = W;
      canvas!.height = H;
      nodes = makeNodes(W, H);
    }

    function tick() {
      ctx!.clearRect(0, 0, W, H);

      const accent = getCSSVar("--accent-strong", "#2f9bff");
      const soft   = getCSSVar("--accent-soft",   "#8fd9ff");

      /* Update positions */
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > W) { n.vx *= -1; n.x = Math.max(0, Math.min(W, n.x)); }
        if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = Math.max(0, Math.min(H, n.y)); }
      }

      /* Edges */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d >= MAX_DIST) continue;

          const t = 1 - d / MAX_DIST;
          const grad = ctx!.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, withAlpha(accent, t * LINE_ALPHA));
          grad.addColorStop(1, withAlpha(soft,   t * LINE_ALPHA * 0.55));
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.strokeStyle = grad;
          ctx!.lineWidth   = 0.7 + t * 0.7;
          ctx!.stroke();
        }
      }

      /* Nodes */
      for (const n of nodes) {
        const rf = n.r + Math.sin(n.pulse) * 0.8;

        /* Glow halo */
        const halo = ctx!.createRadialGradient(n.x, n.y, rf * 0.4, n.x, n.y, rf * 3.5);
        halo.addColorStop(0, withAlpha(accent, 0.13));
        halo.addColorStop(1, withAlpha(accent, 0));
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, rf * 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = halo;
        ctx!.fill();

        /* Core */
        const core = ctx!.createRadialGradient(n.x - rf * 0.3, n.y - rf * 0.3, 0, n.x, n.y, rf);
        core.addColorStop(0, withAlpha(soft,   NODE_ALPHA + 0.2));
        core.addColorStop(1, withAlpha(accent, NODE_ALPHA));
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, rf, 0, Math.PI * 2);
        ctx!.fillStyle = core;
        ctx!.fill();
      }

      animId = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    tick();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className={styles.canvas}
      ref={canvasRef}
    />
  );
}
