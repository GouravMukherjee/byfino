'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'The Experience', href: '/experience' },
  { label: 'Wedding Suits', href: '/wedding-suits' },
  { label: 'Our Fabrics', href: '/materials' },
  { label: 'Meet the Tailors', href: '/tailors' },
  { label: 'The Journal', href: '/blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'var(--teal)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(198,172,143,0.12)' : 'none',
          height: '68px',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          backdropFilter: scrolled ? 'none' : 'none',
        }}
      >
        <div
          className="max-w-7xl mx-auto h-full flex items-center justify-between"
          style={{ padding: '0 clamp(20px, 4vw, 48px)' }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Fino — home"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <Logo
              color="var(--bone)"
              width={104}
              height={52}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center" style={{ gap: 'clamp(20px, 3vw, 36px)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  color: pathname === link.href ? 'var(--tan)' : 'rgba(234,224,213,0.62)',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                  paddingBottom: pathname === link.href ? '2px' : '0',
                  borderBottom: pathname === link.href ? '1px solid var(--tan)' : 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/book-appointment"
              className="hidden lg:inline-block btn-primary"
              style={{ padding: '10px 24px', fontSize: '9px' }}
            >
              Book Appointment
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden cursor-pointer p-2 flex flex-col justify-center gap-[6px]"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{ background: 'none', border: 'none' }}
            >
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--bone)' }} />
              <span style={{ display: 'block', width: '16px', height: '1px', background: 'var(--bone)' }} />
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--bone)' }} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
