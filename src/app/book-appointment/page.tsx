import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import BookingForm from "@/components/shared/BookingForm";

export const metadata: Metadata = {
  title: "Reserve Your Consultation | Fino Bespoke Tailoring Los Gatos",
  description:
    "Reserve your complimentary bespoke consultation at Fino in Los Gatos. Custom suits by appointment, 7 days a week. Serving the Bay Area.",
  alternates: { canonical: "https://byfino.com/book-appointment" },
};

export default function BookAppointmentPage() {
  return (
    <section style={{ background: "var(--bone)", paddingTop: "100px", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <div
          className="grain-overlay"
          style={{ background: "var(--teal)", padding: "64px", marginBottom: "64px", textAlign: "center", position: "relative" }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <Eyebrow text="Complimentary consultation" />
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 6vw, 60px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--bone)",
                lineHeight: 1.05,
                marginBottom: "16px",
              }}
            >
              Reserve your consultation
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--muted-on-teal)" }}>
              Complimentary · Private · Los Gatos
            </p>
          </div>
        </div>

        {/* Two options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Call */}
          <div style={{ padding: "40px", border: "var(--border-ink)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "16px" }}>
              Option A
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 300, color: "var(--ink)", marginBottom: "12px" }}>Call Us</h2>
            <a
              href="tel:+14086410025"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "32px",
                fontWeight: 300,
                color: "var(--tan)",
                textDecoration: "none",
                display: "block",
                marginBottom: "8px",
              }}
            >
              (408) 641-0025
            </a>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "rgba(10,9,8,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              7 Days a Week
            </p>
          </div>

          {/* Form */}
          <div style={{ padding: "40px", border: "var(--border-ink)" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tan)", marginBottom: "16px" }}>
              Option B
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 300, color: "var(--ink)", marginBottom: "16px" }}>Complete the Form</h2>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
