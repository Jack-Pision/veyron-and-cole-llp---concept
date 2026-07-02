import Link from "next/link";
import {
  Building2,
  Handshake,
  FileText,
  Users,
  Shield,
  ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { PracticeArea } from "@/data/practices";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Handshake,
  FileText,
  Users,
  Shield,
  ClipboardCheck,
};

interface PracticeCardProps {
  practice: PracticeArea;
  className?: string;
  linkToPage?: boolean;
}

export function PracticeCard({
  practice,
  className,
  linkToPage = true,
}: PracticeCardProps) {
  const Icon = iconMap[practice.icon] || Building2;

  const content = (
    <div
      className={cn(
        "group rounded-xl border border-[0.5px] border-border-custom bg-surface p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5",
        className
      )}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-card font-semibold text-navy">
        {practice.title}
      </h3>
      <p className="mt-2 text-body text-text-muted">
        {practice.summary}
      </p>
    </div>
  );

  if (linkToPage) {
    return (
      <Link href="/practice" className="block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
