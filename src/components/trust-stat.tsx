import { cn } from "@/lib/utils";

interface TrustStatProps {
  value: string;
  label: string;
  className?: string;
}

export function TrustStat({ value, label, className }: TrustStatProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-text-muted">{label}</p>
    </div>
  );
}
