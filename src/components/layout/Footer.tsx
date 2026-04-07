import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: 'var(--ink)', padding: '80px 24px 40px' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          style={{ borderTop: '2px solid var(--earth)', paddingTop: '48px' }}>

          {/* Column 1 — Brand */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Logo color="var(--bone)" width={96} height={48} />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '14px',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(234,224,213,0.72)',
                marginBottom: '20px',
                lineHeight: 1.6,
              }}
            >
              Built for the room you&apos;re walking into.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: 'rgba(234,224,213,0.55)',
                lineHeight: 1.9,
              }}
            >
              <p>20 S Santa Cruz Ave · Suite 204b</p>
              <p>Los Gatos, CA 95030</p>
              <p style={{ marginTop: '8px' }}>
                <a
                  href="tel:+14086410025"
                  style={{ color: 'rgba(234,224,213,0.55)', textDecoration: 'none' }}
                >
                  (408) 641-0025
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@byfino.com"
                  style={{ color: 'rgba(234,224,213,0.55)', textDecoration: 'none' }}
                >
                  contact@byfino.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '8px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--tan)',
                marginBottom: '20px',
              }}
            >
              Navigate
            </div>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'The Experience', href: '/experience' },
                { label: 'Wedding Suits', href: '/wedding-suits' },
                { label: 'Our Fabrics', href: '/materials' },
                { label: 'Meet the Tailors', href: '/tailors' },
                { label: 'The Journal', href: '/blog' },
                { label: 'Book Appointment', href: '/book-appointment' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(234,224,213,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Serving */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '8px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--tan)',
                marginBottom: '20px',
              }}
            >
              Serving
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: 'rgba(234,224,213,0.55)',
                lineHeight: 2,
              }}
            >
              <p>Los Gatos · Saratoga</p>
              <p>San Jose · Campbell</p>
              <p>Palo Alto · Cupertino</p>
              <p>Gilroy · Salinas</p>
              <p>Silicon Valley</p>
              <p>Bay Area &amp; Beyond</p>
            </div>
          </div>

          {/* Column 4 — Hours */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '8px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--tan)',
                marginBottom: '20px',
              }}
            >
              Atelier Hours
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: 'rgba(234,224,213,0.55)',
                lineHeight: 2,
                marginBottom: '24px',
              }}
            >
              <p>7 Days a Week</p>
              <p>By Appointment Only</p>
            </div>
            <Link href="/book-appointment" className="btn-primary" style={{ padding: '12px 20px', fontSize: '9px' }}>
              Book Your Appointment →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          background: 'var(--teal)',
          padding: '14px 24px',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              color: 'rgba(234,224,213,0.42)',
              letterSpacing: '0.08em',
            }}
          >
            © 2025 By Fino Bespoke Tailoring · Los Gatos, California
          </p>
          <div className="flex gap-4">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '9px',
                  color: 'rgba(234,224,213,0.42)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
