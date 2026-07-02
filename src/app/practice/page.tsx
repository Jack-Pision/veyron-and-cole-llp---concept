"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Building2,
  Handshake,
  FileText,
  Users,
  Shield,
  ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/section-header";
import { FAQAccordion } from "@/components/faq-accordion";
import { FadeIn } from "@/components/fade-in";
import { practiceAreas } from "@/data/practices";
import { attorneys } from "@/data/attorneys";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Handshake,
  FileText,
  Users,
  Shield,
  ClipboardCheck,
};

function PracticeContent() {
  const searchParams = useSearchParams();
  const initialArea = searchParams.get("area");
  const defaultId =
    practiceAreas.find((p) => p.id === initialArea)?.id || practiceAreas[0].id;
  const [selectedId, setSelectedId] = useState(defaultId);
  const selected =
    practiceAreas.find((p) => p.id === selectedId) || practiceAreas[0];
  const relatedAttorneys = attorneys.filter((a) =>
    a.practiceAreas.some(
      (pa) =>
        selected.title.toLowerCase().includes(pa.toLowerCase()) ||
        pa.toLowerCase().includes(selected.title.toLowerCase())
    )
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="What We Do"
              heading="Practice areas for modern companies"
              subtext="Focused legal support for transactions, contracts, compliance, employment, and intellectual property matters."
              align="left"
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Practice Area Tabs + Detail */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            {/* Left: Practice Area List */}
            <div className="space-y-2">
              {practiceAreas.map((practice) => {
                const Icon = iconMap[practice.icon] || Building2;
                const isActive = practice.id === selectedId;
                return (
                  <button
                    key={practice.id}
                    onClick={() => setSelectedId(practice.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-small font-medium transition-all duration-200 ${
                      isActive
                        ? "border border-[0.5px] border-gold/30 bg-gold/5 text-navy shadow-card"
                        : "border border-transparent text-text-muted hover:bg-surface-muted/50 hover:text-navy"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 ${isActive ? "text-gold" : "text-text-soft"}`}
                    />
                    {practice.title}
                  </button>
                );
              })}
            </div>

            {/* Right: Practice Detail */}
            <div className="space-y-8">
              <FadeIn>
                <div>
                  <h2 className="font-serif text-page text-navy">
                    {selected.title}
                  </h2>
                  <p className="mt-3 text-body-lg text-text-muted">
                    {selected.summary}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div>
                  <h3 className="mb-3 text-caption font-semibold uppercase tracking-widest text-text-soft">
                    How We Help
                  </h3>
                  <ul className="space-y-2">
                    {selected.services.map((service) => (
                      <li
                        key={service}
                        className="flex gap-3 text-body text-text-main"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div>
                  <h3 className="mb-3 text-caption font-semibold uppercase tracking-widest text-text-soft">
                    Industries Served
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.industries.map((industry) => (
                      <span
                        key={industry}
                        className="rounded-full border border-[0.5px] border-border-custom bg-surface px-3 py-1 text-small text-text-muted"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {relatedAttorneys.length > 0 && (
                <FadeIn delay={0.15}>
                  <div>
                    <h3 className="mb-3 text-caption font-semibold uppercase tracking-widest text-text-soft">
                      Related Attorneys
                    </h3>
                    <div className="space-y-3">
                      {relatedAttorneys.map((attorney) => (
                        <div
                          key={attorney.id}
                          className="flex items-center gap-4 rounded-xl border border-[0.5px] border-border-custom bg-surface p-4 shadow-card"
                        >
                          <div className="h-10 w-10 shrink-0 rounded-full bg-navy/5" />
                          <div>
                            <p className="text-small font-medium text-navy">
                              {attorney.name}
                            </p>
                            <p className="text-caption text-text-muted">
                              {attorney.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}

              <FadeIn delay={0.2}>
                <div>
                  <h3 className="mb-3 text-caption font-semibold uppercase tracking-widest text-text-soft">
                    Frequently Asked Questions
                  </h3>
                  <FAQAccordion items={selected.faqs} />
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href="/#consultation"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-navy px-5 text-small font-medium text-white hover:bg-navy-soft transition-colors"
                >
                  Schedule Consultation
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PracticePage() {
  return (
    <Suspense>
      <PracticeContent />
    </Suspense>
  );
}
