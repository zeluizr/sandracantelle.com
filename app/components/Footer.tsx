import { Heart, Coffee } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { identity, disciplines } from "../data/cv";

export function Footer() {
  return (
    <footer className="bg-dusk px-6 py-14 text-cream lg:px-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-cream">{identity.name}</p>
          <p className="mt-1.5 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-cream/65">
            {disciplines.join(" · ")}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Sandra Cantelle"
              className="flex h-10 w-10 items-center justify-center border border-line-dusk text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="flex h-10 items-center gap-2 border border-line-dusk px-4 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              {identity.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cream/65 sm:items-end">
          <p className="flex items-center gap-1.5">
            Hecho con
            <Heart size={13} className="fill-clay text-clay" aria-label="amor" />
            y
            <Coffee size={13} className="text-gold" aria-label="café" />
            por
            <a
              href="https://github.com/zeluizr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-gold underline decoration-1 underline-offset-2 transition-opacity hover:opacity-75"
            >
              <GithubIcon size={13} />
              zeluizr
            </a>
          </p>
          <p>© 2026 — Santiago de Chile</p>
        </div>
      </div>
    </footer>
  );
}
