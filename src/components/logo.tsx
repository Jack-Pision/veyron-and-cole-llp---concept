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
        xmlns="http://www.w3.org/2000/svg"
        className={textColor}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
