import { Reveal, SectionHead } from "./primitives";
import { domains, specialties } from "../data/cv";

export function Expertise() {
  return (
    <section
      id="capacidades"
      className="relative scroll-mt-20 border-t border-line px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          index="03"
          eyebrow="Capacidades"
          title="Áreas de expertise"
          intro="Lo acumulado en dos décadas, ordenado por dominio: del branding a los datos, de la operación de e-commerce a la conducción de equipos."
        />

        {/* core domains as an index of named capabilities */}
        <div className="mt-16 border-y border-line">
          {domains.map((d) => (
            <Reveal key={d.title}>
              <div className="grid gap-5 border-t border-line py-8 first:border-t-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
                <div className="flex items-baseline gap-4">
                  <span
                    className="h-2 w-2 shrink-0 translate-y-[-2px] bg-tungsten"
                    aria-hidden
                  />
                  <h3 className="font-display text-2xl font-medium text-bone sm:text-[1.85rem]">
                    {d.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-stone transition-colors hover:border-tungsten/50 hover:text-bone"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* additional specialties — a three-column ledger on hairline grid */}
        <Reveal>
          <div className="mt-16">
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-stone">
              Especialidades adicionales
            </h3>
            <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
              {specialties.map((s) => (
                <div key={s.title} className="bg-ink p-7 lg:p-8">
                  <h4 className="font-display text-xl font-medium text-tungsten">
                    {s.title}
                  </h4>
                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-bone/65">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2.5">
                        <span className="text-stone" aria-hidden>
                          ·
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
