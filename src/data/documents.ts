export type UploadedDocument = {
  id: string;
  fileName: string;
  documentType: string;
  matterReference: string;
  uploadedAt: string;
  status: "Pending" | "Received" | "Reviewed";
};

export const mockDocuments: UploadedDocument[] = [
  {
    id: "doc-1",
    fileName: "Series_C_Term_Sheet.pdf",
    documentType: "Contract",
    matterReference: "VC-2024-001",
    uploadedAt: "2024-03-15T10:30:00Z",
    status: "Reviewed",
  },
  {
    id: "doc-2",
    fileName: "Employee_Handbook_v3.docx",
    documentType: "Employment Document",
    matterReference: "VC-2024-002",
    uploadedAt: "2024-03-18T14:15:00Z",
    status: "Received",
  },
  {
    id: "doc-3",
    fileName: "Compliance_Audit_Report.pdf",
    documentType: "Compliance File",
    matterReference: "VC-2024-003",
    uploadedAt: "2024-03-20T09:45:00Z",
    status: "Pending",
  },
];

export const matterUpdates = [
  {
    id: "update-1",
    title: "Contract review received",
    description: "Series C term sheet has been reviewed by the corporate team.",
    time: "2 hours ago",
  },
  {
    id: "update-2",
    title: "Compliance file marked for review",
    description: "Annual compliance audit report queued for partner review.",
    time: "1 day ago",
  },
  {
    id: "update-3",
    title: "Partner follow-up scheduled",
    description: "Marcus Cole will follow up on employment handbook revisions.",
    time: "3 days ago",
  },
];
