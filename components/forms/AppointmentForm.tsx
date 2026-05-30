"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fieldCls, labelCls, errCls } from "./formStyles";
import { ROOMS } from "@/lib/site";

type Errors = Record<string, string>;

const forOptions = ["Myself", "A parent / relative", "A veteran", "A senior", "Someone else"];
const timeSlots = ["Morning (8–11 AM)", "Midday (11 AM–2 PM)", "Afternoon (2–5 PM)", "Evening (5–8 PM)"];

export function AppointmentForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // set min date to today (client-only to avoid hydration mismatch)
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      forWhom: String(fd.get("forWhom") ?? ""),
      roomType: String(fd.get("roomType") ?? ""),
      date: String(fd.get("date") ?? ""),
      time: String(fd.get("time") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.errors ?? { _: data.error ?? "Something went wrong." });
        setStatus("idle");
        return;
      }
      setServerMsg(data.message ?? "Request received.");
      setStatus("done");
      form.reset();
    } catch {
      setErrors({ _: "Network error. Please try again or call us." });
      setStatus("idle");
    }
  }

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-blue-900">
              Appointment requested
            </h3>
            <p className="mt-2 max-w-sm text-ink-soft">{serverMsg}</p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-ghost mt-6 px-6 py-3 text-blue-900"
            >
              Book another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="a-name" className={labelCls}>Full name</label>
                <input id="a-name" name="name" type="text" autoComplete="name"
                  placeholder="Jane Doe" className={fieldCls(!!errors.name)} />
                {errors.name && <p className={errCls}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="a-email" className={labelCls}>Email</label>
                <input id="a-email" name="email" type="email" autoComplete="email"
                  placeholder="jane@email.com" className={fieldCls(!!errors.email)} />
                {errors.email && <p className={errCls}>{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="a-phone" className={labelCls}>Phone</label>
                <input id="a-phone" name="phone" type="tel" autoComplete="tel"
                  placeholder="(832) 000-0000" className={fieldCls(!!errors.phone)} />
                {errors.phone && <p className={errCls}>{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="a-for" className={labelCls}>Who is this for?</label>
                <select id="a-for" name="forWhom" defaultValue={forOptions[0]} className={fieldCls(false)}>
                  {forOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="a-date" className={labelCls}>Preferred date</label>
                <input id="a-date" name="date" type="date" min={minDate}
                  className={fieldCls(!!errors.date)} />
                {errors.date && <p className={errCls}>{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="a-time" className={labelCls}>Preferred time</label>
                <select id="a-time" name="time" defaultValue={timeSlots[0]} className={fieldCls(false)}>
                  {timeSlots.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="a-room" className={labelCls}>Room interest</label>
              <select id="a-room" name="roomType" defaultValue="No preference yet" className={fieldCls(false)}>
                <option>No preference yet</option>
                {ROOMS.map((r) => <option key={r.name}>{r.name}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="a-message" className={labelCls}>Anything we should know? <span className="text-ink-soft/60">(optional)</span></label>
              <textarea id="a-message" name="message" rows={4}
                placeholder="Care needs, move-in timing, questions…"
                className={`${fieldCls(false)} resize-none`} />
            </div>

            {errors._ && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{errors._}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-orange w-full px-6 py-4 text-base disabled:opacity-60"
            >
              {status === "sending" ? "Submitting…" : "Request appointment"}
            </button>
            <p className="text-center text-xs text-ink-soft">
              No credit check. Our team confirms every appointment by phone.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
