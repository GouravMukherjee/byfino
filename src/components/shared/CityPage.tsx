import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import JsonLd from '@/components/shared/JsonLd';
import { siteConfig } from '@/lib/seo';

interface CityPageProps {
  city: string;
  slug: string;
  distance?: string;
  intro: string;
  h1: string;
  localEvents: string;
  faqCityQ: string;
  faqCityA: string;
}

export default function CityPage({ city, slug, distance, intro, h1, localEvents, faqCityQ, faqCityA }: CityPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: `${siteConfig.url}/${slug}`,
    telephone: siteConfig.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: city },
  };

  const services = [
    { title: "Custom Wedding Suits", body: "Bespoke wedding suits for grooms and groomsmen. Starting at $2,400.", href: "/wedding-suits" },
    { title: "Gala & Black Tie", body: "Dormeuil tuxedos and Holland & Sherry evening wear for the Bay Area's most important evenings.", href: "/experience" },
    { title: "Corporate Wardrobe", body: "Loro Piana Super 150s built for the boardroom. Command every room.", href: "/experience" },
    { title: "Casual Suiting", body: "Unstructured blazers and linen sport coats for the professional who dresses with intention.", href: "/experience" },
  ];

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="grain-overlay" style={{ background: "var(--teal)", padding: "160px 24px 96px", position: "relative" }}>
        <div className="max-w-4xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <Eyebrow text={`Serving ${city}`} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 400, fontStyle: "italic", color: "var(--bone)", lineHeight: 1.05, marginBottom: "24px" }}>
            {h1}
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.9, maxWidth: "480px", marginBottom: "40px" }}>
            {intro}
          </p>
          <Link href="/book-appointment" className="btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Why clients from this city choose Fino */}
      <section style={{ background: "var(--bone)", padding: "96px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow text={`Why ${city} clients choose Fino`} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: "var(--ink)", lineHeight: 1.1, marginBottom: "20px" }}>
                {city} men, meet your atelier.
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginBottom: "16px" }}>
                {localEvents}
              </p>
              {distance && (
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", border: "var(--border-tan)", marginTop: "8px" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--tan)" }}>
                    {distance} from downtown {city}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Private, appointment-only atelier",
                "Premium Italian & English fabrics",
                "30+ precise measurements per garment",
                "5-star rated · 7 days a week",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center" style={{ padding: "16px", border: "var(--border-ink)" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--tan)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--ink-on-bone)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "rgba(234,224,213,0.4)", padding: "80px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow text="Our services" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div className="service-card" style={{ padding: "36px", border: "var(--border-ink)", background: "var(--bone)" }}>
                  <div className="card-accent" style={{ marginBottom: "16px" }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 300, color: "var(--ink)", marginBottom: "10px" }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9 }}>{s.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bone)", padding: "80px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <Eyebrow text="Common questions" />
          <div style={{ borderTop: "var(--border-ink)" }}>
            {[
              { q: faqCityQ, a: faqCityA },
              { q: `How far is Fino from ${city}?`, a: distance ? `Fino is approximately ${distance} from downtown ${city}. We're located at 20 S Santa Cruz Ave, Suite 204b, Los Gatos, CA 95030 — minutes from Highway 17 and CA-85.` : `Fino is located in Los Gatos, conveniently accessible from ${city}. We're at 20 S Santa Cruz Ave, Suite 204b, Los Gatos, CA 95030.` },
              { q: "Is there parking near the atelier?", a: "Yes — downtown Los Gatos has ample street and garage parking within easy walking distance of our studio." },
            ].map((faq) => (
              <details key={faq.q} style={{ borderBottom: "var(--border-ink)", padding: "20px 0" }}>
                <summary style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 300, color: "var(--ink)", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                  {faq.q}
                  <span style={{ color: "var(--tan)" }}>+</span>
                </summary>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--ink-on-bone)", lineHeight: 1.9, marginTop: "12px" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain-overlay" style={{ background: "var(--teal)", padding: "80px 24px", textAlign: "center", position: "relative" }}>
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, fontStyle: "italic", color: "var(--bone)", lineHeight: 1.05, marginBottom: "20px" }}>
            Serving {city} by appointment
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--muted-on-teal)", lineHeight: 1.9, marginBottom: "32px" }}>
            7 days a week · Complimentary consultation · Los Gatos, CA
          </p>
          <Link href="/book-appointment" className="btn-primary">
            Reserve Your Appointment →
          </Link>
        </div>
      </section>
    </>
  );
}
