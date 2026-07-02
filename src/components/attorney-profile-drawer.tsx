"use client";

import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";
import type { Attorney } from "@/data/attorneys";

interface AttorneyProfileDrawerProps {
  attorney: Attorney | null;
  open: boolean;
  onClose: () => void;
}

export function AttorneyProfileDrawer({
  attorney,
  open,
  onClose,
}: AttorneyProfileDrawerProps) {
  if (!attorney) return null;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-lg overflow-y-auto bg-surface shadow-modal transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-b-[0.5px] border-border-custom glass px-6 py-4">
          <h2 className="text-body font-semibold text-navy">
            Attorney Profile
          </h2>
          <button
            onClick={onClose}
            aria-label="Close profile"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-6 py-6">
          <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-muted">
            <Image
              src={attorney.image}
              alt={`Portrait of ${attorney.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 512px"
            />
          </div>
          <h3 className="font-serif text-page text-navy">
            {attorney.name}
          </h3>
          <p className="text-body text-gold">{attorney.title}</p>
          <p className="mt-1 text-small text-text-muted">
            {attorney.experience} experience
          </p>

          <div className="mt-6">
            <h4 className="mb-2 text-caption font-semibold uppercase tracking-widest text-text-soft">
              Practice Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {attorney.practiceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-navy/5 px-3 py-1 text-small text-navy"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-caption font-semibold uppercase tracking-widest text-text-soft">
              Biography
            </h4>
            <p className="text-body leading-relaxed text-text-muted">
              {attorney.bio}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-caption font-semibold uppercase tracking-widest text-text-soft">
              Education
            </h4>
            <ul className="space-y-1">
              {attorney.education.map((edu) => (
                <li key={edu} className="text-body text-text-muted">
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-caption font-semibold uppercase tracking-widest text-text-soft">
              Bar Admissions
            </h4>
            <ul className="space-y-1">
              {attorney.barAdmissions.map((bar) => (
                <li key={bar} className="text-body text-text-muted">
                  {bar}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-caption font-semibold uppercase tracking-widest text-text-soft">
              Representative Matters
            </h4>
            <ul className="space-y-2">
              {attorney.representativeMatters.map((matter) => (
                <li
                  key={matter}
                  className="flex gap-2 text-body text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {matter}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/#consultation"
            onClick={onClose}
            className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-lg bg-navy text-center text-sm font-medium text-white hover:bg-navy-soft transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
