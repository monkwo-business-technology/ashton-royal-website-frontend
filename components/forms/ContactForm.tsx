"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fieldCls, labelCls, errCls } from "./formStyles";

type Errors = Record<string, string>;

const subjects = [
  "General enquiry",
  "Availability & tours",
  "Pricing & grants",
  "Services & care",
  "Other",
];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [serverMsg, setServerMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
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
      setServerMsg(data.message ?? "Message sent.");
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
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-blue-900">
              Message received
            </h3>
            <p className="mt-2 max-w-sm text-ink-soft">{serverMsg}</p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-ghost mt-6 px-6 py-3 text-blue-900"
            >
              Send another
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
                <label htmlFor="c-name" className={labelCls}>Full name</label>
                <input id="c-name" name="name" type="text" autoComplete="name"
                  placeholder="Jane Doe" className={fieldCls(!!errors.name)} />
                {errors.name && <p className={errCls}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className={labelCls}>Email</label>
                <input id="c-email" name="email" type="email" autoComplete="email"
                  placeholder="jane@email.com" className={fieldCls(!!errors.email)} />
                {errors.email && <p className={errCls}>{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="c-phone" className={labelCls}>Phone <span className="text-ink-soft/60">(optional)</span></label>
                <input id="c-phone" name="phone" type="tel" autoComplete="tel"
                  placeholder="(832) 000-0000" className={fieldCls(false)} />
              </div>
              <div>
                <label htmlFor="c-subject" className={labelCls}>Subject</label>
                <select id="c-subject" name="subject" defaultValue={subjects[0]} className={fieldCls(false)}>
                  {subjects.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="c-message" className={labelCls}>How can we help?</label>
              <textarea id="c-message" name="message" rows={5}
                placeholder="Tell us a little about what you're looking for…"
                className={`${fieldCls(!!errors.message)} resize-none`} />
              {errors.message && <p className={errCls}>{errors.message}</p>}
            </div>

            {errors._ && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{errors._}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-orange w-full px-6 py-4 text-base disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p className="text-center text-xs text-ink-soft">
              We respect your privacy. Your details are never shared.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
