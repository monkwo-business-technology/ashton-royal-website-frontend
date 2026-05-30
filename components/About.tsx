"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const stats = [
  { value: "25+", label: "Years of Combined Experience" },
  { value: "10K+", label: "Happy Residents" },
  { value: "5K+", label: "Care & Support Touchpoints" },
  { value: "100%", label: "Equal Housing Opportunity" },
];

const pillars = [
  {
    title: "Every individual is valued",
    body: "At Ashton Royal Living, every resident is respected and embraced. Your home is here, waiting for you.",
  },
  {
    title: "Health & personal support",
    body: "Our personal care team works alongside an amazing staff to nurture wellbeing in everyone who walks through our doors.",
  },
  {
    title: "A fresh start, welcomed",
    body: "Senior, veteran, or simply ready for a new chapter — you&rsquo;ll find a place to belong here.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-orange-600">Who We Are</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-blue-900 sm:text-5xl">
                We&rsquo;re a <span className="italic text-gild font-semibold">family</span>,
                not just a housing community.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
                Step into a world where warmth and support greet you at every turn.
                Our mission is to extend a compassionate hand and nurture a sense of
                wellbeing in every individual.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Veterans", "Seniors", "Sober Living", "Independent Adults"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-700/15 bg-white/50 px-4 py-2 text-sm font-medium text-blue-800 backdrop-blur"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Pillars */}
          <Stagger className="space-y-4">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="glass group rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-blue-900">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6 9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-blue-900">
                        {p.title}
                      </h3>
                      <p
                        className="mt-1.5 text-ink-soft"
                        dangerouslySetInnerHTML={{ __html: p.body }}
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Stat band */}
        <Stagger
          amount={0.1}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/60 bg-orange-400/20 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass-dark h-full px-6 py-8 text-center">
                <p className="font-display text-4xl font-semibold text-orange-200 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-cloud/70">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
