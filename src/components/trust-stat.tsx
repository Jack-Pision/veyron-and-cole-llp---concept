import { cn } from "@/lib/utils";

interface TrustStatProps {
  value: string;
  label: string;
  className?: string;
}

export function TrustStat({ value, label, className }: TrustStatProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="font-serif text-page text-navy">{value}</p>
      <p className="mt-1 text-small text-text-muted">{label}</p>
    </div>
  );
}
