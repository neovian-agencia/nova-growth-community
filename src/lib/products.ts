export type Product = {
  id: string;
  name: string;
  tag: string;
  description: string;
  status: "available" | "soon";
  checkoutUrl?: string;
};

export const CHECKOUT_URL = "https://pay.cakto.com.br/iegcqtd_1378713";

export const products: Product[] = [
  {
    id: "site-vendido",
    name: "Site vendido antes de existir",
    tag: "Aula 01 · PDF",
    description: "Do Google Maps ao Pix em 7 dias. O método completo, com prompt, scripts e planilha.",
    status: "available",
    checkoutUrl: CHECKOUT_URL,
  },
  {
    id: "saas",
    name: "Nova G SaaS",
    tag: "Ferramenta",
    description: "A plataforma que automatiza prospecção e prévias. Em construção dentro da comunidade.",
    status: "soon",
  },
  {
    id: "aula-02",
    name: "Aula 02",
    tag: "PDF",
    description: "O próximo passo depois da primeira venda. Lista de espera aberta para membros.",
    status: "soon",
  },
];
