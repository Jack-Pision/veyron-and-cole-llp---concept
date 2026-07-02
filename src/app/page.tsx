"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/section-header";
import { TrustStat } from "@/components/trust-stat";
import { PracticeCard } from "@/components/practice-card";
import { AttorneyCard } from "@/components/attorney-card";
import { ConsultationForm } from "@/components/consultation-form";
import { FadeIn } from "@/components/fade-in";
import { practiceAreas } from "@/data/practices";
import { attorneys } from "@/data/attorneys";
import { useState } from "react";
import { AttorneyProfileDrawer } from "@/components/attorney-profile-drawer";
import type { Attorney } from "@/data/attorneys";

export default function HomePage() {
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openProfile = (attorney: Attorney) => {
    setSelectedAttorney(attorney);
    setDrawerOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <FadeIn>
                <p className="mb-4 text-caption font-semibold uppercase tracking-[0.2em] text-gold">
                  Veyron & Cole LLP
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-serif text-hero text-white">
                  Corporate counsel{" "}
                  <em className="text-gold">for decisive</em> companies.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 max-w-lg text-body-lg text-white/60">
                  Veyron & Cole LLP advises founders, boards, investors, and
                  executive teams on complex business matters with clarity,
                  discretion, and speed.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#consultation"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-gold px-6 text-sm font-medium text-white transition-colors hover:bg-gold/90"
                  >
                    Schedule Consultation
                  </a>
                  <Link
                    href="/portal"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-[0.5px] border-white/20 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Client Document Portal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} direction="right">
              <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
                <Image
                  src="/images/hero-office.jpg"
                  alt="Premium corporate law firm office interior"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-b-[0.5px] border-border-custom bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <FadeIn><TrustStat value="18+" label="Years Partner Experience" /></FadeIn>
            <FadeIn delay={0.1}><TrustStat value="240+" label="Corporate Matters" /></FadeIn>
            <FadeIn delay={0.2}><TrustStat value="32" label="Cross-Border Transactions" /></FadeIn>
            <FadeIn delay={0.3}><TrustStat value="6" label="Core Practice Areas" /></FadeIn>
          </div>
        </div>
      </section>

      {/* Practice Preview */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Expertise"
              heading="Practice areas built for complex business"
              subtext="Focused legal support across the matters that matter most to growing companies."
            />
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((practice, i) => (
              <FadeIn key={practice.id} delay={i * 0.05}>
                <PracticeCard practice={practice} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Preview */}
      <section className="border-y border-y-[0.5px] border-border-custom bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Team"
              heading="Attorneys with business judgment"
              subtext="A focused legal team combining corporate experience, transaction discipline, and practical advisory judgment."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.slice(0, 3).map((attorney, i) => (
              <FadeIn key={attorney.id} delay={i * 0.1}>
                <AttorneyCard
                  attorney={attorney}
                  onOpenProfile={openProfile}
                />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-8 text-center">
              <Link
                href="/team"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-[0.5px] border-navy/20 px-5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                View Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Portal CTA */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <FadeIn>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <Scale className="h-6 w-6 text-gold" />
                </div>
                <h2 className="font-serif text-section text-white">
                  Secure document submission
                </h2>
                <p className="mt-3 max-w-md text-body-lg text-white/60">
                  Upload contracts, diligence files, employment documents, and
                  matter references through a clean demo portal.
                </p>
                <Link
                  href="/portal"
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-gold px-6 text-sm font-medium text-white transition-colors hover:bg-gold/90"
                >
                  Open Client Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl lg:block">
                <Image
                  src="/images/portal-visual.jpg"
                  alt="Secure document portal interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section
        id="consultation"
        className="bg-background py-20 sm:py-24 scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Get in Touch"
              heading="Schedule a consultation"
              subtext="Tell us about your legal needs and a member of our team will respond within one business day."
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 rounded-2xl border border-[0.5px] border-border-custom bg-surface p-6 shadow-card sm:p-8">
              <ConsultationForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Branding */}
      <section className="border-t border-t-[0.5px] border-border-custom bg-surface-muted/30 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-small text-text-muted">
            Designed & built by <span className="font-semibold text-navy">Jack Pision</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jack-Pision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-soft transition-colors hover:text-navy"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://x.com/Jack_pision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-soft transition-colors hover:text-navy"
              aria-label="X / Twitter"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
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
