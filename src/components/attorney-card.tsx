import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Attorney } from "@/data/attorneys";

interface AttorneyCardProps {
  attorney: Attorney;
  onOpenProfile: (attorney: Attorney) => void;
  className?: string;
}

export function AttorneyCard({
  attorney,
  onOpenProfile,
  className,
}: AttorneyCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-[0.5px] border-border-custom bg-surface p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5",
        className
      )}
    >
      <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-muted">
        <Image
          src={attorney.image}
          alt={`Portrait of ${attorney.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-card font-semibold text-navy">
        {attorney.name}
      </h3>
      <p className="text-small text-gold">{attorney.title}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {attorney.practiceAreas.map((area) => (
          <span
            key={area}
            className="rounded-full bg-surface-muted px-2.5 py-0.5 text-caption text-text-muted"
          >
            {area}
          </span>
        ))}
      </div>
      <p className="mt-3 text-small text-text-muted">{attorney.experience}</p>
      <p className="mt-2 line-clamp-3 text-body text-text-soft">
        {attorney.bio}
      </p>
      <button
        onClick={() => onOpenProfile(attorney)}
        className="mt-4 text-small font-medium text-navy underline underline-offset-2 transition-colors hover:text-gold"
      >
        View Profile
      </button>
    </div>
  );
}
