import { GraduationCap } from "lucide-react";
import { Reveal, SectionHead } from "./primitives";
import { education } from "../data/cv";

export function Education() {
  return (
    <section
      id="formacion"
      className="relative scroll-mt-20 border-t border-line px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          index="04"
          eyebrow="Formación"
          title={
            <>
              Educación &amp;{" "}
              <span className="font-serif italic text-clay">certificaciones</span>
            </>
          }
          intro="Formación académica y certificaciones — de Río de Janeiro a Cambridge."
        />

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
          {education.map((e) => (
            <Reveal key={`${e.institution}-${e.period}`} className="bg-cream">
              <article className="flex h-full flex-col p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-clay">
                    {e.period}
                  </span>
                  <GraduationCap
                    size={18}
                    strokeWidth={1.5}
                    className="text-gold"
                  />
                </div>

                <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-ink">
                  {e.institution}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{e.degree}</p>
                <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink/60">
                  {e.place}
                </p>

                {e.items && (
                  <ul className="mt-5 space-y-1.5 border-t border-line pt-5 text-sm text-ink/75">
                    {e.items.map((it) => (
                      <li key={it} className="flex gap-2.5">
                        <span className="text-gold" aria-hidden>
                          —
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
