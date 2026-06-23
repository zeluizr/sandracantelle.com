import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Reveal, SectionHead, BrandText } from "./primitives";
import { eras, type Era, type Role } from "../data/cv";

export function Trajectory() {
  return (
    <section
      id="trayectoria"
      className="relative scroll-mt-20 bg-sand px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          index="02"
          eyebrow="Trayectoria"
          title={
            <>
              Veintidós años,
              <br />
              <span className="font-serif italic text-clay">tres países</span>
            </>
          }
          intro="De la comunicación corporativa en Río de Janeiro al liderazgo de operaciones digitales en Santiago. Leída de arriba abajo, la carrera retrocede en el tiempo y en el mapa."
        />

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
          {eras.map((era) => (
            <EraBlock key={era.country} era={era} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EraBlock({ era }: { era: Era }) {
  return (
    <div className="grid gap-y-8 lg:grid-cols-[190px_1fr] lg:gap-x-12">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <Reveal>
          <div className="flex items-baseline gap-3 lg:flex-col lg:gap-2">
            <h3 className="font-display text-[1.7rem] font-medium leading-none text-ink">
              {era.country}
            </h3>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink/70">
              {era.span}
            </span>
          </div>
          <span className="mt-3 hidden items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-clay lg:flex">
            <MapPin size={12} /> {era.city}
          </span>
        </Reveal>
      </div>

      <ol className="relative border-l border-ink/20 pl-7 sm:pl-10">
        {era.roles.map((role, i) => (
          <RoleRow key={`${role.org}-${i}`} role={role} />
        ))}
      </ol>
    </div>
  );
}

function RoleRow({ role }: { role: Role }) {
  return (
    <li className="relative pb-12 last:pb-0">
      {/* spine node — "develops" from paper to sun-gold as it scrolls past */}
      <motion.span
        aria-hidden
        className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border border-ink/30 sm:-left-[46px]"
        initial={{ scale: 0.4, backgroundColor: "#faf1e2" }}
        whileInView={{ scale: 1, backgroundColor: "#e2a32c" }}
        viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      <Reveal>
        <div className="grid gap-x-6 gap-y-2 sm:grid-cols-[4.5rem_1fr]">
          <span className="font-mono text-sm font-medium text-ink/70">
            {role.year}
          </span>
          <div>
            <h4 className="font-display text-2xl font-medium leading-tight text-ink sm:text-[1.7rem]">
              {role.role}
            </h4>
            <p className="mt-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-clay">
              <BrandText linkClassName="text-blue">{role.org}</BrandText>
            </p>

            {role.location && (
              <p className="mt-1 flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink/70">
                <MapPin size={11} /> {role.location}
              </p>
            )}

            {role.kicker && (
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/75">
                {role.kicker}
              </p>
            )}

            {role.points && (
              <ul className="mt-3 max-w-2xl space-y-1.5 text-ink/75">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-px text-gold" aria-hidden>
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}

            {role.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-ink/20 px-2.5 py-1 font-mono text-[0.64rem] uppercase tracking-[0.1em] text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </li>
  );
}
