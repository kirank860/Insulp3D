"use client";

import { useState } from "react";
import { submitEnquiry } from "@/app/actions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    const result = await submitEnquiry(formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-4 py-12">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground">Thank You!</h3>
        <p className="text-foreground/70 font-josefin text-center">Your enquiry has been submitted successfully. We will get back to you shortly.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 px-6 py-2 bg-muted text-foreground rounded-lg font-heading text-sm transition-colors hover:bg-border">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-heading font-bold tracking-widest text-foreground">FIRST NAME</label>
          <input type="text" name="firstName" required className="w-full bg-background border border-border rounded-lg px-4 py-3 font-josefin focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-heading font-bold tracking-widest text-foreground">LAST NAME</label>
          <input type="text" name="lastName" required className="w-full bg-background border border-border rounded-lg px-4 py-3 font-josefin focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-heading font-bold tracking-widest text-foreground">EMAIL ADDRESS</label>
          <input type="email" name="email" required className="w-full bg-background border border-border rounded-lg px-4 py-3 font-josefin focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-heading font-bold tracking-widest text-foreground">PHONE NUMBER</label>
          <input type="tel" name="phone" className="w-full bg-background border border-border rounded-lg px-4 py-3 font-josefin focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-heading font-bold tracking-widest text-foreground">SUBJECT</label>
        <input type="text" name="subject" required className="w-full bg-background border border-border rounded-lg px-4 py-3 font-josefin focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-heading font-bold tracking-widest text-foreground">MESSAGE</label>
        <textarea name="message" required rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-josefin focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-heading font-bold tracking-widest text-foreground">ATTACH DESIGN / REFERENCE (OPTIONAL)</label>
        <input
          type="file"
          name="attachment"
          accept="image/*,.pdf,.stl,.obj,.zip"
          className="w-full bg-background border border-border rounded-lg px-4 py-3 font-josefin text-sm text-foreground/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-primary-foreground file:font-heading file:font-bold file:text-xs file:tracking-widest file:cursor-pointer hover:file:bg-primary/90 transition-all"
        />
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg font-josefin text-sm">
          Failed to submit enquiry. Please try again later.
        </div>
      )}

      <button disabled={status === "submitting"} type="submit" className="w-full py-4 bg-primary text-primary-foreground font-heading font-bold tracking-widest rounded-lg transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "submitting" ? "SUBMITTING..." : "SUBMIT"}
      </button>
    </form>
  );
}
