import { createFileRoute } from "@tanstack/react-router";
import {
  Header, Hero, Question, Steps, Process, Preview, Testimonials, Money, Offer, Faq, Upcoming, FinalCta, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Site vendido antes de existir · NOVA G COMMUNITY" },
      { name: "description", content: "Do Google Maps ao Pix em 7 dias. O método da Nova G para vender sites feitos com IA antes mesmo de existirem." },
      { property: "og:title", content: "Site vendido antes de existir · NOVA G COMMUNITY" },
      { property: "og:description", content: "Do Google Maps ao Pix em 7 dias. Sem proposta, sem reunião, sem \"faço sites\"." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Question />
        <Steps />
        <Process />
        <Preview />
        <Testimonials />
        <Money />
        <Offer />
        <Faq />
        <Upcoming />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
