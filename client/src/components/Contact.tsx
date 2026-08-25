/**
 * Contato — split navy (infos) + formulário de proposta com validação leve.
 * O envio abre o WhatsApp com a mensagem pré-preenchida (sem backend).
 */
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const INFO = [
  { icon: MapPin, label: "Endereço", value: `${CONTACT.address} · ${CONTACT.addressCep}`, href: CONTACT.mapsUrl },
  { icon: Phone, label: "Telefone", value: CONTACT.phonePrimary, href: `tel:+55${CONTACT.phonePrimary.replace(/\D/g, "")}` },
  { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Clock, label: "Expediente", value: CONTACT.hours, href: undefined },
];

const inputCls =
  "w-full rounded-md border border-navy-950/12 bg-white px-4 py-3 text-[0.92rem] text-navy-950 placeholder:text-navy-950/35 transition-all focus:border-royal-600 focus:outline-none focus:ring-2 focus:ring-royal-600/20";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = data.get("nome");
    const empresa = data.get("empresa");
    const email = data.get("email");
    const telefone = data.get("telefone");
    const mensagem = data.get("mensagem");
    const text = encodeURIComponent(
      `Olá! Sou ${nome}, da empresa ${empresa}.\nE-mail: ${email}\nTelefone: ${telefone}\n\n${mensagem}`
    );
    window.open(`https://wa.me/5535999538783?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      {/* Textura de fundo */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <img
          src="/manus-storage/cta-texture_3997e911.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14">
        {/* Informações */}
        <div className="lg:col-span-5">
          <SectionHeading
            dark
            eyebrow="Contato"
            title="Vamos conversar sobre o futuro da sua empresa?"
            description="Solicite uma proposta sem compromisso. Respondemos em até um dia útil — geralmente bem antes."
          />

          <div className="mt-10 flex flex-col gap-5">
            {INFO.map((info, i) => (
              <Reveal key={info.label} delay={120 + i * 70}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5 text-gold-400">
                    <info.icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-0.5 block text-[0.95rem] font-medium text-white link-gold w-fit"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-[0.95rem] font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Formulário */}
        <div className="lg:col-span-7">
          <Reveal delay={160}>
            <div className="rounded-lg bg-white p-7 shadow-[0_30px_80px_-20px_oklch(0_0_0/45%)] sm:p-10">
              {sent ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-success-600" />
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy-950">
                    Mensagem a caminho!
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.95rem] text-muted-foreground">
                    Abrimos o WhatsApp com a sua solicitação pronta. Se preferir, ligue para{" "}
                    <a href={`tel:+55${CONTACT.phonePrimary.replace(/\D/g, "")}`} className="font-semibold text-royal-600">
                      {CONTACT.phonePrimary}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-[0.88rem] font-semibold text-royal-600 link-gold"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-[1.5rem] font-semibold text-navy-950">
                    Solicite uma proposta
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] text-muted-foreground">
                    Preencha e receba o retorno de um contador especialista.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="mb-1.5 block text-[0.8rem] font-semibold text-navy-950">
                        Seu nome *
                      </label>
                      <input id="nome" name="nome" required placeholder="Como podemos te chamar?" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="mb-1.5 block text-[0.8rem] font-semibold text-navy-950">
                        Empresa *
                      </label>
                      <input id="empresa" name="empresa" required placeholder="Nome da sua empresa" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-[0.8rem] font-semibold text-navy-950">
                        E-mail *
                      </label>
                      <input id="email" name="email" type="email" required placeholder="voce@empresa.com.br" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="mb-1.5 block text-[0.8rem] font-semibold text-navy-950">
                        Telefone / WhatsApp *
                      </label>
                      <input id="telefone" name="telefone" type="tel" required placeholder="(35) 90000-0000" className={inputCls} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="mensagem" className="mb-1.5 block text-[0.8rem] font-semibold text-navy-950">
                        Como podemos ajudar? *
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        rows={4}
                        placeholder="Ex.: Quero trocar de contador e entender se estou pagando impostos a mais…"
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="max-w-xs text-[0.72rem] leading-relaxed text-muted-foreground">
                        Ao enviar, você concorda com o tratamento dos dados conforme a nossa
                        Política de Privacidade (LGPD).
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-7 py-3.5 text-[0.92rem] font-semibold text-white transition-all duration-200 hover:bg-royal-600 hover:-translate-y-0.5 active:scale-[0.97]"
                      >
                        Solicitar proposta
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
