import { motion, useReducedMotion } from "motion/react";

/**
 * A hand-painted brushstroke. Edges are roughened with an SVG turbulence
 * displacement filter so it reads as a single confident sweep of pigment
 * rather than a vector blob — a nod to Sandra's work as a painter.
 */
export function BrushStroke({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 680 52"
      preserveAspectRatio="none"
      className={className}
      initial={reduce ? false : { scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
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

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * Fixed film-grain / canvas-tooth overlay. Soft-light blend reads as
 * darkroom grain over the ink sections and as canvas texture over the bone
 * ones — one layer that ties the photographic and painterly worlds together.
 */
export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2] opacity-[0.05] mix-blend-soft-light"
      style={{ backgroundImage: GRAIN, backgroundSize: "180px 180px" }}
    />
  );
}
