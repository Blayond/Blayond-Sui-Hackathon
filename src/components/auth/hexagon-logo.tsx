// This component now renders the site logo from /assets/logo.png
// The filename "HexagonLogo" is kept to avoid breaking existing imports,
// but it no longer renders an SVG hexagon.

interface LogoProps {
  className?: string;
}

export default function HexagonLogo({ className }: LogoProps) {
  return (
    <img
      src="/assets/logo.png" // Next.js will serve this from the public/assets/ directory
      alt="Blayond Logo"
      className={className || "h-24 w-auto mx-auto"} // Default styling, can be overridden
      data-ai-hint="logo running fitness" // Added a hint for future AI image suggestions
    />
  );
}
