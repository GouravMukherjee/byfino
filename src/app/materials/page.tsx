import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Premium Italian & English Suit Fabrics | Loro Piana, Dormeuil | Fino Los Gatos",
  description:
    "Explore Fino's curated fabric library — Loro Piana, Dormeuil, Holland & Sherry, Scabal, Piacenza, Fox Brothers. Premium Italian and English mills for bespoke suits in Los Gatos.",
  alternates: { canonical: "https://byfino.com/materials" },
};

const mills = [
  {
    name: "Loro Piana",
    origin: "Biella, Italy",
    description:
      "The gold standard of Italian luxury. Known for Super 150s through Super 180s, vicuña, cashmere, and some of the world's finest wools. Loro Piana fabrics are the benchmark by which all others are measured.",
    notable: ["Super 150s", "Super 180s", "Cashmere blends", "Vicuña"],
  },
  {
    name: "Dormeuil",
    origin: "Paris, France / Yorkshire, England",
    description:
      "Purveyors to royalty since 1842. Dormeuil's Amadeus and Tonik ranges define formal British elegance while their Amadeus collection pushes the boundaries of what wool can do.",
    notable: ["Amadeus", "Tonik", "Mistral", "Universe"],
  },
  {
    name: "Holland & Sherry",
    origin: "Savile Row, London",
    description:
      "The house fabric supplier to Savile Row since 1836. Exceptional for formal eveningwear, hopsacks, and heritage tweeds. A Fino staple for black tie and gala commissions.",
    notable: ["Fresco", "Hopsack", "Evening wear", "Heritage tweeds"],
  },
  {
    name: "Scabal",
    origin: "Brussels, Belgium",
    description:
      "Bold and technical. Scabal introduced gold-thread and platinum-thread suiting fabrics and continues to push the limits of what a suit fabric can be. Ideal for clients who want to stand out.",
    notable: ["Gold thread", "Platinum thread", "Superfine wools", "Cashmere"],
  },
  {
    name: "Piacenza",
    origin: "Lake Orta, Italy",
    description:
      "Family-owned since 1733. Piacenza's cashmere and wool-cashmere blends are among the softest and most luxurious in the world. Their fabrics wear like a second skin.",
    notable: ["Cashmere", "Wool-cashmere", "Camel hair", "Vicuña blends"],
  },
  {
    name: "Fox Brothers",
    origin: "Wellington, England",
    description:
      "England's oldest surviving cloth mill (1772). Specialists in flannel and tweed. Beloved for their Fox Flannel range — the definitive British suiting fabric for autumn and winter.",
    notable: ["Fox Flannel", "Tweed", "Fresco", "Heritage weaves"],
  },
];

const weights = [
  { range: "7–9 oz", label: "Lightweight", use: "Summer, California weddings, linen events" },
  { range: "10–11 oz", label: "Medium", use: "Year-round, all-purpose suiting" },
  { range: "12–14 oz", label: "Heavy", use: "Winter, formal evenings, British heritage look" },
];

export default function MaterialsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--bone)", padding: "160px 24px 96px" }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow text="Our Fabrics" />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--ink)",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            The cloth that becomes
            <br />
            your suit.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: 300,
              color: "var(--ink-on-bone)",
              lineHeight: 1.9,
              maxWidth: "520px",
            }}
          >
            We source exclusively from heritage mills that have defined suiting for generations.
            Italian luxury, British tradition, Belgian innovation — every fabric in our library
            earns its place.
          </p>
        </div>
      </section>

      {/* Mill cards */}
      <section style={{ background: "var(--bone)", padding: "0 24px 96px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mills.map((mill) => (
              <div
                key={mill.name}
                style={{
                  padding: "40px",
                  border: "var(--border-ink)",
                  background: "rgba(234,224,213,0.3)",
                  transition: "transform 0.25s ease",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--tan)",
                    marginBottom: "8px",
                  }}
                >
                  {mill.origin}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "var(--ink)",
                    lineHeight: 1.1,
                    marginBottom: "16px",
                  }}
                >
                  {mill.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "var(--ink-on-bone)",
                    lineHeight: 1.9,
                    marginBottom: "20px",
                  }}
                >
                  {mill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mill.notable.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 10px",
                        border: "var(--border-tan)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "8px",
                        letterSpacing: "0.12em",
                        color: "var(--earth)",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight guide */}
      <section style={{ background: "var(--teal)", padding: "80px 24px" }} className="grain-overlay">
        <div className="max-w-5xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text="Fabric weight guide" />
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              color: "var(--bone)",
              lineHeight: 1.1,
              marginBottom: "48px",
            }}
          >
            Choosing the right weight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: "1px solid rgba(198,172,143,0.12)" }}>
            {weights.map((w, i) => (
              <div
                key={w.label}
                style={{
                  padding: "40px 32px",
                  borderRight: i < weights.length - 1 ? "1px solid rgba(198,172,143,0.12)" : "none",
                }}
              >
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "36px", fontWeight: 300, color: "var(--tan)", lineHeight: 1, marginBottom: "8px" }}>{w.range}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bone)", marginBottom: "12px" }}>{w.label}</div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.8 }}>{w.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bone)", padding: "80px 24px", textAlign: "center" }}>
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px, 3vw, 26px)", fontStyle: "italic", fontWeight: 300, color: "var(--ink)", lineHeight: 1.6, marginBottom: "32px" }}>
            Not sure which fabric is right for your occasion? Book a consultation and we&apos;ll guide you through every option.
          </p>
          <Link href="/book-appointment" className="btn-dark">
            Book a Fabric Consultation →
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
