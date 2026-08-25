/**
 * Dados institucionais reais da Alfa Bureau (coletados de alfabureau.com.br)
 * Centralizados aqui para manter o copy consistente em todas as seções.
 */

export const CONTACT = {
  phonePrimary: "(35) 3623-4488",
  whatsappDisplay: "(35) 99953-8783",
  whatsappUrl:
    "https://wa.me/5535999538783?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20contador%20especialista%20da%20Alfa%20Bureau.",
  whatsappDiagnostico:
    "https://wa.me/5535999538783?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20cont%C3%A1bil%20gratuito%20para%20minha%20empresa.",
  email: "contato@alfabureau.com.br",
  address: "Rua Francisco Masseli, 314 — Centro, Itajubá/MG",
  addressCep: "CEP 37500-011",
  hours: "Segunda a sexta, das 8h às 17h",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Masseli+314+Centro+Itajub%C3%A1+MG",
};

export const STATS = [
  { value: 27, suffix: "+", label: "anos de história" },
  { value: 200, suffix: "+", label: "empresas atendidas" },
  { value: 100, suffix: "%", label: "conformidade fiscal" },
  { value: 6, suffix: "+", label: "segmentos atendidos" },
] as const;

export const SERVICES = [
  {
    icon: "calculator",
    title: "Gestão Contábil & Fiscal",
    description:
      "Escrituração completa, apuração de impostos, balancetes mensais e planejamento tributário preventivo — do MEI ao Lucro Real.",
    items: ["Apuração e obrigações acessórias", "Balancetes e demonstrativos", "Planejamento tributário anual"],
  },
  {
    icon: "users",
    title: "Folha de Pagamento & RH",
    description:
      "Rotinas trabalhistas sem dor de cabeça: admissões, eSocial, férias, rescisões e gestão de benefícios com total segurança jurídica.",
    items: ["eSocial e obrigações trabalhistas", "Admissão, férias e rescisões", "Gestão de benefícios"],
  },
  {
    icon: "building",
    title: "Abertura & Legalização",
    description:
      "Abertura, alteração e regularização de empresas com processos ágeis e sem burocracia — você cuida do negócio, nós cuidamos do papel.",
    items: ["Abertura e alterações contratuais", "Certidões e regularização", "Enquadramento tributário ideal"],
  },
  {
    icon: "chart",
    title: "Consultoria & BPO Financeiro",
    description:
      "Terceirização do financeiro com contas a pagar e receber, fluxo de caixa projetado e relatórios executivos para decidir com dados.",
    items: ["Contas a pagar e receber", "Fluxo de caixa e conciliação", "Relatórios gerenciais mensais"],
  },
  {
    icon: "shield",
    title: "Imposto de Renda & Patrimônio",
    description:
      "Declarações de pessoa física e jurídica, planejamento patrimonial e sucessório para proteger o que você construiu.",
    items: ["IRPF e IRPJ sem pendências", "Planejamento patrimonial", "Holding familiar e sucessão"],
  },
  {
    icon: "certificate",
    title: "Certificados Digitais",
    description:
      "Emissão e renovação de certificados digitais e-CNPJ e e-CPF com agendamento rápido e suporte completo na documentação.",
    items: ["e-CNPJ e e-CPF", "Renovação simplificada", "Suporte na documentação"],
  },
] as const;

export const DIFFERENTIALS = [
  {
    icon: "heart",
    title: "Atendimento de verdade, sem tickets",
    description:
      "Aqui você fala com pessoas — pelo WhatsApp, por telefone ou tomando um café no nosso escritório. Resposta rápida, sem protocolo impessoal.",
  },
  {
    icon: "cpu",
    title: "Tecnologia que elimina papel",
    description:
      "Contabilidade digital integrada: documentos em nuvem, guias no seu e-mail e sistemas próprios para agro, clínicas, salões e e-commerce.",
  },
  {
    icon: "trending-down",
    title: "Menos imposto, dentro da lei",
    description:
      "Planejamento tributário robusto que encontra o enquadramento ideal para a sua empresa pagar apenas o que deve — nem um centavo a mais.",
  },
  {
    icon: "map-pin",
    title: "Raiz mineira, alcance digital",
    description:
      "Desde 1998 em Itajubá, atendemos presencialmente o Sul de Minas e o Vale do Paraíba — e digitalmente empresas em todo o Brasil.",
  },
] as const;

export const SEGMENTS = [
  { icon: "store", title: "Comércio & Varejo", description: "Do MEI às grandes lojas: fiscal, estoque tributário e margens sob controle." },
  { icon: "stethoscope", title: "Clínicas & Saúde", description: "Contabilidade para clínicas médicas, odontológicas e profissionais da saúde." },
  { icon: "tractor", title: "Agronegócio", description: "Produtores rurais e fazendas com escrituração rural e ERP especializado." },
  { icon: "wrench", title: "Serviços & Indústria", description: "Prestadores de serviço e pequenas indústrias com custos e tributos otimizados." },
  { icon: "shopping-cart", title: "E-commerce", description: "Lojas virtuais com tributação correta em marketplaces e vendas interestaduais." },
  { icon: "sparkles", title: "Beleza & Bem-estar", description: "Salões, barbearias e clínicas de estética com gestão simples e digital." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Migramos para a Alfa Bureau depois de anos com um escritório que só mandava boleto. Hoje temos reunião de planejamento todo trimestre e pagamos menos imposto do que imaginava ser possível — tudo legal.",
    name: "Ricardo M.",
    role: "Indústria metalúrgica, Itajubá/MG",
  },
  {
    quote:
      "A rotina mudou: envio os documentos digitalmente, recebo as guias com lembrete de vencimento e nunca mais paguei multa por atraso. Atendimento nota dez.",
    name: "Dra. Camila S.",
    role: "Clínica odontológica, Pouso Alegre/MG",
  },
  {
    quote:
      "Abri minha empresa com a Alfa em 2019 e cresci de MEI para Lucro Presumido com o mesmo time ao meu lado. Eles explicam tudo em português claro, sem juridiquês.",
    name: "Fernando T.",
    role: "E-commerce de moda, São Paulo/SP",
  },
  {
    quote:
      "O BPO financeiro tirou um peso enorme das minhas costas. Sei exatamente quanto entra e sai, e as decisões deixaram de ser no achismo.",
    name: "Patrícia L.",
    role: "Rede de salões de beleza, Sul de Minas",
  },
] as const;

export const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Como Chegar", href: "#como-chegar" },
  { label: "Contato", href: "#contato" },
] as const;
