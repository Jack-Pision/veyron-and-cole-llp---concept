"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-custom rounded-xl border border-[0.5px] border-border-custom bg-surface shadow-card">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="group flex w-full items-start gap-4 px-5 py-4 text-left text-small font-medium text-navy transition-colors hover:bg-surface-muted/50"
            aria-expanded={openIndex === i}
          >
            <span className="flex-1 pt-px">{item.question}</span>
            <ChevronDown
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0 text-text-soft transition-transform duration-200",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-body text-text-muted">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
