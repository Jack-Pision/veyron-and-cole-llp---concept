import { StatusBadge } from "@/components/status-badge";
import { EmptyState } from "@/components/empty-state";
import type { UploadedDocument } from "@/data/documents";

interface DocumentStatusTableProps {
  documents: UploadedDocument[];
}

export function DocumentStatusTable({ documents }: DocumentStatusTableProps) {
  if (documents.length === 0) {
    return (
      <EmptyState
        title="No documents uploaded"
        description="Upload your first document using the form above."
      />
    );
  }

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-[0.5px] border-border-custom bg-surface shadow-card md:block">
        <table className="w-full text-left text-small">
          <thead>
            <tr className="border-b border-b-[0.5px] border-border-custom bg-surface-muted/50">
              <th className="px-4 py-3 font-medium text-text-muted">File</th>
              <th className="px-4 py-3 font-medium text-text-muted">Type</th>
              <th className="px-4 py-3 font-medium text-text-muted">Matter</th>
              <th className="px-4 py-3 font-medium text-text-muted">Date</th>
              <th className="px-4 py-3 font-medium text-text-muted">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-custom">
            {documents.map((doc) => (
              <tr key={doc.id} className="transition-colors hover:bg-surface-muted/30">
                <td className="px-4 py-3 font-medium text-navy">
                  {doc.fileName}
                </td>
                <td className="px-4 py-3 text-text-muted">{doc.documentType}</td>
                <td className="px-4 py-3 font-mono text-caption text-text-muted">
                  {doc.matterReference}
                </td>
                <td className="px-4 py-3 text-text-muted">
                  {new Date(doc.uploadedAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={doc.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="space-y-3 md:hidden">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl border border-[0.5px] border-border-custom bg-surface p-4 shadow-card"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-medium text-navy">{doc.fileName}</h4>
              <StatusBadge status={doc.status} />
            </div>
            <div className="mt-2 space-y-1 text-small text-text-muted">
              <p>
                <span className="text-text-soft">Type:</span> {doc.documentType}
              </p>
              <p>
                <span className="text-text-soft">Matter:</span>{" "}
                <span className="font-mono text-caption">{doc.matterReference}</span>
              </p>
              <p>
                <span className="text-text-soft">Uploaded:</span>{" "}
                {new Date(doc.uploadedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
