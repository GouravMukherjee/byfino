import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Custom Wedding Suits San Jose | Bespoke Groom Suits Bay Area | Fino",
  description: "Custom wedding suits for grooms and groomsmen serving San Jose. Fino's Los Gatos atelier is 10 minutes from downtown San Jose. Starting at $2,400.",
  keywords: "custom wedding suits San Jose, bespoke groom suit San Jose, wedding tailor San Jose CA, wedding suit near San Jose",
  alternates: { canonical: "https://byfino.com/wedding-suits-san-jose" },
};

export default function Page() {
  return (
    <CityPage
      city="San Jose"
      slug="wedding-suits-san-jose"
      distance="10 min drive"
      h1="Custom Wedding Suits Serving San Jose | Fino Bespoke"
      intro="San Jose hosts some of the most celebrated weddings in the Bay Area — from The Fairmont and the Tech Museum to private estates throughout the Santa Cruz Mountains. Fino serves San Jose grooms with a fully bespoke wedding suit experience, 10 minutes from downtown."
      localEvents="San Jose grooms come to us with one common goal: to look exactly right in every photograph, through every moment of the day. A bespoke wedding suit, made to your measurements, in the fabric and silhouette you chose — nothing else achieves that result."
      faqCityQ="Where can I get a custom wedding suit near San Jose?"
      faqCityA="Fino Bespoke Tailoring in Los Gatos is the premier destination for custom wedding suits serving San Jose — just 10 minutes via Highway 17. We recommend booking 3–4 months before your date. Groomsmen packages available."
    />
  );
}
