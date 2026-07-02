"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/practice", label: "Practice" },
  { href: "/team", label: "Team" },
  { href: "/portal", label: "Portal" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-[0.5px] border-border-custom bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-semibold tracking-tight text-navy">
            Veyron & Cole
          </span>
          <span className="hidden text-xs tracking-widest text-text-soft sm:inline">
            LLP
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#consultation"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-xl bg-navy px-5 text-sm text-white hover:bg-navy-soft"
            )}
          >
            Schedule Consultation
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium text-text-muted hover:bg-muted">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-surface">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-semibold text-navy">
                  Veyron & Cole LLP
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-text-muted transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#consultation"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "mt-2 w-full rounded-xl bg-navy text-center text-white hover:bg-navy-soft"
                  )}
                >
                  Schedule Consultation
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
