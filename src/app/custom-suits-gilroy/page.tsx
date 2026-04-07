import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Custom Suits Gilroy & Salinas | Bespoke Tailoring South Bay | Fino",
  description: "Custom and bespoke suits serving Gilroy and Salinas. Fino's Los Gatos atelier is 30–40 minutes from South Bay communities. Book your consultation.",
  keywords: "custom suits Gilroy, custom suits Salinas, bespoke tailor South Bay, tailor near Gilroy CA",
  alternates: { canonical: "https://byfino.com/custom-suits-gilroy" },
};

export default function Page() {
  return (
    <CityPage
      city="Gilroy & Salinas"
      slug="custom-suits-gilroy"
      distance="30–40 min drive"
      h1="Custom Suits Serving Gilroy & Salinas | Fino Bespoke"
      intro="Fino serves clients from Gilroy, Salinas, and the South Bay communities from our Los Gatos atelier. The drive is worth it — there is no equivalent bespoke experience closer to you."
      localEvents="The South Bay and Salinas Valley have their own distinct professional and social calendar. Whether you're preparing for a vineyard wedding, a Salinas business occasion, or a Bay Area event, our tailors bring the same standard of craft to every commission."
      faqCityQ="Is there a custom tailor near Gilroy or Salinas?"
      faqCityA="The nearest premium bespoke tailoring atelier to Gilroy and Salinas is Fino in Los Gatos — approximately 30–40 minutes north via US-101 and CA-17. We welcome clients from throughout the South Bay by appointment."
    />
  );
}
