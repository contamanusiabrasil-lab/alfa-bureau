/**
 * Depoimentos — carrossel Embla com cards paper-white e navegação por setas/dots.
 */
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-mist-100 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Quem confia, recomenda"
            description="Empresários que trocaram a preocupação com o fisco pela tranquilidade de crescer."
          />
          <Reveal delay={120}>
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Depoimento anterior"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-navy-950/15 text-navy-950 transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950 active:scale-95"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Próximo depoimento"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-navy-950/15 text-navy-950 transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950 active:scale-95"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-12 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="ledger-card flex min-w-0 flex-[0_0_100%] flex-col justify-between rounded-md p-8 pt-9 md:flex-[0_0_calc(50%-12px)]"
                >
                  <div>
                    <Quote className="h-8 w-8 text-gold-500" strokeWidth={1.4} aria-hidden="true" />
                    <blockquote className="mt-4 font-display text-[1.12rem] leading-relaxed text-navy-950/90">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-7 flex items-center justify-between border-t border-navy-950/8 pt-5">
                    <div>
                      <p className="font-semibold text-navy-950">{t.name}</p>
                      <p className="text-[0.82rem] text-muted-foreground">{t.role}</p>
                    </div>
                    <div className="flex gap-0.5" aria-label="Avaliação: 5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 bg-gold-500" : "w-2 bg-navy-950/20 hover:bg-navy-950/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
