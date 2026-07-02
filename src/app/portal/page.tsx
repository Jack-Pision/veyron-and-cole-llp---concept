"use client";

import { useState, useEffect, useCallback } from "react";
import { AlertTriangle } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { PortalAccessCard } from "@/components/portal-access-card";
import { DocumentUploadForm } from "@/components/document-upload-form";
import { DocumentStatusTable } from "@/components/document-status-table";
import { MatterUpdates } from "@/components/matter-updates";
import { FadeIn } from "@/components/fade-in";
import {
  mockDocuments,
  matterUpdates,
  type UploadedDocument,
} from "@/data/documents";

const STORAGE_KEY = "veyron-cole-documents";

function getStoredDocuments(): UploadedDocument[] {
  if (typeof window === "undefined") return mockDocuments;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return mockDocuments;
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockDocuments));
  return mockDocuments;
}

function saveDocuments(docs: UploadedDocument[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(docs));
}

export default function PortalPage() {
  const [accessed, setAccessed] = useState(false);
  const [documents, setDocuments] = useState<UploadedDocument[]>(mockDocuments);
  const [ready, setReady] = useState(false);

  // Hydrate documents from localStorage on mount
  useEffect(() => {
    setDocuments(getStoredDocuments()); // eslint-disable-line react-hooks/set-state-in-effect
    setReady(true);
  }, []);

  const handleUpload = useCallback(
    (doc: {
      fileName: string;
      documentType: string;
      matterReference: string;
      notes: string;
    }) => {
      setDocuments((prev) => {
        const newDoc: UploadedDocument = {
          id: `doc-${Date.now()}`,
          fileName: doc.fileName,
          documentType: doc.documentType,
          matterReference: doc.matterReference,
          uploadedAt: new Date().toISOString(),
          status: "Pending",
        };
        const updated = [newDoc, ...prev];
        saveDocuments(updated);
        return updated;
      });
    },
    []
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Client Portal"
              heading="Client document portal"
              subtext="Submit matter documents through a secure-looking demo workflow. Do not upload real confidential information."
              align="left"
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Security Notice */}
      <section className="border-b border-warning/20 bg-warning/5 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="h-4 w-4 shrink-0 text-warning" />
          <p className="text-sm text-warning">
            This is a portfolio demo. Do not upload real legal, financial, or
            confidential documents.
          </p>
        </div>
      </section>

      {/* Portal Content */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!ready ? (
            <div className="py-12 text-center text-sm text-text-muted">
              Loading portal...
            </div>
          ) : !accessed ? (
            <div className="mx-auto max-w-md">
              <PortalAccessCard onAccess={() => setAccessed(true)} />
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              {/* Left: Upload + Table */}
              <div className="space-y-8">
                <FadeIn>
                  <div className="rounded-xl border border-[0.5px] border-border-custom bg-surface p-6 shadow-card">
                    <h3 className="mb-4 text-card font-semibold text-navy">
                      Upload Document
                    </h3>
                    <DocumentUploadForm onUpload={handleUpload} />
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div>
                    <h3 className="mb-4 text-card font-semibold text-navy">
                      Uploaded Documents
                    </h3>
                    <DocumentStatusTable documents={documents} />
                  </div>
                </FadeIn>
              </div>

              {/* Right: Matter Updates */}
              <FadeIn delay={0.15}>
                <div>
                  <MatterUpdates updates={matterUpdates} />
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
