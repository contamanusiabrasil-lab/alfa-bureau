/**
 * Hero — fundo navy profundo com textura de grid, headline editorial,
 * composição assimétrica com imagem + selo rotativo "Desde 1998".
 */
import { ArrowRight, ShieldCheck, Award, Clock } from "lucide-react";
import { CONTACT, STATS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

function Seal() {
  return (
    <div className="absolute -top-9 -left-9 z-20 hidden lg:flex h-28 w-28 items-center justify-center">
      <svg viewBox="0 0 120 120" className="seal-spin absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="oklch(0.72 0.12 92)" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="oklch(0.21 0.055 262)" strokeWidth="1" strokeDasharray="2 3" />
        <text fill="oklch(0.21 0.055 262)" fontSize="10.5" fontWeight="700" letterSpacing="2.5">
          <textPath href="#seal-circle">DESDE 1998 · ITAJUBÁ MG · ALFA BUREAU ·</textPath>
        </text>
      </svg>
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy-950">
        <Award className="h-7 w-7 text-gold-400" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950 navy-grid-texture">
      {/* Brilho radial sutil */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 78% 18%, oklch(0.48 0.19 262 / 22%), transparent 65%), radial-gradient(ellipse 45% 40% at 8% 90%, oklch(0.72 0.12 92 / 8%), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-36 pb-16 lg:pt-48 lg:pb-24">
        {/* Coluna de texto */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-gold-400">
              <span className="gold-rule" aria-hidden="true" />
              Escritório de Contabilidade · Desde 1998
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,5.2vw,4.3rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
              Sua contabilidade em dia.{" "}
              <span className="relative inline-block text-gold-400">
                Sua mente em paz.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 8C60 2 160 2 218 6" stroke="oklch(0.72 0.12 92)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-[1.08rem] leading-relaxed text-white/70">
              Há 27 anos a Alfa Bureau une tradição e tecnologia para cuidar da sua empresa:
              gestão tributária inteligente, redução legal de impostos e um contador que
              atende você de verdade — sem tickets, sem burocracia.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.whatsappDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-7 py-4 text-[0.95rem] font-semibold text-navy-950 shadow-[0_8px_28px_-8px_oklch(0.72_0.12_92/55%)] transition-all duration-200 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_oklch(0.72_0.12_92/65%)] active:scale-[0.97]"
              >
                Agende um Diagnóstico Gratuito
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-4 text-[0.95rem] font-semibold text-white transition-all duration-200 hover:border-gold-400/60 hover:bg-white/5 active:scale-[0.97]"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </Reveal>

          {/* Prova social */}
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <span className="flex items-center gap-2 text-[0.85rem] text-white/65">
                <ShieldCheck className="h-4 w-4 text-gold-400" /> 100% de conformidade fiscal
              </span>
              <span className="flex items-center gap-2 text-[0.85rem] text-white/65">
                <Award className="h-4 w-4 text-gold-400" /> +200 empresas atendidas
              </span>
              <span className="flex items-center gap-2 text-[0.85rem] text-white/65">
                <Clock className="h-4 w-4 text-gold-400" /> Resposta em até 1 dia útil
              </span>
            </div>
          </Reveal>
        </div>

        {/* Coluna visual */}
        <div className="lg:col-span-5 relative flex items-center">
          <Reveal delay={200} className="relative w-full">
            <div className="relative ml-auto w-full max-w-[420px]">
              {/* Moldura deslocada */}
              <div className="absolute -top-4 -right-4 h-full w-full rounded-lg border border-gold-500/30" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-lg shadow-[0_30px_60px_-20px_oklch(0_0_0/50%)]">
                <img
                  src="/images/hero.jpg"
                  alt="Escritório moderno da Alfa Bureau ao entardecer em Itajubá"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" aria-hidden="true" />
                {/* Card flutuante */}
                <div className="absolute bottom-4 left-4 right-4 rounded-md bg-white/95 p-3.5 backdrop-blur shadow-lg">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-royal-600">
                    Planejamento tributário
                  </p>
                  <p className="mt-1 font-display text-[0.95rem] font-semibold leading-snug text-navy-950">
                    Sua empresa pagando apenas o que deve
                  </p>
                </div>
              </div>
              <Seal />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Faixa de estatísticas */}
      <div className="relative z-10 border-t border-white/10 bg-navy-900/60 backdrop-blur">
        <div className="container grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className={`flex flex-col gap-1 py-8 lg:py-10 ${
                i > 0 ? "border-l border-white/10 pl-6 lg:pl-10" : ""
              } ${i === 2 ? "max-lg:border-l-0 max-lg:pl-0 max-lg:border-t max-lg:border-white/10" : ""} ${
                i === 3 ? "max-lg:border-t max-lg:border-white/10" : ""
              }`}
            >
              <span className="font-display text-[clamp(2.2rem,3.6vw,3.4rem)] font-semibold leading-none text-gold-400">
                {stat.value}
                <span className="text-[0.6em]">{stat.suffix}</span>
              </span>
              <span className="text-[0.82rem] font-medium uppercase tracking-[0.12em] text-white/55">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
