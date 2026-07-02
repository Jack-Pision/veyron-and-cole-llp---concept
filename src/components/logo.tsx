import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export function Logo({ variant = "full", size = "md", dark = false }: LogoProps) {
  const textColor = dark ? "text-white" : "text-navy";
  const accentColor = dark ? "text-white/70" : "text-gold";

  const sizes = {
    sm: { icon: 28, text: "text-body", sub: "text-caption" },
    md: { icon: 34, text: "text-body-lg", sub: "text-small" },
    lg: { icon: 44, text: "text-section", sub: "text-body" },
  };

  const s = sizes[size];

  const ScalesIcon = () => (
    <svg
      width={s.icon}
      height={s.icon}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={textColor}
    >
      {/* Center pillar */}
      <line x1="16" y1="6" x2="16" y2="26" stroke="currentColor" strokeWidth="1.25" />
      {/* Base */}
      <line x1="10" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      {/* Top beam */}
      <line x1="6" y1="9" x2="26" y2="9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      {/* Left pan */}
      <path d="M6 9 L4 17 Q10 19 12 17 L10 9" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Right pan */}
      <path d="M22 9 L20 17 Q26 19 28 17 L26 9" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Top ornament */}
      <circle cx="16" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );

  if (variant === "mark") {
    return (
      <Link href="/" className="inline-flex items-center">
        <ScalesIcon />
      </Link>
    );
  }

  if (variant === "wordmark") {
    return (
      <Link href="/" className="inline-flex items-center gap-1.5">
        <span className={`font-serif font-semibold ${s.text} ${textColor} tracking-tight`}>
          Veyron & Cole
        </span>
        <span className={`${s.sub} font-medium ${accentColor} tracking-widest`}>
          LLP
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <ScalesIcon />
      <div className="flex flex-col leading-none">
        <span className={`font-serif font-semibold ${s.text} ${textColor} tracking-tight`}>
          Veyron & Cole
        </span>
        <span className={`${s.sub} font-medium ${accentColor} tracking-widest`}>
          LLP
        </span>
      </div>
    </Link>
  );
}
