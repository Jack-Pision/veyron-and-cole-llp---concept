import { FileX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[0.5px] border-border-custom py-12 text-center">
      <FileX className="h-10 w-10 text-text-soft" />
      <h3 className="mt-4 text-card font-semibold text-navy">
        {title}
      </h3>
      {description && (
        <p className="mt-1 max-w-sm text-body text-text-muted">{description}</p>
      )}
    </div>
  );
}
