import type { SVGProps } from 'react';

export function RunnerIcon({
  gradientId,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { gradientId?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={gradientId ? `url(#${gradientId})` : "currentColor"}
      className={className}
      {...props}
    >
      {/* Original paths, now filled instead of stroked */}
      <circle cx="12" cy="4" r="2" />
      <path d="M10.2 9.8l-1.2 3.4-.9-2.4-2.6 2.6" />
      <path d="M15.5 11.3L14 16l-2.2-1.3" />
      <path d="m17.8 10.2 1.7-2.2-2.2-1.7-2.3 2.2" />
      <path d="M8.5 12.5l-2.5 2.5 2.5 2.5" />
      <path d="M12 18l1-2-1.6-1.4" />
    </svg>
  );
}
