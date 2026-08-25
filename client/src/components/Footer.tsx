/**
 * Footer — navy profundo, mapa do site, institucional, LGPD e selo de segurança.
 */
import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT, NAV_ITEMS, SERVICES } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Marca */}
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-white/60">
            Escritório de contabilidade em Itajubá desde 1998: inteligência estratégica,
            conformidade fiscal e segurança para o crescimento da sua empresa.
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 w-fit">
            <ShieldCheck className="h-5 w-5 text-gold-400" />
            <span className="text-[0.78rem] font-medium text-white/75">
              Site seguro · Dados protegidos conforme a LGPD
            </span>
          </div>
        </div>

        {/* Mapa do site */}
        <div className="lg:col-span-2">
          <h3 className="eyebrow text-gold-400">Navegação</h3>
          <ul className="mt-5 flex flex-col gap-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[0.9rem] text-white/65 transition-colors hover:text-gold-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow text-gold-400">Serviços</h3>
          <ul className="mt-5 flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#servicos" className="text-[0.9rem] text-white/65 transition-colors hover:text-gold-400">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow text-gold-400">Contato</h3>
          <ul className="mt-5 flex flex-col gap-3.5 text-[0.9rem] text-white/65">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
                {CONTACT.address}
                <br />
                {CONTACT.addressCep}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {CONTACT.phonePrimary} · {CONTACT.whatsappDisplay}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-400">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-[0.78rem] text-white/45 sm:flex-row">
          <p>© {year} Alfa Bureau Serviços Empresariais Ltda. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="#contato" className="transition-colors hover:text-gold-400">
              Política de Privacidade
            </a>
            <a href="#contato" className="transition-colors hover:text-gold-400">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
