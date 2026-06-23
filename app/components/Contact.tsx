import { Reveal, Eyebrow } from "./primitives";
import { identity } from "../data/cv";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 border-t border-line px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <Eyebrow index="05" label="Contacto" />
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.02em]">
            ¿Conversamos?
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/70">
            Si buscas una ejecutiva con experiencia comprobada en transformación
            digital, e-commerce y liderazgo de equipos en Latinoamérica,
            hablemos.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            <a
              href={`mailto:${identity.email}`}
              className="group relative bg-ink p-8 transition-colors hover:bg-ink-2 lg:p-10"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-stone">
                Email
              </span>
              <span className="mt-4 block font-display text-2xl text-bone transition-colors group-hover:text-tungsten lg:text-3xl">
                {identity.email}
              </span>
              <span
                className="absolute right-8 top-8 text-stone transition-all group-hover:translate-x-0.5 group-hover:text-tungsten"
                aria-hidden
              >
                ↗
              </span>
            </a>

            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-ink p-8 transition-colors hover:bg-ink-2 lg:p-10"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-stone">
                LinkedIn
              </span>
              <span className="mt-4 block font-display text-2xl text-bone transition-colors group-hover:text-tungsten lg:text-3xl">
                {identity.linkedinLabel}
              </span>
              <span
                className="absolute right-8 top-8 text-stone transition-all group-hover:translate-x-0.5 group-hover:text-tungsten"
                aria-hidden
              >
                ↗
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone">
            <span className="flex items-center gap-2 text-bone/80">
              <span className="h-1.5 w-1.5 rounded-full bg-tungsten" aria-hidden />
              {identity.base}
            </span>
            <span>{identity.coordinates}</span>
            <span>{identity.timezone}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
