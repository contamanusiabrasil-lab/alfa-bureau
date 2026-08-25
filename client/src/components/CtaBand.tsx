/**
 * CTA intermediário — faixa navy de conversão; o dourado aparece só como acento cirúrgico.
 */
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-y border-gold-500/25 bg-navy-900 navy-grid-texture">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 90% 50%, oklch(0.72 0.12 92 / 10%), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative z-10 flex flex-col items-start gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
        <Reveal>
          <span className="eyebrow flex items-center gap-3 text-gold-400">
            <span className="gold-rule" aria-hidden="true" />
            Diagnóstico gratuito
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-tight text-white">
            Sua empresa pode estar pagando mais imposto do que deveria.
            <span className="block text-white/60">Descubra em uma conversa de 30 minutos.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href={CONTACT.whatsappDiagnostico}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gold-500 px-7 py-4 text-[0.95rem] font-semibold text-navy-950 shadow-[0_10px_30px_-10px_oklch(0.72_0.12_92/55%)] transition-all duration-200 hover:bg-gold-400 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Quero meu diagnóstico gratuito
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
