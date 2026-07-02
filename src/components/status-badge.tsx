import { cn } from "@/lib/utils";

type Status = "Pending" | "Received" | "Reviewed";

const statusStyles: Record<Status, string> = {
  Pending: "bg-warning/10 text-warning border-warning/20",
  Received: "bg-navy/10 text-navy border-navy/20",
  Reviewed: "bg-success/10 text-success border-success/20",
};

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
