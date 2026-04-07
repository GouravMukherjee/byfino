import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Custom Suits Palo Alto | Bespoke Tailoring Silicon Valley | Fino Los Gatos",
  description: "Custom and bespoke suits serving Palo Alto and Silicon Valley. Fino's Los Gatos atelier is 25 minutes from Palo Alto. Premium suits for tech executives and entrepreneurs.",
  keywords: "custom suits Palo Alto, bespoke tailoring Palo Alto, custom tailor Silicon Valley, suit tailor near Palo Alto",
  alternates: { canonical: "https://byfino.com/custom-suits-palo-alto" },
};

export default function Page() {
  return (
    <CityPage
      city="Palo Alto"
      slug="custom-suits-palo-alto"
      distance="25 min drive"
      h1="Custom Suits in Palo Alto | Fino Bespoke Tailoring"
      intro="Palo Alto is the center of Silicon Valley's intellectual and entrepreneurial life. The professionals here know the value of doing things properly — including dressing. Fino serves Palo Alto clients from Los Gatos, 25 minutes south."
      localEvents="From investor meetings at University Avenue restaurants to Stanford charity galas and Sand Hill Road boardrooms, Palo Alto's professional class dresses for influence. Our Loro Piana Super 150s corporate suits are built exactly for this environment."
      faqCityQ="Where can I find a custom suit tailor near Palo Alto?"
      faqCityA="Fino Bespoke Tailoring is in Los Gatos, approximately 25 minutes from Palo Alto via Highway 85. We serve Palo Alto and Silicon Valley clients for corporate wardrobes, wedding suits, and formal commissions."
    />
  );
}
