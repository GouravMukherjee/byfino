import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/motion/Reveal';
import StaggerText from '@/components/motion/StaggerText';

const reviews = [
  {
    name: 'Rafael I.',
    source: 'Google',
    text: 'I have never met two men more passionate about what they do. The shirts are the best quality and best fitting I have ever owned. Worth every dollar.',
    featured: true,
  },
  {
    name: 'Alexis M.',
    source: 'Google',
    text: 'We visited tailors in Los Gatos, Santana Row, Saratoga, and Campbell before finding Fino. No other shop matched the experience. Garments came back perfectly on the first delivery!',
    featured: true,
  },
  {
    name: 'CRMG',
    source: 'Google',
    text: 'David and his team traveled to Florida to provide an incredible personalized service. My Loro Piana wedding suit turned out perfect.',
    featured: false,
  },
  {
    name: 'Hector R.',
    source: 'Yelp',
    text: 'They took the time to walk me through different fabric options, explained what would work best, and gave thoughtful suggestions. Easily a 10/10.',
    featured: false,
  },
  {
    name: 'David Rodrigues',
    source: 'Google',
    text: 'Absolutely impressed with the tailoring services at Fino. Perfect fit, excellent fabric, and expert craftsmanship.',
    featured: false,
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--tan)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const featured = reviews.filter((r) => r.featured);
  const rest = reviews.filter((r) => !r.featured);

  return (
    <section style={{ background: 'var(--ink)', padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow text="Client voices" />
        </Reveal>
        <StaggerText
          as="h2"
          text="What they say"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--bone)',
            lineHeight: 1.05,
            marginBottom: '64px',
          }}
        />

        {/* Featured 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px" style={{ background: 'rgba(198,172,143,0.10)' }}>
          {featured.map((r, index) => (
            <Reveal
              key={r.name}
              delay={index * 100}
              style={{
                padding: '48px',
                background: 'rgba(234,224,213,0.04)',
              }}
            >
              <Stars />
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(17px, 2vw, 22px)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--bone)',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}
              >
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(234,224,213,0.35)',
                  }}
                >
                  {r.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    color: 'var(--tan)',
                    textTransform: 'uppercase',
                  }}
                >
                  {r.source}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Rest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-px" style={{ background: 'rgba(198,172,143,0.10)' }}>
          {rest.map((r, index) => (
            <Reveal
              key={r.name}
              delay={index * 80}
              style={{
                padding: '32px',
                background: 'rgba(234,224,213,0.02)',
              }}
            >
              <Stars />
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'rgba(234,224,213,0.70)',
                  lineHeight: 1.75,
                  marginBottom: '20px',
                }}
              >
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(234,224,213,0.48)',
                  }}
                >
                  {r.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    color: 'var(--tan)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {r.source}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
