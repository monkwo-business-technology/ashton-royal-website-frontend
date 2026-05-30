import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { IMAGES, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Ashton Royal Living",
  description:
    "Get in touch with Ashton Royal Living. Call 1 (832) 305-5595, email info@ashtonroyalliving.com, or send us a message — we can't wait to welcome you home.",
};

function Icon({ d }: { d: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const details = [
  { label: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref, d: "M3 5a2 2 0 0 1 2-2h2l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v2a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z" },
  { label: "Email us", value: CONTACT.email, href: CONTACT.emailHref, d: "M4 6h16v12H4zM4 7l8 6 8-6" },
  { label: "Hours", value: CONTACT.hours, d: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { label: "Service area", value: CONTACT.area, d: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11ZM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Contact Us"
        title="Ready to join our"
        highlight="vibrant community?"
        subtitle="Every individual is valued, respected, and embraced. Your home is here, waiting for you. Reach out and our team will be glad to help."
        image={IMAGES.carePro}
        alt="A friendly member of the Ashton Royal Living care team"
      />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Info */}
          <div className="space-y-4">
            <Reveal><p className="eyebrow text-orange-600">Get in Touch</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
                We&rsquo;d love to hear from you.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink-soft">
                Call us, email us, or use the form — whatever&rsquo;s easiest. We can&rsquo;t
                wait to welcome you home.
              </p>
            </Reveal>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {details.map((d) => {
                const inner = (
                  <div className="glass flex h-full items-start gap-3 rounded-2xl p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-900/[0.06] text-blue-700">
                      <Icon d={d.d} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-soft">{d.label}</p>
                      <p className="mt-0.5 font-display text-lg font-semibold text-blue-900">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="transition-transform duration-300 hover:-translate-y-0.5">{inner}</a>
                ) : (
                  <div key={d.label}>{inner}</div>
                );
              })}
            </div>

            <Reveal delay={0.15}>
              <div className="glass-dark mt-2 rounded-2xl p-6">
                <p className="font-display text-xl font-semibold text-cloud">Equal Housing Opportunity</p>
                <p className="mt-2 text-sm text-cloud/75">
                  We&rsquo;re proud to offer equal housing opportunities for all — regardless
                  of background. No credit check required.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div>
            <Reveal><ContactForm /></Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
