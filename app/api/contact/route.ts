import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) errors.message = "Please add a little more detail.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: wire to email service (Resend/SendGrid) or a database.
  // For now we log the enquiry server-side and acknowledge receipt.
  console.log("[contact] new enquiry:", {
    name,
    email,
    phone: data.phone,
    subject: data.subject,
    message,
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks — we received your message and will be in touch soon.",
  });
}
