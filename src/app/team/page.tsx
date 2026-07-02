"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { AttorneyCard } from "@/components/attorney-card";
import { AttorneyProfileDrawer } from "@/components/attorney-profile-drawer";
import { FadeIn } from "@/components/fade-in";
import { attorneys, type Attorney } from "@/data/attorneys";

const practiceFilters = [
  "All",
  "Corporate Law",
  "M&A",
  "Employment",
  "IP",
  "Compliance",
];

export default function TeamPage() {
  const [filter, setFilter] = useState("All");
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openProfile = (attorney: Attorney) => {
    setSelectedAttorney(attorney);
    setDrawerOpen(true);
  };

  const filteredAttorneys =
    filter === "All"
      ? attorneys
      : attorneys.filter((a) =>
          a.practiceAreas.some((pa) =>
            pa.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Team"
              heading="Attorneys with business judgment"
              subtext="A focused legal team combining corporate experience, transaction discipline, and practical advisory judgment."
              align="left"
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Filters + Attorney Grid */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <FadeIn>
            <div className="mb-8 flex flex-wrap gap-2">
              {practiceFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-small font-medium transition-all duration-200 ${
                    filter === f
                      ? "bg-navy text-white shadow-card"
                      : "border border-[0.5px] border-border-custom bg-surface text-text-muted hover:border-navy/30 hover:text-navy"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Attorney Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAttorneys.map((attorney, i) => (
              <FadeIn key={attorney.id} delay={i * 0.05}>
                <AttorneyCard
                  attorney={attorney}
                  onOpenProfile={openProfile}
                />
              </FadeIn>
            ))}
          </div>

          {filteredAttorneys.length === 0 && (
            <div className="py-12 text-center text-body text-text-muted">
              No attorneys found for this practice area.
            </div>
          )}
        </div>
      </section>

      <AttorneyProfileDrawer
        attorney={selectedAttorney}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
