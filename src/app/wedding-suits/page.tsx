import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Custom Wedding Suits Los Gatos & Bay Area | Fino Bespoke Tailoring",
  description:
    "Handcrafted custom wedding suits for grooms and groomsmen in Los Gatos. Serving San Jose, Saratoga, Palo Alto and the Bay Area. Starting at $2,400. Book your wedding consultation.",
  keywords:
    "custom wedding suits Los Gatos, bespoke wedding suits San Jose, wedding tailor Bay Area, groom suit Los Gatos, wedding suits Saratoga, custom groom suits Silicon Valley",
  alternates: { canonical: "https://byfino.com/wedding-suits" },
};

const faqs = [
  { question: "How far in advance should I order?", answer: "We recommend starting 3–4 months before your wedding date to allow full fabric selection and a relaxed, unhurried process." },
  { question: "Do you coordinate groomsmen suits?", answer: "Yes — each groomsman is measured and fitted individually. We ensure the group looks cohesive while every suit is tailored to the individual." },
  { question: "What fabrics work best for summer weddings?", answer: "Lightweight wool, linen blends, and fresco weaves breathe beautifully in warm weather without sacrificing structure." },
  { question: "What fabrics work best for winter weddings?", answer: "Heavier wools, flannel, and velvet accents create a rich, seasonal look ideal for indoor and evening ceremonies." },
  { question: "Can I see samples before committing?", answer: "Absolutely. We bring our entire fabric library to your complimentary consultation so you can feel every swatch before making a decision." },
  { question: "What is included in the price?", answer: "The full bespoke process — all consultations, all fittings, and final delivery. Starting at $2,400 per suit." },
  { question: "Do you offer rush orders?", answer: "Possibly — contact us directly to discuss your timeline. Rush feasibility depends on our current commission schedule." },
];

const journey = [
  { num: "01", title: "Wedding Consultation", body: "We learn your vision, date, venue, and color palette. This shapes every subsequent decision." },
  { num: "02", title: "Fabric Selection", body: "Choose from Loro Piana, Dormeuil, Scabal, and more. We guide you to fabrics that photograph beautifully and feel extraordinary." },
  { num: "03", title: "Measurements & Design", body: "30+ measurements. Lapel shape, button stance, lining, monogram — every detail is deliberate." },
  { num: "04", title: "Fittings", body: "1–2 fittings to perfect drape, balance, and proportion. We don't rush this." },
  { num: "05", title: "The Reveal", body: "Your completed suit is delivered at least 2 weeks before the wedding — time to enjoy it before the day arrives." },
];

export default function WeddingSuitsPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="grain-overlay" style={{ background: "var(--teal)", padding: "160px 24px 96px", position: "relative" }}>
        <div className="max-w-4xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text="Wedding Suits" />
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
            Your wedding day,
            <br />
            tailored.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.9, maxWidth: "480px", marginBottom: "40px" }}>
            Bespoke suits for grooms and groomsmen — crafted for the most important moment.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/book-appointment" className="btn-primary">Book a Wedding Consultation</Link>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "rgba(234,224,213,0.35)", letterSpacing: "0.1em" }}>
              Recommended start time: 3–4 months before your date
            </span>
          </div>
        </div>
      </section>

      {/* Why bespoke */}
      <section style={{ background: "var(--bone)", padding: "96px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow text="Why bespoke for your wedding" />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "48px" }}>
            The suit you wear in every photograph deserves perfection.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Perfect Fit from Every Angle", body: "A bespoke suit photographs differently. The shoulders sit right, the chest is clean, the trousers break perfectly. Every frame, every angle." },
              { title: "Premium Fabrics", body: "The cloth becomes part of the story. Loro Piana, Dormeuil, Holland & Sherry — fabrics that feel extraordinary and look even better in photos." },
              { title: "Coordinated but Individual", body: "Groom and groomsmen look like a cohesive group — each suit still fitted and tailored to the individual. No two are exactly alike." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "32px", background: "rgba(198,172,143,0.1)", borderTop: "2px solid var(--tan)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 300, color: "var(--ink)", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section style={{ background: "var(--teal)", padding: "96px 24px" }} className="grain-overlay">
        <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text="Your wedding journey" />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: "var(--bone)", lineHeight: 1.1, marginBottom: "48px" }}>
            Five steps to the perfect suit
          </h2>
          <div className="flex flex-col gap-0">
            {journey.map((step) => (
              <div key={step.num} className="flex gap-8 items-start" style={{ padding: "32px 0", borderBottom: "1px solid rgba(198,172,143,0.12)" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "48px", fontWeight: 300, color: "rgba(198,172,143,0.2)", lineHeight: 1, flexShrink: 0, minWidth: "60px" }}>{step.num}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 300, color: "var(--bone)", marginBottom: "8px" }}>{step.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.9 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Pricing */}
      <section style={{ background: "var(--ink)", padding: "80px 24px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "24px" }}>Timeline Guide</div>
              <div className="flex flex-col gap-4">
                {[
                  { time: "4 Months before", note: "Ideal — full fabric selection, relaxed timeline" },
                  { time: "3 Months before", note: "Standard — most fabric options available" },
                  { time: "2 Months before", note: "Rush — contact us to discuss feasibility" },
                ].map((item) => (
                  <div key={item.time} className="flex gap-4 items-start">
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 300, color: "var(--tan)", flexShrink: 0, minWidth: "140px" }}>{item.time}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "rgba(234,224,213,0.45)", lineHeight: 1.7 }}>{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "24px" }}>Investment</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "48px", fontWeight: 300, color: "var(--tan)", lineHeight: 1, marginBottom: "12px" }}>$2,400</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "rgba(234,224,213,0.35)", lineHeight: 1.9 }}>
                <p>Starting price per suit</p>
                <p>Groomsmen packages available</p>
                <p style={{ marginTop: "16px" }}>
                  <Link href="/book-appointment" className="btn-primary">Book Wedding Consultation</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bone)", padding: "96px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <Eyebrow text="Wedding FAQ" />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "48px" }}>
            Questions about your wedding suit
          </h2>
          <div style={{ borderTop: "var(--border-ink)" }}>
            {faqs.map((faq) => (
              <details key={faq.question} style={{ borderBottom: "var(--border-ink)", padding: "24px 0" }}>
                <summary style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 300, color: "var(--ink)", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.question}
                  <span style={{ color: "var(--tan)", fontSize: "20px" }}>+</span>
                </summary>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginTop: "16px" }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain-overlay" style={{ background: "var(--teal)", padding: "96px 24px", textAlign: "center", position: "relative" }}>
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text="Begin your wedding journey" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, fontStyle: "italic", color: "var(--bone)", lineHeight: 1.05, marginBottom: "24px" }}>
            Book your wedding consultation today.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.9, marginBottom: "40px" }}>
            Complimentary · Private · Los Gatos · 7 Days a Week
          </p>
          <Link href="/book-appointment" className="btn-primary">Reserve Your Appointment</Link>
        </div>
      </section>
    </>
  );
}
