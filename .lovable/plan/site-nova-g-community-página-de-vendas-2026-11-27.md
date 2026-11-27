# Site NOVA G COMMUNITY — página de vendas

## Identidade visual (do PDF + print)
- Fundo preto profundo, texto branco, cinza para apoio.
- Tipografia: grotesca pesada e apertada nos títulos (estilo Inter Tight/"Archivo" Black condensado — usarei **Archivo** 800/900 com tracking negativo), corpo em sans limpa; rótulos em caixa alta espaçada ("PERGUNTA RÁPIDA").
- **Marca-texto**: palavras-chave com bloco branco atrás e texto preto (igual "uma venda" no print), animado varrendo da esquerda ao entrar na tela.
- Barrinha de progresso tipo stories no topo (como no print) acompanhando o scroll.
- Números grandes em destaque ("7 dias", "R$ 0", "1 venda").

## Logo
- "NOVA G COMMUNITY" com o componente TechText (React Bits), código original copiado sem recriar, no topo e no hero.

## Seções (todas em português, copy tirada do PDF)
1. **Topo fixo** — logo + botão "Quero o material".
2. **Hero** — "Site vendido **antes de existir.**", subtítulo do PDF, 3 números, botão de compra (link Cakto).
3. **Pergunta rápida** — "Por que ninguém responde quando você oferece site?" em tela cheia, frase grande com marca-texto.
4. **O que tem dentro** — 8 passos como lista editorial numerada grande (01–08), hover revela descrição, sem grade de cards genérica.
5. **O processo numa página** — tabela/linha do tempo com tempo de cada etapa e total "menos de 1 hora".
6. **Prévia do conteúdo** — cards diferenciados mostrando trechos reais: planilha de leads, conversa de WhatsApp, script de 3 mensagens, objeções (cards inclinados/empilhados que se abrem no scroll).
7. **"Olha o que estão falando"** — depoimentos em formato de prints de WhatsApp/Instagram + carrossel de frases com marca-texto. (Conteúdo de exemplo até você mandar os reais.)
8. **A conta fecha** — R$ 497 setup + R$ 97/mês, contador 1 → 10 → 30 clientes.
9. **Oferta** — card de preço com o que vem, garantia, botão Cakto.
10. **Perguntas frequentes** — acordeão.
11. **Espaço "Em breve"** — bloco discreto para o futuro SaaS/novos produtos (lista de produtos preparada para crescer).
12. **Final com FluxLines** — "Ninguém fecha venda lendo PDF." sobre o fundo animado FluxLines (código original, linhas brancas, props exatamente como você enviou), botão final de compra.
13. **Rodapé** — logo, links, comunidade.

## Animações
Entradas suaves por scroll, marca-texto varrendo, números contando, cards empilhados — tudo contido, sem efeitos "de template".

## Detalhes técnicos
- Copiar TechText e FluxLines (JS + CSS) dos arquivos enviados para `src/components/reactbits/`, carregados só no navegador (usam canvas/WebGL).
- Produtos definidos numa lista (`src/lib/products.ts`) para adicionar SaaS depois.
- Fonte via link no head; tokens de cor no styles.css; metadados de SEO na página.
- Página única em `/` (é uma página de vendas).

## Pendências que vou preencher com exemplo
- Preço do PDF (link de compra: https://pay.cakto.com.br/iegcqtd_1378713 em todos os botões).
- Depoimentos reais.
