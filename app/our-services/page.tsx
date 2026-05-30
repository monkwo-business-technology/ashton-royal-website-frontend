import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { IMAGES, SERVICES, AMENITIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services — Ashton Royal Living",
  description:
    "Meal preparation, VIP private & semi-private furnished rooms, medication assistance, TV/WiFi/laundry, grants and flexible payment — everything you need to feel right at home.",
};

export default function OurServices() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Our Services"
        title="Everything you need to feel"
        highlight="right at home."
        subtitle="From home-cooked meals to medication assistance and fully furnished VIP rooms, our personal care team supports daily life with warmth and dignity."
        image={IMAGES.cooking}
        alt="Staff preparing fresh meals in a warm kitchen"
        cta={{ label: "Book an appointment", href: "/appointment" }}
      />

      {/* Alternating service rows */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-14">
          {SERVICES.map((s, i) => (
            <div
              key={s.no}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/50 shadow-[0_30px_70px_-40px_rgba(8,26,61,0.5)]">
                <Image src={s.image} alt={s.title} fill sizes="(max-width:1024px) 100vw, 32rem" className="object-cover" />
                <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/85 font-display text-xl font-semibold text-blue-900 backdrop-blur">
                  {s.no}
                </span>
              </Reveal>
              <div>
                <Reveal><p className="eyebrow text-orange-600">{s.short}</p></Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">{s.body}</p>
                </Reveal>
                <Reveal delay={0.15}>
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 rounded-full border border-blue-700/15 bg-white/60 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-white/[0.06]">
                        <span className="grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="px-4 pb-4">
        <div className="mx-auto max-w-6xl">
          <div className="glass rounded-[2.5rem] p-8 sm:p-12">
            <Reveal><p className="eyebrow text-orange-600">Included Amenities</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
                Comfort, connection, and care — all included.
              </h2>
            </Reveal>
            <Stagger amount={0.05} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {AMENITIES.map((a) => (
                <StaggerItem key={a}>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/55 px-4 py-3 dark:bg-white/[0.05]">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span className="text-[0.95rem] font-medium text-blue-900">{a}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand title="Let's find the right fit for you." subtitle="Tell us what you need — we'll walk you through services, rooms, and grants." />
    </main>
  );
}
