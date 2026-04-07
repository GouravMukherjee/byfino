import type { Metadata } from "next";
import JsonLd from "@/components/shared/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import ExperienceStrip from "@/components/home/ExperienceStrip";
import FabricMarquee from "@/components/home/FabricMarquee";
import ReviewsSection from "@/components/home/ReviewsSection";
import TailorsPreview from "@/components/home/TailorsPreview";
import LocationGrid from "@/components/home/LocationGrid";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Custom Suits & Bespoke Tailoring in Los Gatos | Fino",
  description:
    "Fino is Los Gatos's premier bespoke tailoring atelier. Custom suits for weddings, galas, and corporate life. Serving San Jose, Saratoga, Palo Alto & the Bay Area. Book your consultation.",
  keywords:
    "custom suits Los Gatos, bespoke tailoring Los Gatos, custom suits San Jose, wedding suits Bay Area, bespoke suit Silicon Valley, tailored suits Saratoga, custom tailor Campbell",
  alternates: { canonical: "https://byfino.com" },
  openGraph: {
    title: "Custom Suits & Bespoke Tailoring in Los Gatos | Fino",
    description:
      "Fino is Los Gatos's premier bespoke tailoring atelier. Custom suits for weddings, galas, and corporate life.",
    url: "https://byfino.com",
    siteName: "Fino — By Fino Bespoke Tailoring",
    images: [{ url: "/images/og/homepage.svg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <ExperienceStrip />
      <FabricMarquee />
      <ReviewsSection />
      <TailorsPreview />
      <LocationGrid />
      <FinalCTA />
    </>
  );
}
