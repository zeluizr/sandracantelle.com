import {
  Target,
  ShoppingBag,
  BarChart3,
  Users,
  Megaphone,
  Heart,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHead } from "./primitives";
import { domains, specialties } from "../data/cv";

const DOMAIN_ICONS: LucideIcon[] = [Target, ShoppingBag, BarChart3, Users];
const SPECIALTY_ICONS: LucideIcon[] = [Megaphone, Heart, Sparkles];

export function Expertise() {
  return (
    <section
      id="capacidades"
      className="relative scroll-mt-20 bg-dusk px-6 py-24 text-cream lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          tone="dusk"
          index="03"
          eyebrow="Capacidades"
          title={
            <>
              Áreas de{" "}
              <span className="font-serif italic text-gold">expertise</span>
            </>
          }
          intro="Lo acumulado en dos décadas, ordenado por dominio: del branding a los datos, de la operación de e-commerce a la conducción de equipos."
        />

        <div className="mt-16 border-y border-line-dusk">
          {domains.map((d, i) => {
            const Icon = DOMAIN_ICONS[i];
            return (
              <Reveal key={d.title}>
                <div className="grid gap-5 border-t border-line-dusk py-8 first:border-t-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
                  <div className="flex items-center gap-4">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="shrink-0 text-gold"
                    />
                    <h3 className="font-display text-2xl font-medium text-cream sm:text-[1.85rem]">
                      {d.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line-dusk px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-cream/70 transition-colors hover:border-gold/60 hover:text-cream"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16">
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-cream/70">
              Especialidades adicionales
            </h3>
            <div className="mt-6 grid gap-px overflow-hidden border border-line-dusk bg-line-dusk md:grid-cols-3">
              {specialties.map((s, i) => {
                const Icon = SPECIALTY_ICONS[i];
                return (
                  <div key={s.title} className="bg-dusk-2 p-7 lg:p-8">
                    <h4 className="flex items-center gap-2 font-serif text-xl text-gold">
                      <Icon size={18} strokeWidth={1.6} /> {s.title}
                    </h4>
                    <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-cream/75">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-2.5">
                          <span className="text-rose" aria-hidden>
                            ·
                          </span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
