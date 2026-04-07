'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Logo, { LogoMark } from '@/components/ui/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  pathname: string;
}

export default function MobileMenu({ isOpen, onClose, links, pathname }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--teal)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 32px 40px',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div style={{
        position: 'absolute',
        right: -40,
        bottom: -40,
        opacity: 0.04,
        pointerEvents: 'none',
      }}>
        <LogoMark color="var(--bone)" size={320} />
      </div>

      {/* Header row */}
      <div className="flex justify-between items-center" style={{ marginBottom: '48px' }}>
        <Logo color="var(--bone)" width={72} height={36} />
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            color: 'var(--tan)',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: '8px',
            transition: 'opacity 0.2s ease',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col" style={{ gap: '2px' }}>
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 8vw, 46px)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.25,
              color: pathname === link.href ? 'var(--tan)' : 'var(--bone)',
              textDecoration: 'none',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity 0.45s ease ${i * 0.07 + 0.08}s, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.07 + 0.08}s`,
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(198,172,143,0.08)',
              display: 'block',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book-appointment"
          onClick={onClose}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 8vw, 46px)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.25,
            color: 'var(--tan)',
            textDecoration: 'none',
            paddingTop: '20px',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 0.45s ease ${links.length * 0.07 + 0.08}s, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${links.length * 0.07 + 0.08}s`,
            display: 'block',
          }}
        >
          Book Appointment →
        </Link>
      </nav>

      {/* Bottom info */}
      <div
        className="mt-auto"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          letterSpacing: '0.14em',
          color: 'rgba(234,224,213,0.3)',
          lineHeight: 2,
          textTransform: 'uppercase',
        }}
      >
        <p>(408) 641-0025</p>
        <p>Los Gatos, CA · By Appointment</p>
      </div>
    </div>
  );
}
