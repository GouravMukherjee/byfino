const stats = [
  { number: '5★', label: 'Google Rated' },
  { number: '12+', label: 'Years of Craft' },
  { number: '30+', label: 'Measurements' },
  { number: '$2,400', label: 'Starting Price' },
];

export default function StatsBar() {
  return (
    <div style={{
      background: 'var(--ink)',
      padding: '0 24px',
      borderTop: '1px solid rgba(198,172,143,0.10)',
      borderBottom: '1px solid rgba(198,172,143,0.10)',
    }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center py-10"
            style={{
              borderRight:
                i < stats.length - 1
                  ? '1px solid rgba(198,172,143,0.08)'
                  : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--tan)',
                lineHeight: 1,
                marginBottom: '10px',
                letterSpacing: '-0.01em',
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '8px',
                letterSpacing: '0.20em',
                textTransform: 'uppercase',
                color: 'rgba(234,224,213,0.45)',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
