import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { IMAGES, ROOMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inventory — Rooms at Ashton Royal Living",
  description:
    "VIP private suites, semi-private rooms, and furnished studios — fully furnished with utilities included. No credit check; SSI, SSDI, private pay, and vouchers welcome.",
};

const perks = [
  "No credit check, no problem",
  "SSI, SSDI, private pay & vouchers welcome",
  "Near bus stops & community centers",
  "Drug & alcohol-free environment",
];

export default function Inventory() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Inventory"
        title="Spacious rooms,"
        highlight="utilities included."
        subtitle="No credit check, no problem. Whether you're on SSI, SSDI, private pay, or vouchers, you're welcome here. Choose a private, semi-private, or furnished space and feel at home from day one."
        image={IMAGES.roomVip}
        alt="An elegant furnished bedroom at Ashton Royal Living"
        cta={{ label: "Book a tour", href: "/appointment" }}
      />

      {/* Rooms */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Reveal><p className="eyebrow text-orange-600">Available Spaces</p></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
                  Find your perfect room.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/appointment" className="btn-orange px-6 py-3">Reserve a visit</Link>
            </Reveal>
          </div>

          <Stagger amount={0.1} className="mt-12 grid gap-6 lg:grid-cols-3">
            {ROOMS.map((r) => (
              <StaggerItem key={r.name}>
                <article className="group glass flex h-full flex-col overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r.image} alt={r.name} fill sizes="(max-width:1024px) 100vw, 22rem" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-900 backdrop-blur">
                      {r.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-semibold text-blue-900">{r.name}</h3>
                    </div>
                    <p className="mt-1 text-sm font-medium text-orange-600">{r.price}</p>
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {r.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[0.93rem] text-ink-soft">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/appointment" className="btn-ghost mt-6 w-full py-3 text-center text-blue-900">
                      Book a tour
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Perks band with image */}
      <section className="px-4 pb-4">
        <div className="mx-auto max-w-6xl">
          <div className="glass overflow-hidden rounded-[2.5rem] p-2">
            <div className="grid items-stretch gap-2 lg:grid-cols-2">
              <Reveal className="relative min-h-[18rem] overflow-hidden rounded-[2rem]">
                <Image src={IMAGES.lounge} alt="A bright, welcoming common lounge" fill sizes="(max-width:1024px) 100vw, 32rem" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </Reveal>
              <div className="flex flex-col justify-center p-8 sm:p-11">
                <Reveal><p className="eyebrow text-orange-600">Why Residents Choose Us</p></Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
                    Everyone deserves a comfortable home.
                  </h2>
                </Reveal>
                <Stagger amount={0.08} className="mt-6 grid gap-3 sm:grid-cols-2">
                  {perks.map((p) => (
                    <StaggerItem key={p}>
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-[0.95rem] leading-snug text-ink-soft">{p}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="See a room in person." subtitle="Book a tour and we'll show you around — no pressure, no credit check." />
    </main>
  );
}
