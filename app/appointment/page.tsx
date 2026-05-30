import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { IMAGES, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment — Ashton Royal Living",
  description:
    "Schedule a visit or tour at Ashton Royal Living. No credit check. SSI, SSDI, private pay, and vouchers welcome. Our personal care team confirms every appointment by phone.",
};

const steps = [
  { n: "1", t: "Tell us about you", b: "Share who the home is for and your preferred time." },
  { n: "2", t: "We confirm by phone", b: "Our team calls to confirm and answer any questions." },
  { n: "3", t: "Visit & feel at home", b: "Tour a room, meet the team, and explore the community." },
];

export default function AppointmentPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Appointment"
        title="Book a visit —"
        highlight="welcome home awaits."
        subtitle="Choose a time that works for you. There's no credit check and no obligation — just a warm welcome and answers to all your questions."
        image={IMAGES.lounge}
        alt="A bright, welcoming lounge at Ashton Royal Living"
      />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Steps / reassurance */}
          <div className="space-y-4">
            <Reveal><p className="eyebrow text-orange-600">How It Works</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
                Three simple steps.
              </h2>
            </Reveal>

            <div className="space-y-3 pt-2">
              {steps.map((s) => (
                <div key={s.n} className="glass flex items-start gap-4 rounded-2xl p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 font-display text-lg font-semibold text-white">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-blue-900">{s.t}</h3>
                    <p className="mt-1 text-[0.93rem] text-ink-soft">{s.b}</p>
                  </div>
                </div>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="glass-dark mt-2 rounded-2xl p-6">
                <p className="text-sm text-cloud/70">Prefer to talk now?</p>
                <a href={CONTACT.phoneHref} className="mt-1 block font-display text-2xl font-semibold text-orange-200">
                  {CONTACT.phone}
                </a>
                <p className="mt-2 text-xs text-cloud/60">{CONTACT.hours}</p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div>
            <Reveal><AppointmentForm /></Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
