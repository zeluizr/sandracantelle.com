import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { Reveal, Eyebrow, CropMarks } from "./primitives";
import { identity } from "../data/cv";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 border-t border-line bg-sand/60 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <Eyebrow index="05" label="Contacto" />
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.02em] text-ink">
            ¿Conver<span className="font-serif italic text-clay">samos</span>?
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
            Si buscas una ejecutiva con experiencia comprobada en transformación
            digital, e-commerce y liderazgo de equipos en Latinoamérica,
            hablemos.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            <a
              href={`mailto:${identity.email}`}
              className="group relative bg-cream p-8 transition-colors hover:bg-sand lg:p-10"
            >
              <CropMarks tone="light" />
              <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/70">
                <Mail size={14} className="text-clay" /> Email
              </span>
              <span className="mt-4 block break-all font-display text-2xl text-ink transition-colors group-hover:text-clay lg:text-[1.7rem]">
                {identity.email}
              </span>
              <ArrowUpRight
                size={20}
                className="absolute right-8 top-8 text-ink/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay"
              />
            </a>

            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-cream p-8 transition-colors hover:bg-sand lg:p-10"
            >
              <CropMarks tone="light" />
              <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/70">
                <LinkedinIcon size={14} className="text-blue" /> LinkedIn
              </span>
              <span className="mt-4 block font-display text-2xl text-ink transition-colors group-hover:text-blue lg:text-[1.7rem]">
                {identity.linkedinLabel}
              </span>
              <ArrowUpRight
                size={20}
                className="absolute right-8 top-8 text-ink/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/70">
            <span className="flex items-center gap-1.5 font-medium text-ink">
              <MapPin size={14} className="text-clay" /> {identity.base}
            </span>
            <span>{identity.coordinates}</span>
            <span>{identity.timezone}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
