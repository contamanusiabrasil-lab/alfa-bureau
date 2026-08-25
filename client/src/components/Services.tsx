/**
 * Serviços — grid de cards "ledger" com ícones lineares e listas de entregas.
 */
import {
  Calculator,
  Users,
  Building2,
  LineChart,
  ShieldCheck,
  FileBadge,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { SERVICES, CONTACT } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const ICONS: Record<string, typeof Calculator> = {
  calculator: Calculator,
  users: Users,
  building: Building2,
  chart: LineChart,
  shield: ShieldCheck,
  certificate: FileBadge,
};

export function Services() {
  return (
    <section id="servicos" className="relative bg-white py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Nossos Serviços"
            title="Soluções contábeis completas para cada fase da sua empresa"
            description="Do primeiro CNPJ à consolidação do seu patrimônio: um único parceiro para toda a jornada empresarial."
          />
          <Reveal delay={140}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 rounded-md border border-navy-950/15 px-6 py-3 text-[0.9rem] font-semibold text-navy-950 transition-all hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.97]"
            >
              Solicitar proposta
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Calculator;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article className="ledger-card group flex h-full flex-col rounded-md p-7 pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-950 text-gold-400 transition-colors duration-300 group-hover:bg-royal-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-[1.28rem] font-semibold leading-snug text-navy-950">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-navy-950/8 pt-5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.86rem] text-navy-950/75">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
