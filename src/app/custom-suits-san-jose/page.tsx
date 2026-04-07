import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Custom Suits San Jose | Bespoke Tailoring Near San Jose | Fino Los Gatos",
  description: "Custom and bespoke suits serving San Jose. Fino's Los Gatos atelier is 10 minutes from downtown San Jose. Book your complimentary consultation today.",
  keywords: "custom suits San Jose, bespoke tailoring San Jose, custom tailor near San Jose, suit San Jose CA",
  alternates: { canonical: "https://byfino.com/custom-suits-san-jose" },
};

export default function Page() {
  return (
    <CityPage
      city="San Jose"
      slug="custom-suits-san-jose"
      distance="10 min drive"
      h1="Custom Suits in San Jose | Fino Bespoke Tailoring"
      intro="San Jose is the heart of Silicon Valley — a city of ambition, boardrooms, and milestone events. Fino serves San Jose clients from our Los Gatos atelier, just 10 minutes away."
      localEvents="From tech company galas and Sharks games to weddings at The Fairmont San Jose and corporate leadership meetings, San Jose's calendar demands a wardrobe that commands attention. Our San Jose clients dress for the full range — and they trust bespoke to deliver."
      faqCityQ="Where can I find a custom suit tailor near San Jose?"
      faqCityA="Fino Bespoke Tailoring is located in Los Gatos, approximately 10 minutes from downtown San Jose via Highway 17. We serve San Jose clients for weddings, corporate suiting, galas, and casual commissions."
    />
  );
}
