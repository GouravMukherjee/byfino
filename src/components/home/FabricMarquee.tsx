'use client';

import Link from 'next/link';
import { useState } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/motion/Reveal';
import StaggerText from '@/components/motion/StaggerText';
import HighlightText from '@/components/motion/HighlightText';

const fabrics = [
  {
    name: 'Loro Piana',
    region: 'Italy',
    profile: 'Soft drape and quiet authority for executive wardrobes and destination weddings.',
    ideal: 'Ideal for: all-season suiting',
  },
  {
    name: 'Dormeuil',
    region: 'France / England',
    profile: 'A sharper hand with evening polish for black tie and event dressing.',
    ideal: 'Ideal for: tuxedos and gala tailoring',
  },
  {
    name: 'Holland & Sherry',
    region: 'England',
    profile: 'Classic British structure with depth, weight, and a beautifully formal finish.',
    ideal: 'Ideal for: boardroom and ceremonial suits',
  },
  {
    name: 'Scabal',
    region: 'Belgium / England',
    profile: 'Luxury cloths with stronger texture and statement character without losing refinement.',
    ideal: 'Ideal for: distinctive occasion suiting',
  },
  {
    name: 'Piacenza',
    region: 'Italy',
    profile: 'Fluid, elegant cloths for men who want softness and ease in the silhouette.',
    ideal: 'Ideal for: lightweight tailoring',
  },
  {
    name: 'Fox Brothers',
    region: 'England',
    profile: 'Historic flannels and rich texture for clients drawn to heritage menswear.',
    ideal: 'Ideal for: autumn and winter wardrobes',
  },
];

export default function FabricMarquee() {
  const [active, setActive] = useState(fabrics[0]);

  return (
    <section className="fabric-aura" style={{ background: 'var(--bone)', padding: '88px 24px', position: 'relative' }}>
      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div>
            <Reveal>
              <Eyebrow text="Premium Italian & English Fabrics" />
            </Reveal>
            <StaggerText
              as="h2"
              text="Choose the cloth before we shape the suit"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(34px, 5vw, 52px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.04,
                marginBottom: '20px',
                maxWidth: '640px',
              }}
            />
            <Reveal delay={120} style={{ maxWidth: '560px', marginBottom: '36px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'var(--ink-on-bone)',
                  lineHeight: 1.9,
                }}
              >
                We curate cloth by season, event, and silhouette. Instead of overwhelming clients with swatches,
                we help narrow the field toward fabrics that match <HighlightText>how the garment should move, photograph, and age</HighlightText>.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fabrics.map((fabric, index) => (
                <Reveal key={fabric.name} delay={index * 70}>
                  <button
                    type="button"
                    className={`fabric-card ${active.name === fabric.name ? 'is-active' : ''}`}
                    onMouseEnter={() => setActive(fabric)}
                    onFocus={() => setActive(fabric)}
                    onClick={() => setActive(fabric)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '20px 22px',
                      border: '1px solid rgba(10,9,8,0.08)',
                      background: 'rgba(234,224,213,0.72)',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '24px',
                        fontWeight: 300,
                        color: 'var(--ink)',
                        lineHeight: 1.1,
                        marginBottom: '6px',
                      }}
                    >
                      {fabric.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '9px',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'rgba(10,9,8,0.46)',
                      }}
                    >
                      {fabric.region}
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={180}>
            <div
              style={{
                padding: '32px',
                border: '1px solid rgba(198,172,143,0.24)',
                background: 'rgba(255,255,255,0.42)',
                minHeight: '100%',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(10,9,8,0.42)',
                  marginBottom: '16px',
                }}
              >
                Current selection
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--earth)',
                  lineHeight: 1.02,
                  marginBottom: '16px',
                }}
              >
                {active.name}
              </div>
              <div
                style={{
                  width: '56px',
                  height: '1px',
                  background: 'rgba(198,172,143,0.45)',
                  marginBottom: '18px',
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'var(--ink-on-bone)',
                  lineHeight: 1.95,
                  marginBottom: '22px',
                }}
              >
                {active.profile}
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--tan)',
                  marginBottom: '28px',
                }}
              >
                {active.ideal}
              </div>
              <div
                style={{
                  padding: '18px 20px',
                  background: 'rgba(34,51,59,0.92)',
                  color: 'var(--bone)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(234,224,213,0.52)',
                    marginBottom: '10px',
                  }}
                >
                  Why this converts
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    fontWeight: 300,
                    color: 'rgba(234,224,213,0.82)',
                    lineHeight: 1.9,
                  }}
                >
                  Visitors can start to imagine their suit through occasion and cloth, which creates
                  higher booking intent than a passive logo marquee.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} style={{ marginTop: '36px' }}>
          <Link
            href="/materials"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--tan)',
              textDecoration: 'none',
            }}
          >
            Explore Our Fabrics →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
