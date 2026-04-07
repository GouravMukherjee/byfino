interface HighlightTextProps {
  children: string;
  className?: string;
}

export default function HighlightText({ children, className = '' }: HighlightTextProps) {
  return <span className={`highlight-text ${className}`.trim()}>{children}</span>;
}
