import { RunnerIcon } from '@/components/icons/runner-icon';

export default function HexagonLogo() {
  return (
    <div className="relative mx-auto h-24 w-24">
      <svg viewBox="0 0 100 115.47" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <polygon
          points="50,0 93.3,28.87 93.3,86.6 50,115.47 6.7,86.6 6.7,28.87"
          fill="none" // Changed: Hexagon is not filled
          stroke="url(#logoGradient)" // Changed: Hexagon has a gradient stroke
          strokeWidth="5" // Added strokeWidth for visibility
        />
      </svg>
      <RunnerIcon
        gradientId="logoGradient" // Pass the gradient ID to the runner
        className="absolute inset-0 m-auto h-12 w-12" // Runner icon will be filled by the gradient
      />
    </div>
  );
}
