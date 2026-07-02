interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 text-base leading-relaxed text-text-muted">
          {subtext}
        </p>
      )}
    </div>
  );
}
