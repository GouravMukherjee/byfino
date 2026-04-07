import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fino Bespoke Tailoring",
  description: "Privacy Policy for Fino Bespoke Tailoring.",
};

export default function PrivacyPage() {
  return (
    <section style={{ background: "var(--bone)", paddingTop: "120px", paddingBottom: "96px", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "12px" }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(10,9,8,0.4)", textTransform: "uppercase", marginBottom: "48px" }}>
          Last updated: January 2025
        </p>
        {[
          { title: "Information We Collect", body: "We collect information you provide directly to us, such as your name, email address, phone number, and message when you contact us through our website or book a consultation." },
          { title: "How We Use Your Information", body: "We use the information we collect to respond to your inquiries, schedule consultations, and communicate with you about our services. We do not sell or share your personal information with third parties." },
          { title: "Cookies", body: "Our website uses cookies for analytics purposes (Google Analytics 4) to understand how visitors interact with our site. You may opt out of analytics tracking at any time." },
          { title: "Contact Us", body: "If you have questions about this Privacy Policy, please contact us at contact@byfino.com or by phone at (408) 641-0025." },
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
