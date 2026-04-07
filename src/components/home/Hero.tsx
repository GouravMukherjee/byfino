import Image from 'next/image';
import Link from 'next/link';
import OccasionSelector from './OccasionSelector';
import { LogoMark } from '@/components/ui/Logo';
import Reveal from '@/components/motion/Reveal';
import StaggerText from '@/components/motion/StaggerText';
import HighlightText from '@/components/motion/HighlightText';

export default function Hero() {
  return (
    <section>
      <div
        className="lg:hero-split"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          minHeight: 'max(760px, 100vh)',
        }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .lg\\:hero-split {
              grid-template-columns: minmax(0, 52fr) minmax(420px, 48fr);
            }
          }
        `}</style>

        <div
          className="grain-overlay"
          style={{
            background: 'var(--teal)',
            padding: 'clamp(96px, 10vw, 132px) clamp(28px, 5vw, 72px) clamp(56px, 7vw, 84px)',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '720px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-5%',
              bottom: '-10%',
              opacity: 0.04,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <LogoMark color="var(--bone)" size={420} />
          </div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '620px' }}>
            <Reveal delay={40}>
              <div className="eyebrow" style={{ marginBottom: '24px' }}>
                <span className="eyebrow-line" />
                Bespoke Tailoring · Los Gatos, California
              </div>
            </Reveal>

            <StaggerText
              as="h1"
              text={'The suit\nthat fits\nyour life.'}
              delay={100}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(50px, 6vw, 78px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--bone)',
                lineHeight: 0.94,
                letterSpacing: '-0.01em',
                marginBottom: '24px',
                maxWidth: '9.8ch',
              }}
            />

            <Reveal delay={180}>
              <div
                style={{
                  width: '52px',
                  height: '1px',
                  background: 'rgba(198,172,143,0.35)',
                  marginBottom: '24px',
                }}
              />
            </Reveal>

            <Reveal delay={240}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgba(234,224,213,0.72)',
                  lineHeight: 1.9,
                  maxWidth: '560px',
                  marginBottom: '32px',
                }}
              >
                Premier bespoke atelier in Los Gatos, California. Custom suits for weddings, galas,
                corporate life, and the moments that define you. Serving <HighlightText>San Jose,
                Saratoga, Palo Alto, Campbell</HighlightText> and the Bay Area.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: '24px' }}>
                <Link href="/book-appointment" className="btn-primary">
                  Reserve Your Appointment
                </Link>
                <Link href="/experience" className="btn-secondary">
                  Explore the Experience
                </Link>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: '28px' }}>
                {['Private studio consultation', '30+ measurements taken', 'By appointment only'].map((item) => (
                  <div
                    key={item}
                    className="trust-chip"
                    style={{
                      padding: '10px 14px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '9px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(234,224,213,0.72)',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={440}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '8px',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(234,224,213,0.45)',
                }}
              >
                <span>★★★★★ Google Rated</span>
                <span style={{ color: 'rgba(198,172,143,0.18)' }}>·</span>
                <span>12+ Years Crafting</span>
                <span style={{ color: 'rgba(198,172,143,0.18)' }}>·</span>
                <span>Timeline matched to your event</span>
              </div>
            </Reveal>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            minHeight: '720px',
            background: 'var(--ink)',
            overflow: 'hidden',
            borderLeft: '1px solid rgba(198,172,143,0.10)',
          }}
        >
          <Image
            src="/images/hero/hero-suit-fitting.jpg"
            alt="Tailor adjusting a bespoke suit during a fitting"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'saturate(0.86) contrast(1.03) brightness(0.82)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(10,9,8,0.06) 0%, rgba(10,9,8,0.18) 42%, rgba(10,9,8,0.52) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: '22px',
              border: '1px solid rgba(234,224,213,0.14)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '28px',
              bottom: '28px',
              maxWidth: '320px',
              padding: '18px 20px',
              background: 'rgba(10,9,8,0.38)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234,224,213,0.14)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '9px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(234,224,213,0.58)',
                marginBottom: '10px',
              }}
            >
              The fitting
            </div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: 300,
                lineHeight: 1.35,
                color: 'var(--bone)',
              }}
            >
              Measured, adjusted, and shaped around the man wearing it.
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bone)', padding: '28px 24px 0' }}>
        <div className="max-w-6xl mx-auto">
          <OccasionSelector />
        </div>
      </div>
    </section>
  );
}
