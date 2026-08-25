/**
 * Sobre — tradição + tecnologia. Layout editorial assimétrico com imagem e timeline.
 */
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    title: "Atendimento humanizado",
    text: "Você é atendido por pessoas de verdade, que conhecem o seu negócio pelo nome.",
  },
  {
    title: "Estrutura 100% digital",
    text: "Documentos em nuvem e processos informatizados de ponta a ponta, com total segurança.",
  },
  {
    title: "Ética e segurança jurídica",
    text: "Aplicação rigorosa da legislação vigente, com sigilo e transparência absolutos.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-mist-50 py-20 lg:py-28">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
        {/* Imagem com moldura */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <Reveal className="relative">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-lg bg-navy-950" aria-hidden="true" />
            <img
              src="/manus-storage/about-team_93b4eed2.jpg"
              alt="Equipe da Alfa Bureau revisando documentos com cliente"
              className="relative aspect-[3/2] w-full rounded-lg object-cover shadow-xl"
              loading="lazy"
            />
            {/* Badge de fundação */}
            <div className="absolute -top-6 -right-4 lg:-right-6 rounded-md bg-gold-500 px-5 py-4 shadow-lg">
              <p className="font-display text-3xl font-semibold leading-none text-navy-950">1998</p>
              <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-950/70">
                ano de fundação
              </p>
            </div>
          </Reveal>
        </div>

        {/* Texto */}
        <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
          <SectionHeading
            eyebrow="Sobre Nós"
            title="Uma história de 27 anos construída ao lado do empresário mineiro"
            description="Fundada em setembro de 1998 pela contabilista Mariângela Alves e pelo administrador André Alves, a Alfa Bureau nasceu em Itajubá com um propósito claro: desenvolver uma contabilidade moderna, competitiva e profundamente humana."
          />

          <Reveal delay={120}>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
              Hoje, com estrutura totalmente informatizada e uma equipe altamente qualificada,
              atendemos de microempresas a grandes companhias em todo o Sul de Minas e Vale do
              Paraíba — e digitalmente em todo o Brasil. Nossa missão é ser referência em
              inovação tecnológica na assessoria contábil, sem abrir mão do atendimento
              personalizado que nos trouxe até aqui.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={160 + i * 80}>
                <div className="flex gap-4 rounded-md border border-navy-950/8 bg-white p-5 transition-all duration-200 hover:border-gold-500/40 hover:shadow-[0_8px_24px_-12px_oklch(0.21_0.055_262/18%)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <div>
                    <h3 className="font-semibold text-navy-950">{pillar.title}</h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-muted-foreground">{pillar.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
