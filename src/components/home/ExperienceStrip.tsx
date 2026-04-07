import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/motion/Reveal';
import StaggerText from '@/components/motion/StaggerText';
import HighlightText from '@/components/motion/HighlightText';

const steps = [
  {
    num: '01',
    title: 'Welcome to the Studio',
    body: 'Coffee, conversation, and intention. Step into our Los Gatos atelier and leave the outside world behind.',
  },
  {
    num: '02',
    title: 'Consult & Design',
    body: 'Over 30 precise measurements. Silhouette, lapels, shoulder structure, fabric — every choice is yours.',
  },
  {
    num: '03',
    title: 'The Craft',
    body: 'Weeks of skilled handwork. Canvas shaped to your body. Pick stitching, buttonholes — all by hand.',
  },
  {
    num: '04',
    title: 'The Reveal',
    body: 'Your final fitting. Every line clean, every proportion balanced. Made for no one else.',
  },
];

export default function ExperienceStrip() {
  return (
    <section className="grain-overlay" style={{ background: 'var(--teal)', padding: '96px 24px', position: 'relative' }}>
      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <Eyebrow text="The process" />
        </Reveal>
        <StaggerText
          as="h2"
          text="From first fitting to final reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--bone)',
            lineHeight: 1.04,
            marginBottom: '18px',
            maxWidth: '720px',
          }}
        />
        <Reveal delay={140} style={{ maxWidth: '620px', marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 300,
              color: 'var(--muted-on-teal)',
              lineHeight: 1.9,
            }}
          >
            Every consultation is structured to lower uncertainty and increase confidence. We guide fabric,
            fit, and timing around <HighlightText>your event date, your silhouette, and how you want to be remembered</HighlightText>.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 90}
              style={{
                padding: '40px 32px',
                borderRight:
                  i < steps.length - 1
                    ? '1px solid rgba(198,172,143,0.12)'
                    : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '52px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(198,172,143,0.15)',
                  lineHeight: 1,
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {step.num}
              </div>
              <div style={{
                width: '20px',
                height: '1px',
                background: 'var(--tan)',
                opacity: 0.45,
                marginBottom: '18px',
              }} />
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '21px',
                  fontWeight: 300,
                  color: 'var(--bone)',
                  lineHeight: 1.2,
                  marginBottom: '14px',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 300,
                  color: 'var(--muted-on-teal)',
                  lineHeight: 1.9,
                }}
              >
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="flex flex-col sm:flex-row items-center gap-6 mt-16"
          style={{ borderTop: '1px solid rgba(198,172,143,0.12)', paddingTop: '48px' }}
        >
          <Link href="/book-appointment" className="btn-primary">
            Book Your Consultation →
          </Link>
          <a
            href="tel:+14086410025"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 300,
              color: 'var(--muted-on-teal)',
              textDecoration: 'none',
            }}
          >
            Questions? Call (408) 641-0025
          </a>
        </Reveal>
      </div>
    </section>
  );
}
