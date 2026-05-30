"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const features = [
  "No credit check — no problem",
  "SSI, SSDI, private pay & vouchers welcome",
  "Near bus stops & community centers",
  "Drug & alcohol-free environment",
  "Spacious bedrooms & inviting common areas",
  "Utilities included in every room",
];

export function Housing() {
  return (
    <section id="housing" className="relative px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="glass overflow-hidden rounded-[2.5rem] p-2">
          <div className="grid items-stretch gap-2 lg:grid-cols-2">
            {/* Visual panel */}
            <Reveal className="relative min-h-[22rem] overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900" />
              <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_10%_10%,rgba(255,156,77,0.38),transparent_55%)]" />
              <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:38px_38px]" />
              <div className="relative flex h-full flex-col justify-between p-9 text-cloud">
                <span className="eyebrow text-orange-200">Inventory</span>
                <div>
                  <p className="font-display text-4xl font-light leading-tight">
                    Luxurious comfort,
                    <br />
                    <span className="italic text-orange-200">affordable</span> living.
                  </p>
                  <div className="mt-6 flex gap-6">
                    <div>
                      <p className="font-display text-3xl font-semibold text-orange-200">Private</p>
                      <p className="text-sm text-cloud/70">VIP Rooms</p>
                    </div>
                    <span className="w-px bg-cloud/20" />
                    <div>
                      <p className="font-display text-3xl font-semibold text-orange-200">Semi</p>
                      <p className="text-sm text-cloud/70">Private Rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-11">
              <Reveal>
                <p className="eyebrow text-orange-600">VIP Affordable Shared Housing</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
                  Everyone deserves a comfortable home —{" "}
                  <span className="italic text-gild font-semibold">
                    regardless of background
                  </span>
                  .
                </h2>
              </Reveal>

              <Stagger amount={0.07} className="mt-7 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <StaggerItem key={f}>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-blue-900">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 6 9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[0.95rem] leading-snug text-ink-soft">{f}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.1}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#contact" className="btn-orange px-7 py-3.5">
                    Join Our Community
                  </a>
                  <a href="tel:+18323055595" className="btn-ghost px-7 py-3.5 text-blue-900">
                    Call to Tour
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
