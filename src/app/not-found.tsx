import Link from "next/link";

export default function NotFound() {
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
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "120px", fontWeight: 300, color: "rgba(198,172,143,0.2)", lineHeight: 1, marginBottom: "24px" }}>
          404
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, fontStyle: "italic", color: "var(--bone)", lineHeight: 1.05, marginBottom: "16px" }}>
          This page wasn&apos;t found.
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.9, marginBottom: "40px" }}>
          Let&apos;s get you back to where you need to be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/book-appointment" className="btn-secondary">Book a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
