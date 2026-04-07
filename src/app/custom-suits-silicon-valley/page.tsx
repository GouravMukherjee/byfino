import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Custom Suits Silicon Valley | Bespoke Tailoring Silicon Valley | Fino",
  description: "Fino serves Silicon Valley's executives, entrepreneurs, and professionals with bespoke and custom suits. Los Gatos atelier, accessible from anywhere in Silicon Valley.",
  keywords: "custom suits Silicon Valley, bespoke tailoring Silicon Valley, custom tailor Silicon Valley, suit tailor Silicon Valley CA",
  alternates: { canonical: "https://byfino.com/custom-suits-silicon-valley" },
};

export default function Page() {
  return (
    <CityPage
      city="Silicon Valley"
      slug="custom-suits-silicon-valley"
      h1="Custom Suits in Silicon Valley | Fino Bespoke Tailoring"
      intro="Silicon Valley demands a particular kind of dressing — understated authority, impeccable quality, no unnecessary signals. Fino serves the Silicon Valley professional community from our Los Gatos atelier."
      localEvents="From Sand Hill Road boardrooms to Y Combinator demo days, from company all-hands to IPO closing dinners, Silicon Valley's high-stakes calendar requires a wardrobe that performs. Our Loro Piana and Dormeuil commissions are built for exactly this environment."
      faqCityQ="Where can I find a bespoke tailor in Silicon Valley?"
      faqCityA="Fino Bespoke Tailoring is Silicon Valley's premier bespoke atelier, located in Los Gatos. Minutes from Highway 17 and CA-85, we're accessible from San Jose, Palo Alto, Cupertino, Saratoga, and throughout the region."
    />
  );
}
