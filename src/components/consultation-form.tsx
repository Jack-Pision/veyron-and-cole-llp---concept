"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  consultationType: z.string().min(1, "Please select a legal need"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Consultation request:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-[0.5px] border-success/20 bg-success/5 p-8 text-center">
        <CheckCircle className="mx-auto h-10 w-10 text-success" />
        <h3 className="mt-4 text-card font-semibold text-navy">
          Request Received
        </h3>
        <p className="mt-2 text-body text-text-muted">
          Thank you for reaching out. A member of our team will respond within
          one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-lg"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name")}
            className="border-border-custom"
          />
          {errors.name && (
            <p className="text-small text-error">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
            className="border-border-custom"
          />
          {errors.email && (
            <p className="text-small text-error">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Company name"
            {...register("company")}
            className="border-border-custom"
          />
          {errors.company && (
            <p className="text-small text-error">{errors.company.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="consultationType">Legal Need</Label>
          <Select
            id="consultationType"
            {...register("consultationType")}
            className="border-border-custom"
          >
            <option value="">Select a practice area</option>
            <option value="corporate">Corporate Law</option>
            <option value="ma">Mergers & Acquisitions</option>
            <option value="contracts">Contract Drafting</option>
            <option value="employment">Employment Law</option>
            <option value="ip">Intellectual Property</option>
            <option value="compliance">Compliance & Risk</option>
          </Select>
          {errors.consultationType && (
            <p className="text-small text-error">
              {errors.consultationType.message}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Briefly describe your legal needs..."
          {...register("message")}
          className="border-border-custom"
        />
        {errors.message && (
          <p className="text-small text-error">{errors.message.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-navy text-white hover:bg-navy-soft sm:w-auto"
      >
        <Send className="mr-2 h-4 w-4" />
        {isSubmitting ? "Sending..." : "Submit Request"}
      </Button>
    </form>
  );
}
