interface EyebrowProps {
  text: string;
  className?: string;
}

export default function Eyebrow({ text, className = '' }: EyebrowProps) {
  return (
    <div className={`eyebrow ${className}`}>
      <span className="eyebrow-line" />
      {text}
    </div>
  );
}
