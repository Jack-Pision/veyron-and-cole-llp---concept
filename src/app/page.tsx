"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/section-header";
import { TrustStat } from "@/components/trust-stat";
import { PracticeCard } from "@/components/practice-card";
import { AttorneyCard } from "@/components/attorney-card";
import { ConsultationForm } from "@/components/consultation-form";
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Veyron & Cole LLP
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[60px]">
                Corporate counsel for decisive companies.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
                Veyron & Cole LLP advises founders, boards, investors, and
                executive teams on complex business matters with clarity,
                discretion, and speed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-xl bg-gold px-6 text-white hover:bg-gold/90"
                  )}
                >
                  Schedule Consultation
                </a>
                <Link
                  href="/portal"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-xl border-white/20 px-6 text-white hover:bg-white/10"
                  )}
                >
                  Client Document Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-b-[0.5px] border-border-custom bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <TrustStat value="18+" label="Years Partner Experience" />
            <TrustStat value="240+" label="Corporate Matters" />
            <TrustStat value="32" label="Cross-Border Transactions" />
            <TrustStat value="6" label="Core Practice Areas" />
          </div>
        </div>
      </section>

      {/* Practice Preview */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Expertise"
            heading="Practice areas built for complex business"
            subtext="Focused legal support across the matters that matter most to growing companies."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((practice) => (
              <PracticeCard key={practice.id} practice={practice} />
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Preview */}
      <section className="border-y border-y-[0.5px] border-border-custom bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Team"
            heading="Attorneys with business judgment"
            subtext="A focused legal team combining corporate experience, transaction discipline, and practical advisory judgment."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.slice(0, 3).map((attorney) => (
              <AttorneyCard
                key={attorney.id}
                attorney={attorney}
                onOpenProfile={openProfile}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/team"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-xl border-navy/20 text-navy hover:bg-navy hover:text-white"
              )}
            >
              View Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Portal CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                <Scale className="h-6 w-6 text-gold" />
              </div>
              <h2 className="font-heading text-3xl font-semibold text-white">
                Secure document submission
              </h2>
              <p className="mt-3 max-w-md text-base text-white/60">
                Upload contracts, diligence files, employment documents, and
                matter references through a clean demo portal.
              </p>
              <Link
                href="/portal"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-6 inline-flex rounded-xl bg-gold px-6 text-white hover:bg-gold/90"
                )}
              >
                Open Client Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl lg:block">
              <Image
                src="/images/portal-visual.jpg"
                alt="Secure document portal interface"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section
        id="consultation"
        className="bg-background py-16 sm:py-20 scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get in Touch"
            heading="Schedule a consultation"
            subtext="Tell us about your legal needs and a member of our team will respond within one business day."
          />
          <div className="mt-10 rounded-2xl border border-[0.5px] border-border-custom bg-surface p-6 shadow-sm sm:p-8">
            <ConsultationForm />
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
