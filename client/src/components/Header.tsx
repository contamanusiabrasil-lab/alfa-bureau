/**
 * Header fixo — transparente sobre o hero navy, transiciona para branco no scroll.
 */
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT, NAV_ITEMS } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 shadow-[0_1px_0_oklch(0.3_0.07_262/8%),0_8px_30px_-12px_oklch(0.21_0.055_262/15%)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Barra superior institucional */}
      <div
        className={`hidden lg:block border-b transition-colors ${
          dark ? "border-white/10 text-white/70" : "border-navy-950/8 text-navy-950/60"
        }`}
      >
        <div className="container flex items-center justify-between py-2 text-[0.78rem]">
          <span>{CONTACT.address}</span>
          <div className="flex items-center gap-6">
            <span>{CONTACT.hours}</span>
            <a href={`tel:+55${CONTACT.phonePrimary.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:opacity-80">
              <Phone className="h-3 w-3" /> {CONTACT.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between py-4">
        <Logo variant={dark ? "light" : "dark"} />

        {/* Navegação desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`link-gold text-[0.9rem] font-medium transition-colors ${
                dark ? "text-white/85 hover:text-white" : "text-navy-950/75 hover:text-navy-950"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-5 py-2.5 text-[0.88rem] font-semibold text-navy-950 shadow-[0_4px_16px_-4px_oklch(0.72_0.12_92/50%)] transition-all duration-200 hover:bg-gold-400 hover:shadow-[0_6px_20px_-4px_oklch(0.72_0.12_92/60%)] active:scale-[0.97]"
          >
            Fale com um Contador Especialista
          </a>
        </div>

        {/* Toggle mobile */}
        <button
          className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
            dark ? "text-white hover:bg-white/10" : "text-navy-950 hover:bg-navy-950/5"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed inset-0 top-0 -z-10 bg-navy-950 navy-grid-texture transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container flex flex-col gap-1 pt-32 pb-10" aria-label="Navegação móvel">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium text-white/90 py-3 border-b border-white/10 transition-all hover:text-gold-400 hover:pl-2"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-6 py-4 text-base font-semibold text-navy-950 active:scale-[0.97]"
          >
            Fale com um Contador Especialista
          </a>
          <p className="mt-6 text-sm text-white/50">{CONTACT.address}</p>
          <p className="text-sm text-white/50">{CONTACT.phonePrimary} · {CONTACT.whatsappDisplay}</p>
        </nav>
      </div>
    </header>
  );
}
