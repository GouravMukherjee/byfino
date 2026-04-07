import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import BookingForm from "@/components/shared/BookingForm";
import JsonLd from "@/components/shared/JsonLd";
import { contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book Your Consultation | Fino Bespoke Tailoring Los Gatos",
  description:
    "Book a complimentary consultation at Fino's Los Gatos atelier. Custom suits by appointment, 7 days a week. Serving San Jose, Saratoga, Palo Alto and the Bay Area.",
  alternates: { canonical: "https://byfino.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />

      <section style={{ paddingTop: "100px", minHeight: "100vh", background: "var(--bone)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <Eyebrow text="Get in touch" />
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 300,
                  color: "var(--ink)",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                }}
              >
                Begin your consultation
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--ink-on-bone)",
                  lineHeight: 1.9,
                  marginBottom: "40px",
                  maxWidth: "420px",
                }}
              >
                Book a complimentary in-person consultation at our Los Gatos atelier.
                We&apos;re available 7 days a week by appointment.
              </p>

              {/* Address block */}
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "var(--ink-on-bone)",
                  lineHeight: 2,
                  marginBottom: "32px",
                  padding: "24px",
                  border: "var(--border-ink)",
                }}
              >
                <p style={{ fontWeight: 500, marginBottom: "4px" }}>20 S Santa Cruz Ave · Suite 204b</p>
                <p>Los Gatos, CA 95030</p>
                <p style={{ marginTop: "12px" }}>
                  <a href="tel:+14086410025" style={{ color: "var(--tan)", textDecoration: "none" }}>
                    (408) 641-0025
                  </a>
                </p>
                <p>
                  <a href="mailto:contact@byfino.com" style={{ color: "var(--tan)", textDecoration: "none" }}>
                    contact@byfino.com
                  </a>
                </p>
                <p style={{ marginTop: "12px", color: "rgba(10,9,8,0.5)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  7 Days a Week · By Appointment
                </p>
              </div>

              {/* Map */}
              <div style={{ height: "300px", overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.4!2d-121.9624!3d37.2358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE0JzA4LjkiTiAxMjHCsDU3JzQ0LjYiVw!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fino Bespoke Tailoring — Los Gatos"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
