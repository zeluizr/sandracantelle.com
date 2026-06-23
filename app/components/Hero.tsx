import { Fragment } from "react";
import { Reveal } from "./primitives";
import { BrushStroke } from "./art";
import { identity, stats, disciplines } from "../data/cv";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pb-14 pt-32 lg:px-10"
    >
      {/* painterly pigment wash — two pigments, tungsten + oxide, bled together */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full opacity-[0.16] blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #e9a23c 0%, transparent 55%), radial-gradient(circle at 70% 65%, #bf4a2c 0%, transparent 60%)",
        }}
      />
      {/* faint vertical measure line, echoing the trajectory spine below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-line to-transparent lg:left-10 lg:block"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-12rem)] max-w-[1240px] flex-col justify-between">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.25em] text-stone">
              <span className="h-px w-8 bg-tungsten" aria-hidden />
              {identity.role}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-9 font-display text-[clamp(3.1rem,13vw,11.5rem)] font-medium leading-[0.82] tracking-[-0.025em] text-bone">
              Sandra
              <br />
              <span className="relative inline-block">
                <span className="italic text-tungsten">Cantelle</span>
                <BrushStroke className="absolute -bottom-3 left-0 h-[0.4em] w-full text-oxide lg:-bottom-5" />
              </span>
            </h1>
          </Reveal>

          {/* disciplines — strategist, technologist, photographer, painter */}
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-stone">
              {disciplines.map((d, i) => (
                <Fragment key={d}>
                  {i > 0 && (
                    <span className="text-tungsten/70" aria-hidden>
                      /
                    </span>
                  )}
                  <span>{d}</span>
                </Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/70">
              Ejecutiva de marketing, e-commerce y business intelligence.
              Veintidós años construyendo marcas y operaciones digitales a lo
              largo de Latinoamérica — hoy co-fundadora de{" "}
              <span className="text-bone">commente.me</span> e{" "}
              <span className="text-bone">Inmmerce</span>.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="bg-tungsten px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bone"
              >
                Conversemos
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-line px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-bone transition-colors hover:border-bone"
              >
                LinkedIn ↗
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
                    <span className="text-tungsten" aria-hidden>
                      →
                    </span>
                  )}
                  <span
                    className={
                      i === identity.migration.length - 1
                        ? "flex items-center gap-2 text-bone"
                        : "text-stone"
                    }
                  >
                    {i === identity.migration.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-tungsten" />
                    )}
                    {city}
                  </span>
                </Fragment>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-4xl font-medium tracking-tight text-bone lg:text-5xl">
                    {s.value}
                  </dd>
                  <dt className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-stone">
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
