import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema } from "@/lib/schema";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "The Bespoke Experience | Custom Suit Process | Fino Los Gatos",
  description:
    "Discover the Fino bespoke experience — from your first consultation to the final fitting. Custom suit process serving Los Gatos, San Jose, Saratoga and the Bay Area.",
  alternates: { canonical: "https://byfino.com/experience" },
};

const faqs = [
  {
    question: "How many fittings are required?",
    answer:
      "Most garments require two fittings — an initial fitting where we assess the foundational shape, and a final fitting where we make any last refinements. Wedding suits or more complex commissions may include an additional fitting to ensure perfection.",
  },
  {
    question: "What should I bring to my consultation?",
    answer:
      "Simply bring yourself and any inspiration you have — photos, fabrics, or even a suit you love and want to reference. We handle everything from there. If you have a specific event, knowing the date, venue, and dress code helps us guide you toward the right choices.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Wedding and formal suits typically take 3–4 months from consultation to delivery. Corporate and casual commissions can be completed in 6–10 weeks. Rush orders may be possible — contact us to discuss your timeline.",
  },
  {
    question: "What is the difference between bespoke and made-to-measure?",
    answer:
      "Made-to-measure starts from a pre-existing pattern adjusted to your measurements. Bespoke begins from scratch — your pattern is drafted uniquely for your body, posture, and proportions. At Fino, we offer both, and our team will advise which approach best suits your needs and timeline.",
  },
  {
    question: "What fabrics do you carry?",
    answer:
      "We stock and source fabrics from Loro Piana, Dormeuil, Holland & Sherry, Scabal, Piacenza, and Fox Brothers — the world's most respected mills. Our fabric library is updated seasonally and we can source specific fabrics on request.",
  },
  {
    question: "What does a bespoke suit cost at Fino?",
    answer:
      "Custom suits at Fino start at $2,400. The final price depends on fabric selection, garment complexity, and any additional pieces. We provide a full quote during your consultation with no obligation.",
  },
];

const steps = [
  {
    num: "01",
    title: "Welcome to the Studio",
    copy: "Step into our Los Gatos atelier and leave the outside world behind. Over coffee, we learn about your goals — the occasion, the impression you want to make, and the way you want to feel when you put on the finished garment.",
  },
  {
    num: "02",
    title: "Consult & Design",
    copy: "Over 30 precise measurements capture your unique physique. Together we discuss silhouette, lapel width, and shoulder structure before guiding you through our curated fabric library — from Loro Piana to Dormeuil — so every choice reflects your personal style.",
  },
  {
    num: "03",
    title: "The Craft",
    copy: "Your pattern is drafted by hand, the canvas is shaped to your body, and every detail — from pick stitching to buttonholes — is executed with intention. Weeks of skilled handwork transform raw cloth into something unmistakably yours.",
  },
  {
    num: "04",
    title: "The Reveal",
    copy: "The moment your vision becomes reality. In your final fitting, every line is clean, every proportion balanced. You see yourself the way you imagined — and know the suit was made for no one else.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section
        className="grain-overlay"
        style={{
          background: "var(--teal)",
          padding: "160px 24px 96px",
          position: "relative",
        }}
      >
        <div className="max-w-4xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text="The Experience" />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--bone)",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            From first conversation
            <br />
            to final reveal.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: 300,
              color: "var(--muted-on-teal)",
              lineHeight: 1.9,
            }}
          >
            Every step designed around you.
          </p>
        </div>
      </section>

      {/* Steps — alternating */}
      <section style={{ background: "var(--bone)", padding: "0" }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            style={{ borderBottom: "var(--border-ink)" }}
          >
            {/* Text side */}
            <div
              style={{
                flex: 1,
                padding: "80px clamp(24px, 6vw, 80px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--tan)",
                  marginBottom: "16px",
                }}
              >
                Step {step.num}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 300,
                  color: "var(--ink)",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                }}
              >
                {step.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--ink-on-bone)",
                  lineHeight: 1.9,
                  maxWidth: "480px",
                }}
              >
                {step.copy}
              </p>
            </div>
            {/* Visual side */}
            <div
              style={{
                flex: 1,
                minHeight: "320px",
                background: i % 2 === 0 ? "var(--teal)" : "rgba(198,172,143,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "120px",
                  fontWeight: 300,
                  color: i % 2 === 0 ? "rgba(234,224,213,0.08)" : "rgba(94,80,63,0.12)",
                  lineHeight: 1,
                }}
              >
                {step.num}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bone)", padding: "96px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <Eyebrow text="Common questions" />
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 300,
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "48px",
            }}
          >
            Everything you need to know
          </h2>
          <div className="flex flex-col gap-0" style={{ borderTop: "var(--border-ink)" }}>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                style={{ borderBottom: "var(--border-ink)", padding: "24px 0" }}
              >
                <summary
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "20px",
                    fontWeight: 300,
                    color: "var(--ink)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {faq.question}
                  <span style={{ color: "var(--tan)", fontSize: "20px" }}>+</span>
                </summary>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "var(--ink-on-bone)",
                    lineHeight: 1.9,
                    marginTop: "16px",
                    paddingRight: "40px",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
