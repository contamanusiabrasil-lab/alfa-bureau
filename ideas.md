# Conceito de Design — Alfa Bureau Contabilidade

## Três abordagens consideradas

### 1. "Mercador Clássico" (Editorial Heritage)
Estética de consultoria centenária: serifas editoriais, textura de papel, marrom/couro. Transmite tradição, mas envelhece a marca e afasta o posicionamento "alta tecnologia contábil" do briefing.
**Probabilidade:** 0.03

### 2. "Terminal Neon" (Fintech Dark)
Fundo escuro, acentos neon, glassmorphism. Moderno, mas genérico demais para um escritório contábil B2B que precisa transmitir solidez e confiança a empresários tradicionais.
**Probabilidade:** 0.06

### 3. "Arquitetura de Confiança" (Corporate High-End Tech) — ESCOLHIDA
Fusão de consultoria global (BDO, EY) com fintech premium (Conta Azul, Omie): azul-marinho profundo como fundação, dourado como assinatura de prestígio, muito espaço negativo, tipografia display refinada e dados reais como prova.
**Probabilidade:** 0.04

---

## Abordagem escolhida: "Arquitetura de Confiança"

### Design Movement
**New Corporate Swiss** — grid suíço rigoroso quebrado por elementos assimétricos deliberados, inspirado em consultorias globais modernas (BDO, EY) e fintechs brasileiras premium.

### Core Principles
1. **Autoridade através do espaço** — whitespace generoso é o luxo do design corporativo; nada é apertado.
2. **Dados como ornamento** — números reais (27+ anos, 200+ empresas, 100% conformidade) tratados como elementos tipográficos monumentais.
3. **Um acento dourado, sempre cirúrgico** — o dourado aparece apenas em momentos de decisão (CTAs, sublinhados, detalhes), nunca como enchimento.
4. **Profundidade sutil** — sombras difusas multicamadas, gradientes quase imperceptíveis, bordas de 1px em azul-marinho a 8%.

### Color Philosophy
- **Azul-marinho profundo `#0A1F44` (Ink Navy):** a cor da autoridade e da noite de trabalho do contador — fundação de hero, footer e momentos de peso.
- **Azul royal `#1E4FD8` (Trust Blue):** tecnologia e dinamismo — links, ícones, elementos interativos.
- **Dourado suave `#C9A227` (Heritage Gold):** a assinatura da marca — 27 anos de história destilados em detalhes preciosos.
- **Fundo claro `#F7F8FB` (Paper Mist):** papel de alta gramatura, nunca branco puro estéril.
- **Verde sutil `#0E9F6E`:** reservado exclusivamente para indicadores de sucesso/conformidade.

### Layout Paradigm
**Assimetria editorial em grid de 12 colunas.** O hero quebra o grid com texto à esquerda (7 col) e composição visual à direita (5 col) com card flutuante sobreposto. Seções alternam entre fundo claro e navy profundo, criando ritmo de leitura. Nada é centrado por padrão — textos alinhados à esquerda, como em relatórios executivos.

### Signature Elements
1. **A régua dourada** — linha horizontal fina (2px) dourada que aparece antes de títulos de seção, como uma pauta de documento oficial.
2. **Cards "ledger"** — cards com borda superior dupla (1px navy + 2px gold) evocando livros-razão.
3. **Numeração monumental** — estatísticas em display font gigante (clamp 3.5–5rem) com label pequeno em uppercase tracking-wide.
4. **Selo/estampa circular** — elemento gráfico rotativo "DESDE 1998 • ITAJUBÁ MG" no hero, como carimbo de autenticidade.

### Interaction Philosophy
Interações sóbrias e precisas — como um bom contador: resposta imediata, sem teatro. Hovers elevam cards em 4px com sombra difusa; links sublinham com dourado animado; botões pressionam com scale(0.97). Nada flutua sem propósito.

### Animation
- Entradas: fade + translateY(24px) com stagger de 60–80ms, ease-out cubic-bezier(0.23,1,0.32,1), 500ms.
- Scroll reveal via IntersectionObserver, threshold 0.15, uma única vez.
- Contadores animados nas estatísticas (count-up ao entrar na viewport).
- Selo circular com rotação lenta contínua (20s linear).
- Respeito total a `prefers-reduced-motion`.

### Typography System
- **Display/Títulos:** `Fraunces` (serifa contemporânea de alto contraste) — usada em headlines e números monumentais. Traz a "tradição" sem parecer datada. Pesos 500–600, tracking -0.02em.
- **Corpo/UI:** `Inter` — legibilidade neutra e tecnológica. Pesos 400–600.
- **Eyebrow/Labels:** Inter uppercase, tracking 0.14em, tamanho 0.75rem, cor gold ou navy 60%.
- Hierarquia: H1 clamp(2.75rem, 5vw, 4.25rem) / H2 clamp(2rem, 3.5vw, 3rem) / corpo 1.0625rem/1.7.

### Brand Essence
Contabilidade de precisão suíça com calor mineiro — para empresários que querem crescer sem medo do fisco. **Preciso, próximo, perene.**

### Brand Voice
Headlines curtas e assertivas que falam da dor do empresário; microcopy sem jargão contábil.
- "Sua contabilidade em dia. Sua mente em paz."
- "27 anos cuidando de empresas como a sua."

### Wordmark & Logo
Símbolo: monograma "A" construído como uma estrutura arquitetônica (duas colunas + travessa dourada), evocando tanto a letra Alfa quanto um edifício corporativo sólido. Wordmark "ALFA BUREAU" em caps com tracking generoso; "CONTABILIDADE" menor abaixo.

### Signature Brand Color
**Ink Navy `#0A1F44`** — inconfundível, profundo, a cor da confiança noturna.

---

## Style Decisions
- Hero com fundo navy profundo + textura de grid arquitetônico sutil + imagem gerada de escritório moderno em composição assimétrica.
- Seção de estatísticas sobre faixa navy com números dourados monumentais.
- Depoimentos em carrossel com cards paper-white sobre fundo mist.
- Formulário de contato em card flutuante sobre composição split (info de contato à esquerda em navy, form à direita em branco).
- **Regra do dourado:** Heritage Gold nunca como fundo de largura total — apenas réguas, sublinhados, numerais, selos, acentos de CTA e pequenos detalhes premium.
- **Regra de composição:** intros de seção sempre à esquerda com assimetria deliberada; layouts centrados só em momentos raros de prova social.
- **Regra da marca:** o monograma "A" arquitetônico aparece como assinatura no header/footer e como motivo de confiança (selo) em pelo menos um ponto de destaque da página.
