import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import { LogoMark } from '@/components/ui/Logo';

const tailors = [
  {
    role: 'Co-Founder',
    name: 'Julian Zaragoza',
    specialty: 'Timeless & Classic · 5 Years',
    bio: "Shaped by 1940s tailoring, classic cinema, and vintage suit books. Julian's work is guided by timeless design and traditional craftsmanship. At Fino, a suit should carry meaning and deliver that unmistakable moment when a client sees their vision realized.",
    quote: "True style is built not followed — and it never goes out of fashion.",
  },
  {
    role: 'Co-Founder',
    name: 'David Brenno',
    specialty: 'Purpose & Presence · 12 Years',
    bio: "David Brenno blends the discipline of Portuguese tradition with the expressive influence of Brazilian culture. His approach to menswear is guided by purpose, precision, and presence. At Fino, style is a language — where craftsmanship and confidence reflect who you are, not what you follow.",
    quote: "God beholds the heart; man judges the form. Therefore, be ever sharp.",
  },
];

export default function TailorsPreview() {
  return (
    <section className="grain-overlay" style={{ background: 'var(--teal)', padding: '96px 24px', position: 'relative' }}>
      {/* Watermark */}
      <div style={{
        position: 'absolute',
        right: '-4%',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.04,
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <LogoMark color="var(--bone)" size={480} />
      </div>

      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>
        <Eyebrow text="The craftsmen" />
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--bone)',
            lineHeight: 1.1,
            marginBottom: '64px',
          }}
        >
          Meet Julian &amp; David
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tailors.map((t) => (
            <div key={t.name}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--tan)',
                  marginBottom: '8px',
                }}
              >
                {t.role}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '32px',
                  fontWeight: 300,
                  color: 'var(--bone)',
                  marginBottom: '8px',
                  lineHeight: 1.1,
                }}
              >
                {t.name}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-on-teal)',
                  marginBottom: '20px',
                }}
              >
                {t.specialty}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'var(--muted-on-teal)',
                  lineHeight: 1.9,
                  marginBottom: '24px',
                }}
              >
                {t.bio}
              </p>
              <blockquote
                className="quote-border"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--bone)',
                  lineHeight: 1.75,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px' }}>
          <Link href="/tailors" className="btn-primary">
            Meet the Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
