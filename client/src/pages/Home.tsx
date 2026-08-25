/**
 * Home — one-page fluida da Alfa Bureau.
 * Ordem narrativa focada em captação: Hero → Sobre → Serviços → Diferenciais
 * → CTA → Segmentos → Depoimentos → Como Chegar → Contato → Footer.
 */
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { CtaBand } from "@/components/CtaBand";
import { Segments } from "@/components/Segments";
import { Testimonials } from "@/components/Testimonials";
import { HowToArrive } from "@/components/HowToArrive";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <CtaBand />
        <Segments />
        <Testimonials />
        <HowToArrive />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
