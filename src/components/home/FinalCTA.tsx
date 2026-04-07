import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import { LogoMark } from '@/components/ui/Logo';
import Reveal from '@/components/motion/Reveal';
import StaggerText from '@/components/motion/StaggerText';
import HighlightText from '@/components/motion/HighlightText';

export default function FinalCTA() {
  return (
    <section
      className="grain-overlay"
      style={{
        background: 'var(--teal)',
        padding: '120px 24px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Centered watermark */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <LogoMark color="var(--bone)" size={560} />
      </div>

      <div className="max-w-3xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal style={{ display: 'flex', justifyContent: 'center' }}>
          <Eyebrow text="Begin your journey" />
        </Reveal>
        <StaggerText
          as="h2"
          text={'Your suit\nbegins here.'}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 7vw, 64px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--bone)',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}
        />
        <Reveal delay={150}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 300,
              color: 'var(--muted-on-teal)',
              lineHeight: 1.9,
              marginBottom: '28px',
            }}
          >
            Complimentary consultation · Private studio · Los Gatos
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 300,
              color: 'rgba(234,224,213,0.48)',
              lineHeight: 1.9,
              marginBottom: '40px',
            }}
          >
            We help clients book with confidence by aligning fabric, fit, and timeline around
            <HighlightText> the room they are walking into</HighlightText>.
          </p>
        </Reveal>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/book-appointment" className="btn-primary">
            Reserve Your Appointment
          </Link>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 300,
            color: 'rgba(234,224,213,0.3)',
            marginTop: '24px',
          }}
        >
          Or call{' '}
          <a
            href="tel:+14086410025"
            style={{ color: 'var(--tan)', textDecoration: 'none' }}
          >
            (408) 641-0025
          </a>{' '}
          · 7 days a week
        </p>
      </div>
    </section>
  );
}
