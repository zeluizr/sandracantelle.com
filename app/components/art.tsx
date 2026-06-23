import { motion } from "motion/react";

/**
 * A hand-painted brushstroke. Edges are roughened with an SVG turbulence
 * displacement filter so it reads as a single confident sweep of pigment
 * rather than a vector blob — a nod to Sandra's work as a painter.
 */
export function BrushStroke({ className }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 680 52"
      preserveAspectRatio="none"
      className={className}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      style={{ transformOrigin: "left center" }}
    >
      <defs>
        <filter id="brushEdge">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.013 0.22"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g filter="url(#brushEdge)" fill="currentColor">
        <path d="M8 31 C 170 17, 360 15, 520 19 C 600 21, 652 25, 672 22 C 652 33, 600 35, 520 35 C 360 39, 170 39, 8 31 Z" />
        <path
          d="M26 41 C 210 43, 430 43, 612 38"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />
      </g>
    </motion.svg>
  );
}

const RAYS = Array.from({ length: 12 }, (_, i) => {
  const a = (i * Math.PI * 2) / 12;
  return {
    x1: 120 + Math.cos(a) * 70,
    y1: 120 + Math.sin(a) * 70,
    x2: 120 + Math.cos(a) * 96,
    y2: 120 + Math.sin(a) * 96,
  };
});

/**
 * Golden-hour sun: a warm gradient core, a ring of rays, and concentric
 * halos. The signature mark of the "sunny" direction — the photographer's
 * favourite light, rendered as ambient atmosphere.
 */
export function SunMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden
      fill="none"
    >
      <defs>
        <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e2a32c" />
          <stop offset="50%" stopColor="#db8a63" />
          <stop offset="100%" stopColor="#db8a63" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="56" fill="url(#sunCore)" />
      <g stroke="#e2a32c" strokeWidth="2.5" strokeLinecap="round">
        {RAYS.map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
      </g>
      <circle cx="120" cy="120" r="112" stroke="#db8a63" strokeOpacity="0.35" />
      <circle cx="120" cy="120" r="118" stroke="#38688c" strokeOpacity="0.25" />
    </svg>
  );
}

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/** Fixed film-grain / canvas-tooth overlay tying the photo + paint worlds. */
export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2] opacity-[0.035] mix-blend-multiply"
      style={{ backgroundImage: GRAIN, backgroundSize: "180px 180px" }}
    />
  );
}
