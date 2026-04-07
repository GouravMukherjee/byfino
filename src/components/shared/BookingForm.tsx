'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  occasion: string;
  eventDate?: string;
  referral?: string;
  message: string;
}

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'transparent',
    border: '1px solid rgba(10,9,8,0.15)',
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: 300,
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: '9px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    color: 'rgba(10,9,8,0.5)',
    display: 'block',
    marginBottom: '6px',
  };

  const errorStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    color: '#c0392b',
    marginTop: '4px',
  };

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '48px',
          textAlign: 'center',
          background: 'rgba(198,172,143,0.1)',
          border: '1px solid rgba(198,172,143,0.3)',
        }}
      >
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px' }}>
          Thank you.
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: 'var(--ink-on-bone)', lineHeight: 1.9 }}>
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label style={labelStyle}>First Name *</label>
          <input
            {...register('firstName', { required: 'Required' })}
            style={inputStyle}
            placeholder="Julian"
          />
          {errors.firstName && <p style={errorStyle}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label style={labelStyle}>Last Name *</label>
          <input
            {...register('lastName', { required: 'Required' })}
            style={inputStyle}
            placeholder="Smith"
          />
          {errors.lastName && <p style={errorStyle}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label style={labelStyle}>Email *</label>
        <input
          {...register('email', {
            required: 'Required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
          })}
          type="email"
          style={inputStyle}
          placeholder="you@email.com"
        />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label style={labelStyle}>Phone</label>
        <input {...register('phone')} type="tel" style={inputStyle} placeholder="(408) 000-0000" />
      </div>

      <div className="mb-4">
        <label style={labelStyle}>Occasion *</label>
        <select {...register('occasion', { required: 'Required' })} style={{ ...inputStyle, cursor: 'pointer' }}>
          <option value="">Select occasion</option>
          <option value="Wedding">Wedding</option>
          <option value="Gala">Gala / Black Tie</option>
          <option value="Corporate">Corporate</option>
          <option value="Casual">Casual Suiting</option>
          <option value="Other">Other</option>
        </select>
        {errors.occasion && <p style={errorStyle}>{errors.occasion.message}</p>}
      </div>

      <div className="mb-4">
        <label style={labelStyle}>Event Date (optional)</label>
        <input {...register('eventDate')} type="date" style={inputStyle} />
      </div>

      <div className="mb-4">
        <label style={labelStyle}>How did you hear about us?</label>
        <select {...register('referral')} style={{ ...inputStyle, cursor: 'pointer' }}>
          <option value="">Select...</option>
          <option value="Google">Google</option>
          <option value="Yelp">Yelp</option>
          <option value="Instagram">Instagram</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label style={labelStyle}>Message *</label>
        <textarea
          {...register('message', { required: 'Required' })}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Tell us about your occasion and what you're looking for..."
        />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <p style={{ ...errorStyle, marginBottom: '16px', fontSize: '12px' }}>
          Something went wrong. Please try again or call us at (408) 641-0025.
        </p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === 'loading'}
        style={{ width: '100%', padding: '16px', fontSize: '10px' }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          color: 'rgba(10,9,8,0.35)',
          marginTop: '12px',
          textAlign: 'center',
          lineHeight: 1.7,
        }}
      >
        Your information is never shared. We respond within 24 hours.
      </p>
    </form>
  );
}
