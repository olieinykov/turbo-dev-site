"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          service: data.get("service"),
          message: data.get("message"),
          website: data.get("website"),
          pageUrl: window.location.href,
          referrer: document.referrer
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your request.");
      form.reset();
      setState("success");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to send your request.");
      setState("error");
    }
  }

  if (state === "success") {
    return <div className="order-form form-success" role="status"><span className="success-mark">✓</span><p className="eyebrow"><span /> Request received</p><h3>Thank you. We&apos;re on it.</h3><p>Your project request has entered our workflow. You&apos;ll receive a confirmation email, and our team will get back to you as soon as possible.</p><button type="button" onClick={() => setState("idle")}>Send another request</button></div>;
  }

  return (
    <form className="order-form" onSubmit={handleSubmit} noValidate={false}>
      <label className="honeypot-field" aria-hidden="true"><span>Website</span><input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <div className="field-row"><label><span>Your name</span><input name="name" type="text" placeholder="John Smith" autoComplete="name" minLength={2} maxLength={100} required /></label><label><span>Work email</span><input name="email" type="email" placeholder="john@company.com" autoComplete="email" maxLength={160} required /></label></div>
      <div className="field-row"><label><span>Company</span><input name="company" type="text" placeholder="Company name" autoComplete="organization" maxLength={120} /></label><label><span>I&apos;m interested in</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>CRM &amp; automation</option><option>AI integrations &amp; bots</option><option>Web application</option><option>Mobile application</option><option>SaaS development</option><option>Systems integration</option><option>Other</option></select></label></div>
      <label className="message-field"><span>Tell us about your project</span><textarea name="message" placeholder="What would you like to build or automate?" rows={4} minLength={10} maxLength={4000} required /></label>
      <button type="submit" disabled={state === "submitting"}>{state === "submitting" ? "Sending…" : "Send project request"} <span>{state === "submitting" ? "·" : "→"}</span></button>
      <p className="form-note">We usually reply within one business day.</p>
      <p className="form-status" role="alert" aria-live="polite">{state === "error" ? `${error} You can also email hello@turbodev.bg.` : ""}</p>
    </form>
  );
}
