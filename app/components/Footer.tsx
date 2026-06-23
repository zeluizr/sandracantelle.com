import { identity, disciplines } from "../data/cv";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-bone">{identity.name}</p>
          <p className="mt-1.5 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-stone">
            {disciplines.join(" · ")}
          </p>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-stone sm:items-end">
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-bone"
          >
            LinkedIn ↗
          </a>
          <p>© 2026 — Hecho en Santiago</p>
        </div>
      </div>
    </footer>
  );
}
