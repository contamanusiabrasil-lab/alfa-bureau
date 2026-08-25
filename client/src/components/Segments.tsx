/**
 * Segmentos — composição editorial assimétrica: intro à esquerda, grade deslocada à direita.
 */
import { Store, Stethoscope, Tractor, Wrench, ShoppingCart, Sparkles } from "lucide-react";
import { SEGMENTS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const ICONS: Record<string, typeof Store> = {
  store: Store,
  stethoscope: Stethoscope,
  tractor: Tractor,
  wrench: Wrench,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
};

export function Segments() {
  return (
    <section id="segmentos" className="bg-mist-50 py-20 lg:py-28">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Coluna editorial */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-10">
          <SectionHeading
            eyebrow="Segmentos Atendidos"
            title="Expertise setorial que faz diferença no seu resultado"
            description="Cada setor tem suas particularidades fiscais e tributárias. Dominamos todas elas — do MEI ao Lucro Real."
          />
          <Reveal delay={160} className="hidden lg:block">
            <div className="border-l-2 border-gold-500 pl-6">
              <p className="font-display text-[3.2rem] font-semibold leading-none text-navy-950">6+</p>
              <p className="mt-2 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                setores com know-how<br />específico comprovado
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grade deslocada */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SEGMENTS.map((segment, i) => {
              const Icon = ICONS[segment.icon] ?? Store;
              return (
                <Reveal key={segment.title} delay={(i % 2) * 90} className={i % 2 === 1 ? "sm:translate-y-6" : ""}>
                  <article className="group flex h-full items-start gap-4 rounded-md border border-navy-950/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-[0_16px_36px_-16px_oklch(0.21_0.055_262/22%)]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist-100 text-royal-600 transition-colors duration-300 group-hover:bg-navy-950 group-hover:text-gold-400">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display text-[1.08rem] font-semibold text-navy-950">
                        {segment.title}
                      </h3>
                      <p className="mt-1 text-[0.86rem] leading-relaxed text-muted-foreground">
                        {segment.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
