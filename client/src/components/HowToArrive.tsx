/**
 * Como Chegar — mapa interativo do Google Maps com o endereço real do escritório,
 * rotas e referências. Estilo clássico: split editorial com card de informações.
 */
import { useRef } from "react";
import { MapPin, Navigation, Car, Clock, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MapView } from "./Map";

// Rua Francisco Masseli, 314 — Centro, Itajubá/MG (geocodificado)
const OFFICE_POSITION = { lat: -22.42556, lng: -45.45278 };

const ACCESS_TIPS = [
  {
    icon: Car,
    title: "De carro",
    text: "Estamos no Centro de Itajubá, a 5 minutos da Praça Theodomiro Santiago. Estacionamento amplo na região.",
  },
  {
    icon: Navigation,
    title: "Ponto de referência",
    text: "Próximo à Igreja Matriz de Nossa Senhora da Piedade e ao calçadão da Rua Francisco Masseli.",
  },
  {
    icon: Clock,
    title: "Melhor horário",
    text: "Segunda a sexta, das 8h às 17h. Agende sua visita pelo WhatsApp e garanta atendimento prioritário.",
  },
];

export function HowToArrive() {
  const mapRef = useRef<google.maps.Map | null>(null);

  function handleMapReady(map: google.maps.Map) {
    mapRef.current = map;
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: OFFICE_POSITION,
      title: "Alfa Bureau — Rua Francisco Masseli, 314, Centro, Itajubá/MG",
    });
  }

  return (
    <section id="como-chegar" className="bg-white py-20 lg:py-28">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Informações */}
        <div className="lg:col-span-5 flex flex-col">
          <SectionHeading
            eyebrow="Como Chegar"
            title="Visite nosso escritório no Centro de Itajubá"
            description="Tome um café conosco e converse pessoalmente com o contador que vai cuidar da sua empresa."
          />

          <Reveal delay={140}>
            <div className="mt-8 flex items-start gap-4 rounded-md border border-navy-950/8 bg-mist-50 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-950 text-gold-400">
                <MapPin className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Endereço
                </p>
                <p className="mt-1 font-display text-[1.1rem] font-semibold leading-snug text-navy-950">
                  {CONTACT.address}
                </p>
                <p className="text-[0.85rem] text-muted-foreground">{CONTACT.addressCep}</p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-royal-600 link-gold"
                >
                  Traçar rota no Google Maps
                  <Navigation className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4">
            {ACCESS_TIPS.map((tip, i) => (
              <Reveal key={tip.title} delay={180 + i * 70}>
                <div className="flex items-start gap-4">
                  <tip.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" strokeWidth={1.7} />
                  <div>
                    <h3 className="text-[0.92rem] font-semibold text-navy-950">{tip.title}</h3>
                    <p className="mt-0.5 text-[0.86rem] leading-relaxed text-muted-foreground">{tip.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-navy-950 px-6 py-3.5 text-[0.9rem] font-semibold text-white transition-all duration-200 hover:bg-royal-600 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <Phone className="h-4 w-4" />
              Agendar uma visita
            </a>
          </Reveal>
        </div>

        {/* Mapa */}
        <div className="lg:col-span-7">
          <Reveal delay={160} className="h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg border border-navy-950/10 shadow-[0_20px_50px_-20px_oklch(0.21_0.055_262/25%)]">
              <MapView
                className="h-full min-h-[420px] w-full"
                initialCenter={OFFICE_POSITION}
                initialZoom={16}
                onMapReady={handleMapReady}
              />
              {/* Chip de endereço sobre o mapa */}
              <div className="absolute left-4 top-4 rounded-md bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <p className="flex items-center gap-2 text-[0.82rem] font-semibold text-navy-950">
                  <MapPin className="h-4 w-4 text-gold-500" />
                  Alfa Bureau — Centro, Itajubá/MG
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
