import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered reveal that collapses to a no-op under reduced motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Mono eyebrow: index marker, hairline tick, and a label. */
export function Eyebrow({
  index,
  label,
  tone = "dark",
}: {
  index?: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.25em]">
      {index && <span className="text-tungsten">{index}</span>}
      <span
        className={`h-px w-6 ${tone === "light" ? "bg-ink/30" : "bg-line"}`}
        aria-hidden
      />
      <span className={tone === "light" ? "text-ink/55" : "text-stone"}>
        {label}
      </span>
    </div>
  );
}

/** Section header used across the dossier. */
export function SectionHead({
  index,
  eyebrow,
  title,
  intro,
  tone = "dark",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div>
      <Reveal>
        <Eyebrow index={index} label={eyebrow} tone={tone} />
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-6 max-w-[16ch] text-balance font-display text-[clamp(2.2rem,6vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.015em]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p
            className={`mt-7 max-w-2xl text-lg leading-relaxed ${
              tone === "light" ? "text-ink/65" : "text-bone/65"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Four registration / crop marks. Parent must be `relative`. */
export function CropMarks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "border-ink/25" : "border-bone/25";
  const base = "pointer-events-none absolute h-2.5 w-2.5";
  return (
    <span aria-hidden>
      <span className={`${base} left-0 top-0 border-l border-t ${color}`} />
      <span className={`${base} right-0 top-0 border-r border-t ${color}`} />
      <span className={`${base} bottom-0 left-0 border-b border-l ${color}`} />
      <span className={`${base} bottom-0 right-0 border-b border-r ${color}`} />
    </span>
  );
}
