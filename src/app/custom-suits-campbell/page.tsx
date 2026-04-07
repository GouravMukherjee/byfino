import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Custom Suits Campbell CA | Bespoke Tailoring Near Campbell | Fino",
  description: "Custom and bespoke suits serving Campbell, CA. Fino's Los Gatos atelier is 12 minutes from Campbell. Book your complimentary consultation.",
  keywords: "custom suits Campbell CA, bespoke tailoring Campbell, tailor near Campbell California, custom suit Campbell",
  alternates: { canonical: "https://byfino.com/custom-suits-campbell" },
};

export default function Page() {
  return (
    <CityPage
      city="Campbell"
      slug="custom-suits-campbell"
      distance="12 min drive"
      h1="Custom Suits in Campbell | Fino Bespoke Tailoring"
      intro="Campbell is a community with deep Bay Area roots and a growing professional scene. Fino serves Campbell clients from our Los Gatos atelier, just 12 minutes away."
      localEvents="Whether you're preparing for a Campbell-area wedding, a professional milestone, or a formal evening event, our tailors bring the same standard of craft to every commission. Campbell clients appreciate the personal attention of a private atelier."
      faqCityQ="Is there a custom tailor near Campbell, CA?"
      faqCityA="Fino Bespoke Tailoring is located in Los Gatos, approximately 12 minutes from Campbell via CA-17. We welcome Campbell clients for all bespoke and custom suit commissions, by appointment 7 days a week."
    />
  );
}
