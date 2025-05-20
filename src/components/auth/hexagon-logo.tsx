
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

        {/* Hexagon Outline - using polygon with rounded line joins as an approximation */}
        <polygon
          points="50,5 91.5,28.87 91.5,86.6 50,110.47 8.5,86.6 8.5,28.87" // Points adjusted slightly for stroke
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="6" // Thickness of the hexagon outline
          strokeLinejoin="round" // Creates rounded corners for the polygon
        />

        {/* Runner and Circuit Elements - Filled with gradient */}
        <g fill="url(#logoGradient)">
          {/* Runner - Approximation based on the image */}
          {/* Cap */}
          <path d="M43 33 Q48 28 53 31 L56 38 L46 41 Z" />
          {/* Head */}
          <circle cx="48" cy="41" r="8" />
          {/* Body */}
          <path d="M49 49 L51 68 L58 66 L61 83 L53 86 L46 70 Z" />
          {/* Arms */}
          <path d="M45 54 Q38 58 39 64 L44 62 Z" /> {/* Left Arm */}
          <path d="M58 51 Q67 48 68 54 L62 57 Z" /> {/* Right Arm */}
          {/* Legs */}
          <path d="M53 84 Q48 95 42 93 L45 86 Z" /> {/* Left Leg */}
          <path d="M59 81 Q68 90 70 82 L65 80 Z" /> {/* Right Leg */}

          {/* Circuit Lines - Approximation based on the image */}
          <rect x="22" y="58" width="22" height="4" rx="2" />
          <rect x="22" y="66" width="19" height="4" rx="2" />
          <circle cx="32" cy="60" r="4" />
          <rect x="27" y="70" width="4" height="6" rx="2"/>
        </g>
      </svg>
    </div>
  );
}
