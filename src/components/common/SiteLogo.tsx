// This component renders the site logo from /public/assets/logo.png
// To update the logo across the app, replace the /public/assets/logo.png file.

interface LogoProps {
  className?: string;
}

export default function SiteLogo({ className }: LogoProps) {
  return (
    <img
      src="/assets/logo.png" // Next.js will serve this from the public/assets/ directory
      alt="Blayond Logo"
      className={className || "h-24 w-auto mx-auto"} // Default styling, can be overridden
      data-ai-hint="logo running fitness"
    />
  );
}
