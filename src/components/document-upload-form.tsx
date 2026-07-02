"use client";

import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const documentTypes = [
  "Contract",
  "Corporate Records",
  "Employment Document",
  "IP Document",
  "Compliance File",
  "Other",
];

interface DocumentUploadFormProps {
  onUpload: (doc: {
    fileName: string;
    documentType: string;
    matterReference: string;
    notes: string;
  }) => void;
}

export function DocumentUploadForm({ onUpload }: DocumentUploadFormProps) {
  const [fileName, setFileName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [matterReference, setMatterReference] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fileName) newErrors.fileName = "Please select a file.";
    if (!documentType) newErrors.documentType = "Please select a document type.";
    if (!matterReference) newErrors.matterReference = "Matter reference is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    await new Promise((resolve) => setTimeout(resolve, 500));
    onUpload({ fileName, documentType, matterReference, notes });
    setSuccess(true);
    setFileName("");
    setDocumentType("");
    setMatterReference("");
    setNotes("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="upload-file">Select File</Label>
        <Input
          id="upload-file"
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setFileName(file?.name || "");
          }}
          className="border-border-custom file:mr-4 file:border-0 file:bg-navy/5 file:px-3 file:py-1 file:text-sm file:text-navy"
        />
        {errors.fileName && (
          <p className="text-xs text-error">{errors.fileName}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="upload-type">Document Type</Label>
        <Select
          id="upload-type"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
          className="border-border-custom"
        >
          <option value="">Select type</option>
          {documentTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        {errors.documentType && (
          <p className="text-xs text-error">{errors.documentType}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="upload-matter">Matter Reference</Label>
        <Input
          id="upload-matter"
          placeholder="e.g. VC-2024-001"
          value={matterReference}
          onChange={(e) => setMatterReference(e.target.value)}
          className="border-border-custom font-mono"
        />
        {errors.matterReference && (
          <p className="text-xs text-error">{errors.matterReference}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="upload-notes">Notes (Optional)</Label>
        <Textarea
          id="upload-notes"
          rows={3}
          placeholder="Any additional context..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="border-border-custom"
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-xl bg-navy text-white hover:bg-navy-soft"
      >
        <Upload className="mr-2 h-4 w-4" />
        Upload Document
      </Button>
      {success && (
        <div className="flex items-center gap-2 rounded-lg bg-success/5 p-3 text-sm text-success">
          <CheckCircle className="h-4 w-4" />
          Document uploaded successfully.
        </div>
      )}
    </form>
  );
}
