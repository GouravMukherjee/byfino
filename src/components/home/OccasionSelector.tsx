'use client';

import { useState } from 'react';
import Link from 'next/link';

const occasions = [
  {
    id: 'wedding',
    label: 'Wedding',
    title: 'Custom Wedding Suits',
    body: 'For the groom who understands that the suit matters as much as the vows. Groom and groomsmen, each fitted individually.',
    price: '$2,400',
    timeline: '3–4 month lead time recommended',
    cta: 'Book Wedding Consultation',
    notes: ['Photographs beautifully', 'Individual fitting for groom and party'],
  },
  {
    id: 'gala',
    label: 'Gala',
    title: 'Gala & Black Tie',
    body: "Dormeuil tuxedos and Holland & Sherry evening wear for Silicon Valley's most important evenings.",
    price: '$2,400',
    timeline: '2–3 months recommended',
    cta: 'Book Gala Consultation',
    notes: ['Sharper cloth selection', 'Built for black tie events'],
  },
  {
    id: 'corporate',
    label: 'Corporate',
    title: 'Corporate Wardrobe',
    body: 'Loro Piana Super 150s built for the boardroom. Command every room from San Jose to Palo Alto.',
    price: '$2,400',
    timeline: '6–8 weeks',
    cta: 'Book Corporate Consultation',
    notes: ['Boardroom-ready structure', 'Repeat wardrobe planning available'],
  },
  {
    id: 'casual',
    label: 'Casual',
    title: 'Casual Suiting',
    body: 'Unstructured blazers, linen, and sport coats for the professional who dresses with intention every day.',
    price: 'from $1,800',
    timeline: '4–6 weeks',
    cta: 'Book Casual Consultation',
    notes: ['Softer construction', 'Designed for frequent wear'],
  },
];

export default function OccasionSelector() {
  const [active, setActive] = useState(occasions[0]);

  return (
    <div style={{ padding: '40px 32px' }}>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '8px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(10,9,8,0.55)',
          marginBottom: '20px',
        }}
      >
        What brings you in?
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {occasions.map((o) => (
          <button
            key={o.id}
            onClick={() => setActive(o)}
            style={{
              padding: '8px 20px',
              border: '1px solid',
              borderColor: active.id === o.id ? 'var(--ink)' : 'rgba(10,9,8,0.15)',
              background: active.id === o.id ? 'var(--ink)' : 'transparent',
              color: active.id === o.id ? 'var(--bone)' : 'rgba(10,9,8,0.68)',
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Card */}
      <div
        key={active.id}
        style={{
          animation: 'fadeIn 0.25s ease',
          padding: '32px',
          border: 'var(--border-ink)',
          background: 'rgba(234,224,213,0.3)',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}
        >
          {active.title}
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
          {active.body}
        </p>

        {/* Price row */}
        <div className="flex items-end gap-3 mb-6">
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(10,9,8,0.58)',
            }}
          >
            Starting from
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '32px',
              fontWeight: 300,
              color: 'var(--tan)',
              lineHeight: 1,
            }}
          >
            {active.price}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            color: 'rgba(10,9,8,0.62)',
            letterSpacing: '0.08em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--tan)',
            }}
          />
          {active.timeline}
        </div>

        <div className="flex flex-wrap gap-2" style={{ marginBottom: '24px' }}>
          {active.notes.map((note) => (
            <div
              key={note}
              style={{
                padding: '8px 12px',
                border: '1px solid rgba(10,9,8,0.08)',
                background: 'rgba(255,255,255,0.38)',
                fontFamily: 'var(--font-sans)',
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(10,9,8,0.56)',
              }}
            >
              {note}
            </div>
          ))}
        </div>

        <Link href="/book-appointment" className="btn-book">
          {active.cta}
        </Link>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
