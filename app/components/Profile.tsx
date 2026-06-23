import { Reveal, SectionHead } from "./primitives";
import { bio, ficha, languages, strengths } from "../data/cv";

export function Profile() {
  return (
    <section
      id="perfil"
      className="relative scroll-mt-20 border-t border-line px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          index="01"
          eyebrow="Perfil"
          title={
            <>
              Donde el marketing
              <br />
              <span className="italic">encuentra el dato</span>
            </>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[1.35rem] leading-[1.5] text-bone/90 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-medium first-letter:leading-[0.7] first-letter:text-tungsten">
                {bio.lead}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {bio.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="max-w-xl leading-relaxed text-bone/65">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <figure className="mt-10 border-l-2 border-tungsten pl-6">
                <blockquote className="max-w-xl font-display text-[1.5rem] italic leading-snug text-bone/90">
                  Pienso la estrategia como composición: encuadre, luz y color al
                  servicio de una marca.
                </blockquote>
                <figcaption className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-stone">
                  Fotógrafa · Pintora · Marketing
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="flex flex-col gap-10">
              {/* ficha técnica — the data voice */}
              <div>
                <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-tungsten">
                  Ficha técnica
                </h3>
                <dl className="mt-4 divide-y divide-line border-y border-line">
                  {ficha.map((row) => (
                    <div
                      key={row.key}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-stone">
                        {row.key}
                      </dt>
                      <dd className="text-right text-sm text-bone/85">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* idiomas with a 3-step strength meter */}
              <div>
                <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-tungsten">
                  Idiomas
                </h3>
                <ul className="mt-4 space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-bone/85">{lang.name}</span>
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-stone">
                          {lang.level}
                        </span>
                        <span className="flex gap-1" aria-hidden>
                          {[1, 2, 3].map((n) => (
                            <span
                              key={n}
                              className={`h-1.5 w-4 ${
                                n <= lang.strength ? "bg-tungsten" : "bg-line"
                              }`}
                            />
                          ))}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* top skills */}
              <div>
                <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-tungsten">
                  Fortalezas
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {strengths.map((s) => (
                    <span
                      key={s}
                      className="border border-line px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-bone/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
