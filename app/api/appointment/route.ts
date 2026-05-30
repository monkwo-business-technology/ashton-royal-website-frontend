import { NextResponse } from "next/server";

type AppointmentPayload = {
  name?: string;
  email?: string;
  phone?: string;
  forWhom?: string;
  roomType?: string;
  date?: string;
  time?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let data: AppointmentPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const date = (data.date ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email.";
  if (phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!date) errors.date = "Please choose a preferred date.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: wire to scheduling/CRM or email service.
  console.log("[appointment] new request:", {
    name,
    email,
    phone,
    forWhom: data.forWhom,
    roomType: data.roomType,
    date,
    time: data.time,
    message: data.message,
  });

  return NextResponse.json({
    ok: true,
    message: "Your appointment request is in! Our team will confirm by phone shortly.",
  });
}
