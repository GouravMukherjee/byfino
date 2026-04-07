import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Fino Bespoke Tailoring",
  description: "Thank you for reaching out to Fino. We will be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div
      className="grain-overlay"
      style={{
        background: "var(--teal)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", zIndex: 2, maxWidth: "520px" }}>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--tan)",
            marginBottom: "24px",
          }}
        >
          Message received
        </div>
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
          Thank you.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            fontWeight: 300,
            color: "var(--muted-on-teal)",
            lineHeight: 1.9,
            marginBottom: "40px",
          }}
        >
          We&apos;ll be in touch within 24 hours. In the meantime, feel free to call us at{" "}
          <a href="tel:+14086410025" style={{ color: "var(--tan)", textDecoration: "none" }}>
            (408) 641-0025
          </a>
          .
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
