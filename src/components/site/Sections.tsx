import { useState } from "react";
import { TechTextClient, FluxLinesClient } from "@/components/reactbits/ClientOnlyBits";
import { products } from "@/lib/products";
import { BuyButton, CountUp, Eyebrow, Hl, Reveal, useInView } from "./primitives";
import { ScrollStories } from "./ScrollStories";

/* ───────── Header ───────── */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <a href="#topo" className="flex items-center gap-4">
          <span className="display text-lg tracking-tight">NOVA G</span>
          <span className="hidden sm:block"><ScrollStories /></span>
        </a>
        <BuyButton>Quero o material</BuyButton>
      </div>
    </header>
  );
}

/* ───────── Hero ───────── */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-16">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="h-[140px] w-full text-foreground sm:h-[220px] lg:h-[280px]">
          <TechTextClient
            text="NOVA G COMMUNITY"
            fontWeight={900}
            fontSize={150}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            fontFamily="Archivo"
            letterSpacing={-0.05}
            accentColor="currentColor"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="currentColor"
            align="center"
            draggable
            sweep
          />
        </div>

        <div className="grid gap-12 border-t border-border pb-20 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal><Eyebrow>Aula 01 · Prospecção + criação de sites com IA</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h1 className="display mt-6 text-[13vw] sm:text-7xl lg:text-[6.5rem]">
                Site vendido <Hl delay={500}>antes de</Hl> <Hl delay={800}>existir.</Hl>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Do Google Maps ao Pix em 7 dias. Você encontra o negócio, monta o site dele com IA em menos de 1 hora e manda{" "}
                <strong className="text-foreground">pronto</strong>. Sem proposta, sem reunião, sem "faço sites".
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-6">
              <BuyButton size="lg">Quero vender o primeiro site</BuyButton>
              <span className="font-mono text-xs text-muted-foreground">PDF · acesso imediato</span>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end gap-0 lg:col-span-4">
            {[
              ["7 dias", "do primeiro lead à venda"],
              ["R$ 0", "de custo pra começar"],
              ["1 venda", "meta da semana"],
            ].map(([n, l], i) => (
              <Reveal key={n} delay={400 + i * 120} className="flex items-baseline justify-between border-b border-border py-5">
                <span className="display text-5xl">{n}</span>
                <span className="max-w-[9rem] text-right text-sm text-muted-foreground">{l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-border bg-foreground py-3 text-background">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              {["Google Maps", "→ Prévia com IA", "→ Link no ar", "→ WhatsApp", "→ Pix", "Sem proposta", "Sem reunião", "Sem \"faço sites\""].map((t) => (
                <span key={t}>{t} ✱</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Pergunta rápida ───────── */
export function Question() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-5 py-28">
      <Reveal><Eyebrow>Pergunta rápida</Eyebrow></Reveal>
      <Reveal delay={100}>
        <h2 className="display mt-6 text-5xl sm:text-7xl">
          Por que <Hl>ninguém</Hl> responde quando você <Hl delay={250}>oferece site?</Hl>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <Reveal delay={200}>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Porque você está vendendo uma promessa. Dono de negócio não compra o que imagina, compra o que{" "}
            <strong className="text-foreground">vê funcionando com o nome dele.</strong>
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Então a lógica inverte: você para de oferecer e começa a <strong className="text-foreground">entregar primeiro.</strong> O
            site chega pronto no WhatsApp. A conversa já começa no <Hl delay={300}>"quanto fica?"</Hl>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── 8 passos ───────── */
const steps = [
  ["Escolha 1 nicho", "Quem compra rápido e por quê."],
  ["Garimpe no Google Maps", "O filtro que separa lead quente de perda de tempo."],
  ["Monte a planilha", "6 colunas. Nem uma a mais."],
  ["Gere a prévia com IA", "O prompt completo, pronto pra copiar."],
  ["Suba no ar em 5 minutos", "Link próprio com o nome do cliente."],
  ["Aborde no WhatsApp", "3 mensagens + follow-up + objeções."],
  ["Precifique e feche", "Setup + mensalidade. Do \"sim\" ao Pix."],
  ["Bata a meta da semana", "30 leads, 10 prévias, 1 venda."],
];

export function Steps() {
  return (
    <section id="conteudo" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal><Eyebrow n="01">O que tem aqui</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-6 text-6xl sm:text-7xl">
                8 passos.
                <br />
                <Hl>1 semana.</Hl>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xs text-muted-foreground">Nada de teoria. Cada passo termina com algo pronto na sua mão.</p>
            </Reveal>
          </div>
        </div>
        <ol className="lg:col-span-8">
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 50}>
              <div className="group relative grid grid-cols-[4.5rem_1fr] items-baseline gap-4 overflow-hidden border-b border-border py-7 sm:grid-cols-[7rem_1fr_auto]">
                <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative font-mono text-sm text-muted-foreground transition-colors group-hover:text-background">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <h3 className="display text-3xl transition-colors group-hover:text-background sm:text-4xl">{t}</h3>
                  <p className="mt-2 text-muted-foreground transition-colors group-hover:text-background/70">{d}</p>
                </div>
                <span className="relative hidden text-2xl transition-all group-hover:translate-x-0 group-hover:text-background sm:block sm:-translate-x-3">
                  ↘
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────── Processo ───────── */
const process = [
  ["Achar o negócio", "Google Maps, filtro de nota e sem site", 2, "min"],
  ["Registrar o lead", "Nome, nota, WhatsApp, status", 1, "min"],
  ["Gerar a prévia", "Dados do Maps + prompt = site com a cara dele", 40, "min"],
  ["Publicar", "Link com o nome do negócio", 5, "min"],
  ["Mandar no WhatsApp", "3 mensagens curtas, link no meio", 3, "min"],
] as const;

export function Process() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const total = process.reduce((a, p) => a + p[2], 0);
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal><Eyebrow n="02">O processo inteiro numa página</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-6 max-w-3xl text-5xl sm:text-6xl">
                Você só precisa <Hl>repetir isso aqui.</Hl>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="text-right">
            <div className="eyebrow">Tempo total por lead</div>
            <div className="display mt-2 text-6xl">
              &lt;<CountUp to={60} /> min
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="mt-16 flex h-3 w-full overflow-hidden bg-muted">
          {process.map((p, i) => (
            <div
              key={p[0]}
              className="h-full border-r-2 border-card bg-foreground transition-all duration-1000 ease-out"
              style={{ width: on ? `${(p[2] / total) * 100}%` : "0%", transitionDelay: `${i * 150}ms`, opacity: 1 - i * 0.12 }}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {process.map(([t, d, n, u], i) => (
            <Reveal key={t} delay={i * 80} className="flex flex-col justify-between gap-10 bg-card p-6">
              <div>
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
              <div className="display text-4xl">
                {n}
                <span className="ml-1 text-base font-medium text-muted-foreground">{u}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          Faça 10 e uma venda vem. Depois é só <strong className="text-foreground">fechar e receber</strong>: preço fixo, Pix do setup, assinatura mensal.
        </p>
      </div>
    </section>
  );
}

/* ───────── Prévia do conteúdo (cards diferenciados) ───────── */
function SheetCard() {
  const rows = [
    ["Essenza Estética Avançada", "4,9 (318)", "Fechou"],
    ["Dra. Camila Torres", "4,8 (94)", "Respondeu"],
    ["Ateliê da Pele", "4,7 (201)", "Prévia enviada"],
    ["Clínica Aurea", "4,9 (77)", "Prévia enviada"],
    ["Renova Spa Facial", "4,6 (132)", "Fazer prévia"],
  ];
  return (
    <div className="overflow-hidden rounded-md border border-border bg-background font-mono text-xs">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-success" /> Leads · Estética Moema
      </div>
      {rows.map(([a, b, c], i) => (
        <div key={a} className="grid grid-cols-[1.2rem_1fr_auto_auto] gap-3 border-b border-border px-3 py-2 last:border-0">
          <span className="text-muted-foreground">{i + 2}</span>
          <span className="truncate">{a}</span>
          <span className="text-muted-foreground">{b}</span>
          <span className={c === "Fechou" ? "bg-foreground px-1 font-bold text-background" : "font-bold"}>{c}</span>
        </div>
      ))}
    </div>
  );
}

function ChatCard() {
  return (
    <div className="space-y-2 rounded-md bg-whatsapp p-4 text-sm">
      <div className="eyebrow text-center !text-[0.6rem]">Hoje</div>
      <p className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-whatsapp-out p-3">
        Oi, tudo bem? Aqui é o Lucas. Vi a Essenza no Google, 4,9 com mais de 300 avaliações. Isso é raro.
        <span className="mt-1 block text-right text-[10px] opacity-60">10:02 ✓✓</span>
      </p>
      <p className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-whatsapp-out p-3">
        Montei uma prévia com a cara de vocês pra mostrar como ficaria 👇
        <span className="mt-1 block underline">essenza-estetica.vercel.app</span>
      </p>
      <p className="max-w-[70%] rounded-lg rounded-tl-none bg-secondary p-3">
        Nossa, ficou lindo! <strong>Quanto fica?</strong>
        <span className="mt-1 block text-right text-[10px] opacity-60">10:41</span>
      </p>
    </div>
  );
}

function ObjectionCard() {
  return (
    <div className="space-y-4">
      {[
        ["\"Vou pensar.\"", "O que ficou de dúvida, preço ou o site em si? Se for ajuste, eu mudo agora."],
        ["\"Meu sobrinho faz.\"", "Massa! Se ele não puder, a prévia tá aí pronta."],
        ["Silêncio total.", "Follow-up em 48h. Mais um em 7 dias."],
      ].map(([q, a]) => (
        <div key={q} className="border-l-2 border-foreground pl-4">
          <div className="text-lg font-bold">{q}</div>
          <div className="text-sm text-muted-foreground">{a}</div>
        </div>
      ))}
    </div>
  );
}

function PromptCard() {
  return (
    <pre className="whitespace-pre-wrap rounded-md border border-dashed border-border bg-background p-4 font-mono text-xs leading-relaxed text-muted-foreground">
      <span className="text-foreground">// Novo projeto · Lovable · v0 · Claude · Bolt</span>
      {"\n\n"}Crie uma landing page de uma página para um negócio local real. Ela será mostrada ao dono como prévia, então precisa parecer{" "}
      <span className="bg-foreground text-background">feita sob medida</span>, não um template.
      {"\n\n"}
      <span className="text-foreground">REGRAS</span>
      {"\n"}Não invente preços, prêmios ou depoimentos.
    </pre>
  );
}

const previews = [
  { tag: "Passo 03", title: "A planilha de 6 colunas", body: <SheetCard />, rot: "-rotate-2" },
  { tag: "Passo 04", title: "O prompt pronto pra copiar", body: <PromptCard />, rot: "rotate-1" },
  { tag: "Passo 06", title: "O script que faz clicar", body: <ChatCard />, rot: "-rotate-1" },
  { tag: "Objeções", title: "O \"não\" quase sempre é \"ainda não\"", body: <ObjectionCard />, rot: "rotate-2" },
];

export function Preview() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-28">
        <Reveal><Eyebrow n="03">Por dentro do material</Eyebrow></Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-6 max-w-4xl text-5xl sm:text-6xl">
            Não é ideia. É <Hl>ferramenta pronta</Hl> pra usar hoje.
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {previews.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 150} className={i % 2 ? "md:mt-24" : ""}>
              <article className={`group relative ${p.rot} transition-transform duration-500 hover:rotate-0`}>
                <div className="absolute inset-0 translate-x-3 translate-y-3 border border-border" />
                <div className="relative border border-border bg-card p-6 sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="eyebrow">{p.tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}/04</span>
                  </div>
                  <h3 className="display mb-6 text-3xl">{p.title}</h3>
                  {p.body}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Depoimentos ───────── */
const testimonials = [
  { name: "Rafael M.", handle: "@rafa.sites", text: "Mandei 9 prévias na quarta. Na sexta tinha Pix de R$ 497 na conta. Nunca tinha vendido site na vida.", kind: "wa", time: "18:22" },
  { name: "Juliana C.", handle: "@ju.digital", text: "O script de WhatsApp sozinho já vale. O dono respondeu \"quanto fica?\" igualzinho ao PDF.", kind: "ig" },
  { name: "Pedro H.", handle: "@pedrohenrique", text: "A planilha mudou meu jogo. Parei de prospectar de cabeça e comecei a fazer follow-up de verdade.", kind: "quote" },
  { name: "Camila R.", handle: "@camila.ia", text: "Fechei barbearia no 4º dia. Setup + R$ 97 por mês. Agora tô indo pro segundo nicho.", kind: "wa", time: "09:47" },
  { name: "Lucas T.", handle: "@lucas.tt", text: "Direto, sem enrolação. Li em 40 minutos e já saí abrindo o Maps.", kind: "ig" },
  { name: "Bianca S.", handle: "@bia.builds", text: "Achei que precisava saber programar. Precisava só do prompt certo e coragem de mandar.", kind: "quote" },
] as const;

function TCard({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  if (t.kind === "wa")
    return (
      <div className="rounded-xl bg-whatsapp p-4">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary font-bold">{t.name[0]}</span>
          <div>
            <div className="text-sm font-bold">{t.name}</div>
            <div className="text-[11px] text-success">online</div>
          </div>
        </div>
        <p className="rounded-lg rounded-tl-none bg-secondary p-3 text-[15px] leading-relaxed">
          {t.text}
          <span className="mt-1 block text-right text-[10px] opacity-60">{t.time}</span>
        </p>
      </div>
    );
  if (t.kind === "ig")
    return (
      <div className="rounded-xl border border-border bg-background p-5">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-foreground p-[2px]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-xs font-bold">{t.name[0]}</span>
          </span>
          <span className="text-sm font-bold">{t.handle}</span>
          <span className="ml-auto text-muted-foreground">•••</span>
        </div>
        <p className="text-[15px] leading-relaxed">{t.text}</p>
        <div className="mt-4 flex gap-4 text-muted-foreground">
          <span>♥ {120 + i * 37}</span>
          <span>💬 {8 + i}</span>
        </div>
      </div>
    );
  return (
    <figure className="bg-foreground p-6 text-background">
      <div className="display text-6xl leading-none">"</div>
      <blockquote className="mt-2 text-lg font-semibold leading-snug">{t.text}</blockquote>
      <figcaption className="mt-5 font-mono text-xs opacity-70">
        {t.name} · {t.handle}
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow n="04">Olha o que estão falando</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-6 text-5xl sm:text-7xl">
                Print não mente. <Hl>Pix também não.</Hl>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="flex items-end lg:col-span-5">
            <div className="flex w-full justify-between border-t border-border pt-5">
              <div>
                <div className="display text-5xl"><CountUp to={500} prefix="+" /></div>
                <div className="text-sm text-muted-foreground">membros na comunidade</div>
              </div>
              <div className="text-right">
                <div className="display text-5xl">4,9</div>
                <div className="text-sm text-muted-foreground">nota média do material</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100} className="break-inside-avoid">
              <TCard t={t} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── A conta fecha ───────── */
export function Money() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-28">
        <Reveal><Eyebrow n="05">A conta</Eyebrow></Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-6 max-w-4xl text-5xl sm:text-7xl">
            Setup paga a semana. <Hl>Mensalidade paga o ano.</Hl>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-border lg:grid-cols-4">
          <Reveal className="bg-foreground p-8 text-background">
            <div className="eyebrow !text-background/60">Ativação · pagamento único</div>
            <div className="display mt-6 text-6xl">R$ <CountUp to={497} /></div>
            <p className="mt-4 text-sm opacity-70">Site de 1 página com a identidade do negócio, publicado e com suporte direto no WhatsApp.</p>
          </Reveal>
          {[
            [1, 97],
            [10, 970],
            [30, 2910],
          ].map(([c, v], i) => (
            <Reveal key={c} delay={100 + i * 120} className="flex flex-col justify-between bg-background p-8">
              <div className="font-mono text-sm text-muted-foreground">{c} {c === 1 ? "cliente" : "clientes"}</div>
              <div className="mt-10">
                <div className="display text-5xl">R$ <CountUp to={v ?? 0} /></div>
                <div className="text-sm text-muted-foreground">/mês recorrente</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Só recorrência, sem contar as ativações. Hospedagem no plano grátis: praticamente zero. Referência de quem está começando, não promessa.
        </p>
      </div>
    </section>
  );
}

/* ───────── Oferta ───────── */
export function Offer() {
  const items = [
    "Os 8 passos, do nicho à primeira venda",
    "O prompt completo pra gerar a prévia",
    "Modelo da planilha de leads (6 colunas)",
    "Script de 3 mensagens + follow-up",
    "Respostas prontas para as 4 objeções",
    "Tabela de preço: setup + mensalidade",
    "Plano da semana: 30 leads, 10 prévias, 1 venda",
    "Acesso à comunidade Nova G",
  ];
  return (
    <section id="oferta" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 lg:grid-cols-2">
        <div>
          <Reveal><Eyebrow n="06">O que você leva</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="display mt-6 text-5xl sm:text-6xl">
              Tudo que você precisa pra <Hl>fechar o primeiro</Hl> esta semana.
            </h2>
          </Reveal>
          <ul className="mt-10">
            {items.map((it, i) => (
              <Reveal as="li" key={it} delay={i * 50} className="flex gap-4 border-b border-border py-3">
                <span className="font-mono text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span>{it}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-3 border border-dashed border-border" />
            <div className="relative border border-foreground bg-background p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Aula 01 · PDF</span>
                <span className="bg-foreground px-2 py-1 font-mono text-[10px] font-bold uppercase text-background">Acesso imediato</span>
              </div>
              <h3 className="display mt-8 text-4xl">Site vendido antes de existir.</h3>
              <p className="mt-3 text-muted-foreground">23 páginas. Zero enrolação. Um método que você repete toda semana.</p>
              <div className="my-10 h-px bg-border" />
              <p className="text-sm text-muted-foreground">Um site vendido paga o material dezenas de vezes.</p>
              <div className="mt-8"><BuyButton size="lg">Comprar agora</BuyButton></div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
                <span>✓ Pagamento seguro Cakto</span>
                <span>✓ Pix ou cartão</span>
                <span>✓ Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
const faq = [
  ["Preciso saber programar?", "Não. A IA gera o site a partir do prompt. Seu trabalho é a curadoria: dados reais do negócio e ajustes pontuais."],
  ["Quanto preciso investir pra começar?", "R$ 0. As ferramentas têm plano grátis. O único custo fixo, depois da venda, é o domínio."],
  ["Funciona em qualquer cidade?", "Sim. Todo negócio local está no Google Maps. O segredo é buscar nicho + bairro, nunca só a cidade."],
  ["Como recebo o material?", "Logo após o pagamento você recebe o acesso no e-mail, pela Cakto."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia. Pediu, devolvemos."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal><Eyebrow n="07">Dúvidas</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="display mt-6 text-5xl">Perguntas <Hl>diretas.</Hl></h2></Reveal>
        </div>
        <div className="lg:col-span-8">
          {faq.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-border">
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="text-xl font-bold sm:text-2xl">{q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-muted-foreground">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── Em breve ───────── */
export function Upcoming() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><Eyebrow n="08">Ecossistema Nova G</Eyebrow></Reveal>
            <Reveal delay={100}><h2 className="display mt-4 text-4xl sm:text-5xl">Isso é só a <Hl>aula 01.</Hl></h2></Reveal>
          </div>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="flex flex-col justify-between gap-10 bg-card p-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{p.tag}</span>
                  <span className={`font-mono text-[10px] uppercase ${p.status === "available" ? "bg-foreground px-2 py-0.5 text-background" : "border border-border px-2 py-0.5 text-muted-foreground"}`}>
                    {p.status === "available" ? "Disponível" : "Em breve"}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
              {p.checkoutUrl ? (
                <a href={p.checkoutUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">Garantir agora →</a>
              ) : (
                <span className="font-mono text-xs text-muted-foreground">Membros recebem primeiro</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Final FluxLines ───────── */
export function FinalCta() {
  return (
    <section className="relative border-t border-border">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <FluxLinesClient
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          glow={2}
          rimWidth={0.2}
          lineWidth={1}
          flowDirection="down"
          mouseInteraction
          clickSwirl
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          sharpness={2.5}
          shimmer={1.5}
          mouseStrength={1}
          mouseRadius={0.35}
          intro
          lightMode={false}
        />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <span className="eyebrow">Última coisa</span>
          <h2 className="display mt-6 max-w-4xl text-5xl sm:text-7xl">
            Ninguém fecha venda <Hl>lendo PDF.</Hl>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Mas ninguém fecha sem saber o caminho. Pega o método hoje, abre o Maps amanhã.
          </p>
          <div className="pointer-events-auto mt-10"><BuyButton size="lg">Começar agora</BuyButton></div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10">
        <span className="display text-2xl">NOVA G COMMUNITY</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#conteudo" className="hover:text-foreground">Conteúdo</a>
          <a href="#depoimentos" className="hover:text-foreground">Depoimentos</a>
          <a href="#oferta" className="hover:text-foreground">Oferta</a>
        </nav>
        <span className="font-mono text-xs text-muted-foreground">© 2026 Nova G</span>
      </div>
    </footer>
  );
}
