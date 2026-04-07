import type { Metadata } from "next";
import CityPage from "@/components/shared/CityPage";

export const metadata: Metadata = {
  title: "Bespoke Suits Saratoga CA | Custom Tailor Near Saratoga | Fino",
  description: "Bespoke and custom suits serving Saratoga CA. Fino's atelier is 8 minutes from Saratoga. Premium Italian and English fabrics. Book your consultation.",
  keywords: "bespoke suits Saratoga, custom suits Saratoga CA, tailor near Saratoga, custom tailor Saratoga California",
  alternates: { canonical: "https://byfino.com/bespoke-suits-saratoga" },
};

export default function Page() {
  return (
    <CityPage
      city="Saratoga"
      slug="bespoke-suits-saratoga"
      distance="8 min drive"
      h1="Bespoke Suits in Saratoga | Fino Custom Tailoring"
      intro="Saratoga is one of the Bay Area's most distinguished communities — and the clients we serve here expect nothing less than the best. Fino is 8 minutes from Saratoga Village."
      localEvents="Saratoga's event circuit — from Villa Montalvo galas to private estate weddings — demands garments that stand apart. Our Saratoga clients appreciate the discretion of a private atelier and the quality of fabrics sourced from Loro Piana and Holland & Sherry."
      faqCityQ="Is there a bespoke tailor near Saratoga, CA?"
      faqCityA="Fino Bespoke Tailoring serves Saratoga clients from our Los Gatos atelier, located approximately 8 minutes from Saratoga Village. We specialize in custom suits for weddings, corporate events, and galas."
    />
  );
}
