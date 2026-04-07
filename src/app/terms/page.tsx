import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Fino Bespoke Tailoring",
  description: "Terms of Service for Fino Bespoke Tailoring.",
};

export default function TermsPage() {
  return (
    <section style={{ background: "var(--bone)", paddingTop: "120px", paddingBottom: "96px", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "12px" }}>
          Terms of Service
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(10,9,8,0.4)", textTransform: "uppercase", marginBottom: "48px" }}>
          Last updated: January 2025
        </p>
        {[
          { title: "Services", body: "Fino Bespoke Tailoring provides custom and bespoke tailoring services by appointment. All services are provided at our Los Gatos atelier unless otherwise arranged." },
          { title: "Appointments", body: "Consultations are complimentary and by appointment only. We ask that you provide reasonable notice if you need to reschedule." },
          { title: "Orders & Deposits", body: "Bespoke commissions require a deposit at the time of order, with the balance due upon completion. Details are provided during your consultation." },
          { title: "Contact", body: "For questions about these terms, please contact us at contact@byfino.com or (408) 641-0025." },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 300, color: "var(--ink)", marginBottom: "12px" }}>{section.title}</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9 }}>{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
