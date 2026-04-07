import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/motion/Reveal';
import StaggerText from '@/components/motion/StaggerText';

const services = [
  {
    num: '01',
    title: 'Custom Wedding Suits',
    body: 'For the groom who understands that the suit matters as much as the vows. Groom and groomsmen, each fitted individually.',
    href: '/wedding-suits',
  },
  {
    num: '02',
    title: 'Gala & Black Tie',
    body: "Dormeuil tuxedos and Holland & Sherry evening wear for Silicon Valley's most important evenings.",
    href: '/experience',
  },
  {
    num: '03',
    title: 'Corporate Wardrobe',
    body: 'Loro Piana Super 150s built for the boardroom. Command every room from San Jose to Palo Alto.',
    href: '/experience',
  },
  {
    num: '04',
    title: 'Casual Suiting',
    body: 'Unstructured blazers and linen sport coats for the professional who dresses with intention every day.',
    href: '/experience',
  },
];

export default function ServicesGrid() {
  return (
    <section style={{ background: 'var(--bone)', padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow text="What we do" />
        </Reveal>
        <StaggerText
          as="h2"
          text="Crafted for every occasion"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 54px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.0,
            marginBottom: '56px',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(10,9,8,0.08)' }}>
          {services.map((s, index) => (
            <Reveal key={s.num} delay={index * 90}>
              <div
                className="service-card"
                style={{
                  background: 'var(--bone)',
                  padding: '48px 40px',
                  cursor: 'pointer',
                }}
              >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '72px',
                  fontWeight: 300,
                  color: 'rgba(94,80,63,0.15)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {s.num}
              </div>
              <div className="card-accent" style={{ marginBottom: '20px' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '26px',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'var(--ink-on-bone)',
                  lineHeight: 1.9,
                  marginBottom: '24px',
                }}
              >
                {s.body}
              </p>
              <Link
                href={s.href}
                className="service-link"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '9px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--tan)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'gap 0.25s var(--ease-out-expo)',
                }}
              >
                Explore →
              </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
