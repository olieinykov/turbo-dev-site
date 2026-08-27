import { NextResponse } from "next/server";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  pageUrl?: unknown;
  referrer?: unknown;
};

const text = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (text(body.website, 200)) return NextResponse.json({ ok: true });

  const name = text(body.name, 100);
  const email = text(body.email, 160).toLowerCase();
  const company = text(body.company, 120);
  const service = text(body.service, 120);
  const message = text(body.message, 4000);

  if (name.length < 2 || !emailPattern.test(email) || !service || message.length < 10) {
    return NextResponse.json({ error: "Please check the required fields." }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "The CRM connection is not configured yet." }, { status: 503 });
  }

  const submissionId = crypto.randomUUID();
  const payload = {
    event: "website.project_request.created",
    submission_id: submissionId,
    submitted_at: new Date().toISOString(),
    source: "turbodev.website",
    contact: { name, email, company },
    request: { service, message },
    context: {
      page_url: text(body.pageUrl, 500),
      referrer: text(body.referrer, 500),
      user_agent: request.headers.get("user-agent") || ""
    },
    automation: {
      create_or_update_crm_contact: true,
      create_lead_or_deal: true,
      send_confirmation_email: true,
      confirmation_email: email
    }
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Submission-Id": submissionId,
        ...(process.env.CONTACT_WEBHOOK_SECRET ? { "Authorization": `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` } : {})
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
  } catch (error) {
    console.error("Contact webhook delivery failed", { submissionId, error });
    return NextResponse.json({ error: "We couldn't deliver your request. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, submissionId });
}
