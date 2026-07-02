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
    sm: { mark: 28, text: "text-body", sub: "text-caption" },
    md: { mark: 34, text: "text-body-lg", sub: "text-small" },
    lg: { mark: 44, text: "text-section", sub: "text-body" },
  };

  const s = sizes[size];

  const Mark = () => (
    <svg
      width={s.mark}
      height={s.mark}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer square with subtle rounded corners */}
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="4"
        stroke="currentColor"
        strokeWidth="1"
        className={textColor}
        fill="none"
      />
      {/* VC Monogram */}
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        className={textColor}
        fontSize="18"
        fontFamily="var(--font-serif)"
        fontWeight="600"
        letterSpacing="-0.02em"
      >
        VC
      </text>
      {/* Thin horizontal line accent */}
      <line
        x1="10"
        y1="32"
        x2="34"
        y2="32"
        stroke="currentColor"
        strokeWidth="0.75"
        className={accentColor}
      />
    </svg>
  );

  if (variant === "mark") {
    return (
      <Link href="/" className="inline-flex items-center">
        <Mark />
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
      <Mark />
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
