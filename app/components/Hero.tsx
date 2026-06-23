import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { Reveal, BrandText } from "./primitives";
import { BrushStroke } from "./art";
import { identity, stats, disciplines } from "../data/cv";

const LEAD =
  "Ejecutiva de marketing, e-commerce y business intelligence. Veintidós años construyendo marcas y operaciones digitales a lo largo de Latinoamérica — hoy co-fundadora de commente.me e inmmerce.";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pb-14 pt-32 lg:px-10"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-12rem)] max-w-[1240px] flex-col justify-between">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.25em] text-ink/70">
              <span className="h-px w-8 bg-clay" aria-hidden />
              {identity.role}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-9 font-display text-[clamp(3.1rem,13vw,11.5rem)] font-medium leading-[0.82] tracking-[-0.025em] text-ink">
              Sandra
              <br />
              <span className="relative inline-block">
                <span className="font-serif italic text-clay">Cantelle</span>
                <BrushStroke className="absolute -bottom-3 left-0 h-[0.4em] w-full text-gold lg:-bottom-5" />
              </span>
            </h1>
          </Reveal>

          {/* disciplines — strategist, technologist, photographer, painter */}
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/70">
              {disciplines.map((d, i) => (
                <Fragment key={d}>
                  {i > 0 && (
                    <span className="text-gold" aria-hidden>
                      ✦
                    </span>
                  )}
                  <span>{d}</span>
                </Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
              <BrandText linkClassName="text-clay font-medium">{LEAD}</BrandText>
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="group flex items-center gap-2 bg-clay px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-ink"
              >
                Conversemos
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-ink/25 px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <div className="mt-16">
            {/* migration rail — the spine of the whole career, in miniature */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.2em]">
              {identity.migration.map((city, i) => (
                <Fragment key={city}>
                  {i > 0 && (
                    <ArrowRight size={14} className="text-blue" aria-hidden />
                  )}
                  <span
                    className={
                      i === identity.migration.length - 1
                        ? "flex items-center gap-2 font-medium text-ink"
                        : "text-ink/70"
                    }
                  >
                    {i === identity.migration.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    )}
                    {city}
                  </span>
                </Fragment>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-serif text-4xl text-clay lg:text-5xl">
                    {s.value}
                  </dd>
                  <dt className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink/70">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
