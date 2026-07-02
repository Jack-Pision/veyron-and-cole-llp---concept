"use client";

import { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PortalAccessCardProps {
  onAccess: () => void;
}

export function PortalAccessCard({ onAccess }: PortalAccessCardProps) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Please enter your client email.");
      return;
    }
    if (code !== "VC-DEMO") {
      setError("Invalid access code. Use VC-DEMO for this demo.");
      return;
    }
    onAccess();
  };

  return (
    <div className="rounded-xl border border-[0.5px] border-border-custom bg-surface p-6 shadow-card">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5">
        <Lock className="h-5 w-5 text-navy" />
      </div>
      <h3 className="text-card font-semibold text-navy">
        Client Access
      </h3>
      <p className="mt-1 text-body text-text-muted">
        Enter your credentials to access the document portal.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="portal-email">Client Email</Label>
          <Input
            id="portal-email"
            type="email"
            placeholder="client@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-border-custom"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="portal-code">Access Code</Label>
          <Input
            id="portal-code"
            placeholder="VC-DEMO"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border-border-custom font-mono"
          />
        </div>
        {error && <p className="text-small text-error">{error}</p>}
        <p className="text-caption text-text-soft">
          Demo code: <span className="font-mono font-medium">VC-DEMO</span>
        </p>
        <Button
          type="submit"
          className="w-full rounded-lg bg-navy text-white hover:bg-navy-soft"
        >
          Enter Portal
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
