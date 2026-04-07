import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Best Bespoke Tailor Los Gatos | Custom Suits Los Gatos CA | Fino",
  description: "Fino is Los Gatos's premier bespoke tailoring atelier. Custom suits for weddings, galas, and corporate life. 5-star rated, by appointment 7 days a week.",
  keywords: "bespoke tailor Los Gatos, custom suits Los Gatos, tailor Los Gatos CA, best tailor Los Gatos California",
  alternates: { canonical: "https://byfino.com/bespoke-tailor-los-gatos" },
};

export default function Page() {
  return (
    <CityPage
      city="Los Gatos"
      slug="bespoke-tailor-los-gatos"
      h1="Bespoke Tailor in Los Gatos | Fino Custom Suits"
      intro="Fino is Los Gatos's only private bespoke tailoring atelier. Located at 20 S Santa Cruz Ave in the heart of downtown, we serve Los Gatos and the surrounding Bay Area communities by appointment."
      localEvents="Los Gatos hosts some of the most distinguished events in the Bay Area — from estate weddings and charity galas to tech executive gatherings and milestone celebrations. Our home atelier is the most convenient option for Los Gatos residents seeking truly bespoke tailoring."
      faqCityQ="What is the best custom tailor in Los Gatos?"
      faqCityA="Fino Bespoke Tailoring at 20 S Santa Cruz Ave, Suite 204b is Los Gatos's premier bespoke tailoring atelier. We specialize in custom suits for weddings, corporate life, galas, and casual suiting. 5-star rated on Google, available 7 days a week by appointment."
    />
  );
}
