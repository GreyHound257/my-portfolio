import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function BrandMark({ size = 28, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8.8 6.5 2.5 14l6.3 7.5M19.2 6.5l6.3 7.5-6.3 7.5M16.5 4l-5 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.5c0-1 .1-1.6-.5-2.2 3.3-.4 6.7-1.6 6.7-7.3a5.6 5.6 0 0 0-1.5-3.9c.2-.5.7-2.3-.2-4 0 0-1.3-.4-4.3 1.5a14.8 14.8 0 0 0-7.8 0C4.4 0 3.1.4 3.1.4c-.9 1.7-.4 3.5-.2 4a5.6 5.6 0 0 0-1.5 3.9c0 5.7 3.4 6.9 6.7 7.3-.5.5-.6 1-.6 2.1V21"
        transform="translate(1.3 1.5) scale(.88)"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7M11.5 17v-7M11.5 13a3 3 0 0 1 6 0v4" />
      <circle cx="7.5" cy="7" r=".7" fill="currentColor" stroke="none" />
    </svg>
  );
}
