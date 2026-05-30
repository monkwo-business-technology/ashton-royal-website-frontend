"use client";

import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-[#04102a]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_15%,rgba(255,156,77,0.3),transparent_55%),radial-gradient(70%_60%_at_10%_90%,rgba(30,92,192,0.5),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow text-orange-200">Get in Touch</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-cloud sm:text-6xl">
                  Ready to join our{" "}
                  <span className="italic text-orange-200">vibrant community?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-cloud/75">
                  Every individual is valued, respected, and embraced. Your home is
                  here, waiting for you. We can&rsquo;t wait to welcome you home.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="glass rounded-3xl p-7">
                <p className="text-sm font-medium text-ink-soft">Call us directly</p>
                <a
                  href="tel:+18323055595"
                  className="mt-1 block font-display text-3xl font-semibold tracking-tight text-blue-900 transition-colors hover:text-blue-700"
                >
                  1 (832) 305-5595
                </a>

                <div className="my-5 hairline" />

                <p className="text-sm font-medium text-ink-soft">Email us</p>
                <a
                  href="mailto:info@ashtonroyalliving.com"
                  className="mt-1 block font-display text-xl font-semibold text-blue-900 transition-colors hover:text-blue-700 break-all"
                >
                  info@ashtonroyalliving.com
                </a>

                <a
                  href="tel:+18323055595"
                  className="btn-orange mt-7 flex w-full items-center justify-center gap-2 px-6 py-4 text-base"
                >
                  Learn More
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <p className="mt-4 text-center text-xs text-ink-soft">
                  Proud to offer equal housing opportunities for all.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
