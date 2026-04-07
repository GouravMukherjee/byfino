import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Meet Julian Zaragoza & David Brenno | Master Tailors | Fino Los Gatos",
  description:
    "Meet Fino's master tailors — Julian Zaragoza and David Brenno. Combined 17 years of bespoke experience. Custom suits crafted with precision, passion, and personal attention in Los Gatos.",
  alternates: { canonical: "https://byfino.com/tailors" },
};

export default function TailorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay" style={{ background: "var(--teal)", padding: "160px 24px 96px", position: "relative" }}>
        <div className="max-w-4xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text="The craftsmen" />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 400, fontStyle: "italic", color: "var(--bone)", lineHeight: 1.05 }}>
            The hands behind the craft.
          </h1>
        </div>
      </section>

      {/* Julian */}
      <section style={{ background: "var(--bone)", padding: "0" }}>
        <div className="flex flex-col lg:flex-row" style={{ minHeight: "520px" }}>
          <div style={{ flex: "0 0 40%", background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "320px" }} className="grain-overlay">
            <span style={{ fontFamily: "var(--font-accent)", fontSize: "140px", letterSpacing: "0.05em", color: "rgba(234,224,213,0.06)", position: "relative", zIndex: 2 }}>J</span>
          </div>
          <div style={{ flex: 1, padding: "80px clamp(32px, 6vw, 80px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "8px" }}>Co-Founder</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "8px" }}>Julian Zaragoza</h2>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(10,9,8,0.4)", marginBottom: "24px" }}>Timeless &amp; Classic · 5 Years</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginBottom: "32px", maxWidth: "500px" }}>
              Shaped by 1940s tailoring, classic cinema, and vintage suit books. Julian&apos;s work is guided by timeless design and traditional craftsmanship. At Fino, a suit should carry meaning and deliver that unmistakable moment when a client sees their vision realized.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginBottom: "32px", maxWidth: "500px" }}>
              His design vocabulary draws from classic Hollywood tailoring, the structured shoulders and narrow waists of post-war menswear. Julian believes that a great suit doesn&apos;t shout — it carries weight quietly.
            </p>
            <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontStyle: "italic", fontWeight: 300, color: "var(--ink)", lineHeight: 1.7, paddingLeft: "20px", borderLeft: "2px solid var(--tan)" }}>
              &ldquo;True style is built not followed — and it never goes out of fashion.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* David */}
      <section style={{ background: "rgba(234,224,213,0.4)", padding: "0" }}>
        <div className="flex flex-col lg:flex-row-reverse" style={{ minHeight: "520px" }}>
          <div style={{ flex: "0 0 40%", background: "var(--earth)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "320px" }}>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: "140px", letterSpacing: "0.05em", color: "rgba(234,224,213,0.08)" }}>D</span>
          </div>
          <div style={{ flex: 1, padding: "80px clamp(32px, 6vw, 80px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "8px" }}>Co-Founder</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "8px" }}>David Brenno</h2>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(10,9,8,0.4)", marginBottom: "24px" }}>Purpose &amp; Presence · 12 Years</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginBottom: "32px", maxWidth: "500px" }}>
              David Brenno blends the discipline of Portuguese tradition with the expressive influence of Brazilian culture. His approach to menswear is guided by purpose, precision, and presence. At Fino, style is a language — where craftsmanship and confidence reflect who you are, not what you follow.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginBottom: "32px", maxWidth: "500px" }}>
              With 12 years of experience spanning formal, casual, and wedding suiting, David brings a rare breadth to each commission. He has dressed executives, grooms, and performers — and treats each garment with the same intention.
            </p>
            <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontStyle: "italic", fontWeight: 300, color: "var(--ink)", lineHeight: 1.7, paddingLeft: "20px", borderLeft: "2px solid var(--tan)" }}>
              &ldquo;God beholds the heart; man judges the form. Therefore, be ever sharp.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "var(--bone)", padding: "96px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow text="The Fino philosophy" />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "32px" }}>
            Complementary perspectives, unified craft.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, maxWidth: "600px" }}>
            Julian and David bring complementary perspectives to every garment. Julian&apos;s eye for classic silhouettes — shaped by 1940s tailoring and vintage menswear — balances David&apos;s modern sensibility, rooted in Portuguese tradition and Brazilian expressiveness. Together, they create a studio culture where heritage meets innovation.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
