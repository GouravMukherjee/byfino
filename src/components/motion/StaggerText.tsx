'use client';

import { ElementType } from 'react';
import Reveal from './Reveal';

interface StaggerTextProps {
  as?: ElementType;
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  style?: React.CSSProperties;
}

export default function StaggerText({
  as: Tag = 'div',
  text,
  className = '',
  delay = 0,
  wordDelay = 48,
  style,
}: StaggerTextProps) {
  const parts = text.split('\n');

  return (
    <Reveal delay={delay} className="stagger-shell">
      <Tag className={className} style={style}>
        {parts.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`} className="stagger-line">
            {line.split(' ').map((word, wordIndex) => (
              <span
                key={`${word}-${wordIndex}`}
                className="stagger-word"
                style={{ transitionDelay: `${delay + (lineIndex * 5 + wordIndex) * wordDelay}ms` }}
              >
                <span>{word}&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </Tag>
    </Reveal>
  );
}
