interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className={`mb-3 text-caption font-semibold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-section ${light ? "text-white" : "text-navy"}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`mt-4 text-body-lg ${light ? "text-white/60" : "text-text-muted"}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
