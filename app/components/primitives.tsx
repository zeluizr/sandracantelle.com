import type { ReactNode } from "react";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Brand names that must always render lowercase and link to their site. */
const BRANDS = [
  { pattern: "commente\\.me", label: "commente.me", url: "https://commente.me" },
  { pattern: "inmmerce", label: "inmmerce", url: "https://inmmerce.com" },
];
const BRAND_RE = new RegExp(`(${BRANDS.map((b) => b.pattern).join("|")})`, "gi");

/**
 * Renders a string, turning every mention of "commente.me" / "inmmerce" into a
 * lowercase link to its site — even inside an uppercased label (`lowercase`
 * overrides the parent's text-transform).
 */
export function BrandText({
  children,
  linkClassName = "",
}: {
  children: string;
  linkClassName?: string;
}) {
  return (
    <>
      {children.split(BRAND_RE).map((part, i) => {
        const brand = BRANDS.find((b) =>
          new RegExp(`^${b.pattern}$`, "i").test(part),
        );
        if (!brand) return <span key={i}>{part}</span>;
        return (
          <a
            key={i}
            href={brand.url}
            target="_blank"
            rel="noreferrer"
            className={`lowercase underline decoration-1 underline-offset-2 transition-opacity hover:opacity-70 ${linkClassName}`}
          >
            {brand.label}
          </a>
        );
      })}
    </>
  );
}

type Tone = "light" | "dusk";

/** Scroll-triggered reveal. Reduced motion is handled globally by MotionConfig. */
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
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
  tone = "light",
}: {
  index?: string;
  label: string;
  tone?: Tone;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.25em]">
      {index && <span className="text-clay">{index}</span>}
      <span
        className={`h-px w-6 ${tone === "dusk" ? "bg-cream/40" : "bg-ink/30"}`}
        aria-hidden
      />
      <span className={tone === "dusk" ? "text-cream/75" : "text-ink/75"}>
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
  tone = "light",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: Tone;
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
              tone === "dusk" ? "text-cream/75" : "text-ink/75"
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
export function CropMarks({ tone = "light" }: { tone?: Tone }) {
  const color = tone === "dusk" ? "border-cream/30" : "border-ink/25";
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
