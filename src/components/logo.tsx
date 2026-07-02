import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md";
  dark?: boolean;
}

export function Logo({ size = "sm", dark = false }: LogoProps) {
  const textColor = dark ? "text-white" : "text-navy";
  const subColor = dark ? "text-white/60" : "text-text-soft";

  const iconSize = size === "sm" ? 18 : 22;

  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={textColor}
        aria-hidden="true"
      >
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="5" y1="7" x2="19" y2="7" />
        <path d="M5 7 L3.5 13 Q8 14.5 10.5 13 L9 7" />
        <path d="M15 7 L13.5 13 Q18 14.5 20.5 13 L19 7" />
      </svg>
      <span className={`font-semibold tracking-tight ${size === "sm" ? "text-body" : "text-body-lg"} ${textColor}`}>
        Veyron & Cole
      </span>
      <span className={`${size === "sm" ? "text-caption" : "text-small"} font-medium tracking-widest ${subColor}`}>
        LLP
      </span>
    </Link>
  );
}
