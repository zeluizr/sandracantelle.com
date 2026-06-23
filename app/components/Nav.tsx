import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { identity, nav } from "../data/cv";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line/70 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="group flex items-baseline gap-2.5">
          <span className="font-display text-xl tracking-tight text-bone">
            {identity.name}
          </span>
          <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.3em] text-stone sm:inline">
            {identity.shortRole}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-stone transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="border border-tungsten/55 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-tungsten transition-colors hover:bg-tungsten hover:text-ink"
          >
            Conectar
          </a>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-bone transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-bone transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line/60 py-3 font-mono text-sm uppercase tracking-[0.14em] text-bone/80"
                >
                  <span>{l.label}</span>
                  <span className="text-[0.7rem] text-stone">{l.index}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
