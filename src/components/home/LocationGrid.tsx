import Eyebrow from '@/components/ui/Eyebrow';
import Link from 'next/link';

const cities = [
  { name: 'Los Gatos', tag: 'Home Atelier', distance: '', href: '/bespoke-tailor-los-gatos' },
  { name: 'San Jose', tag: 'Custom Suits', distance: '10 min drive', href: '/custom-suits-san-jose' },
  { name: 'Saratoga', tag: 'Bespoke Suiting', distance: '8 min drive', href: '/bespoke-suits-saratoga' },
  { name: 'Palo Alto', tag: 'Silicon Valley', distance: '25 min drive', href: '/custom-suits-palo-alto' },
  { name: 'Campbell', tag: 'Bay Area', distance: '12 min drive', href: '/custom-suits-campbell' },
  { name: 'Gilroy · Salinas', tag: 'South Bay', distance: '30–40 min drive', href: '/custom-suits-gilroy' },
];

export default function LocationGrid() {
  return (
    <section style={{ background: 'var(--bone)', padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <Eyebrow text="We serve your area" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 300,
                color: 'var(--ink)',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Bay Area&apos;s premier atelier
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 300,
                color: 'var(--ink-on-bone)',
                lineHeight: 1.9,
                marginBottom: '32px',
              }}
            >
              Minutes from Highway 17 and CA-85 — accessible from San Jose,
              Palo Alto, Saratoga, Cupertino, and throughout Silicon Valley.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: 'var(--ink-on-bone)',
                lineHeight: 1.9,
                marginBottom: '16px',
              }}
            >
              <p style={{ fontWeight: 500 }}>20 S Santa Cruz Ave · Suite 204b</p>
              <p>Los Gatos, CA 95030</p>
              <p style={{ marginTop: '8px' }}>
                <a
                  href="tel:+14086410025"
                  style={{ color: 'var(--tan)', textDecoration: 'none' }}
                >
                  (408) 641-0025
                </a>
              </p>
              <p>7 Days a Week · By Appointment Only</p>
            </div>
            {/* Map placeholder */}
            <div
              style={{
                marginTop: '24px',
                height: '240px',
                background: 'rgba(34,51,59,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.4!2d-121.9624!3d37.2358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE0JzA4LjkiTiAxMjHCsDU3JzQ0LjYiVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fino Bespoke Tailoring Location"
              />
            </div>
          </div>

          {/* Right — city grid */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="city-card"
                  style={{
                    padding: '24px',
                    border: 'var(--border-tan)',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '20px',
                      fontWeight: 300,
                      color: 'var(--ink)',
                      marginBottom: '4px',
                    }}
                  >
                    {city.name}
                  </div>
                  {city.distance && (
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '9px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(10,9,8,0.35)',
                        marginBottom: '8px',
                      }}
                    >
                      {city.distance}
                    </div>
                  )}
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      border: 'var(--border-tan)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '8px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--earth)',
                    }}
                  >
                    {city.tag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
