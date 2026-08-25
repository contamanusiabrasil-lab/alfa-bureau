/**
 * Diferenciais — seção navy com textura, cards em vidro escuro + CTA de captação.
 */
import { HeartHandshake, Cpu, TrendingDown, MapPin, ArrowRight } from "lucide-react";
import { CONTACT, DIFFERENTIALS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const ICONS: Record<string, typeof Cpu> = {
  heart: HeartHandshake,
  cpu: Cpu,
  "trending-down": TrendingDown,
  "map-pin": MapPin,
};

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-navy-950 navy-grid-texture py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 10%, oklch(0.48 0.19 262 / 18%), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative z-10">
        <SectionHeading
          dark
          eyebrow="Por que a Alfa Bureau?"
          title="O contador que trabalha como sócio do seu negócio"
          description="Não somos um escritório que só entrega guias. Somos o parceiro estratégico que olha para o futuro da sua empresa junto com você."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIFFERENTIALS.map((diff, i) => {
            const Icon = ICONS[diff.icon] ?? Cpu;
            return (
              <Reveal key={diff.title} delay={(i % 2) * 100}>
                <article className="group relative h-full overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:border-gold-500/40 hover:bg-white/[0.07]">
                  <div
                    className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold-500/10 blur-2xl transition-all duration-300 group-hover:bg-gold-500/20"
                    aria-hidden="true"
                  />
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold-500/30 bg-gold-500/10 text-gold-400">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display text-[1.25rem] font-semibold text-white">{diff.title}</h3>
                      <p className="mt-2 text-[0.94rem] leading-relaxed text-white/65">{diff.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-start gap-5 rounded-md border border-gold-500/25 bg-gold-500/[0.06] p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-display text-[1.2rem] font-medium leading-snug text-white">
              Pronto para ter um contador que trabalha pelo seu crescimento?
            </p>
            <a
              href={CONTACT.whatsappDiagnostico}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-[0.9rem] font-semibold text-navy-950 transition-all duration-200 hover:bg-gold-400 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Falar com um especialista
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
