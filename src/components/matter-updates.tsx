import { Clock } from "lucide-react";

interface Update {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface MatterUpdatesProps {
  updates: Update[];
}

export function MatterUpdates({ updates }: MatterUpdatesProps) {
  return (
    <div className="rounded-xl border border-[0.5px] border-border-custom bg-surface p-5">
      <h3 className="mb-4 font-heading text-base font-semibold text-navy">
        Matter Updates
      </h3>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className="flex gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10">
              <Clock className="h-3 w-3 text-gold" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy">{update.title}</p>
              <p className="text-xs text-text-muted">{update.description}</p>
              <p className="mt-0.5 text-xs text-text-soft">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
