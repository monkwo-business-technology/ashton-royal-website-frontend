"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import type { ReactNode } from "react";

type Service = {
  no: string;
  title: string;
  body: string;
  icon: ReactNode;
  featured?: boolean;
};

const I = (d: string) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services: Service[] = [
  {
    no: "01",
    title: "Meal Preparation",
    body: "Nourishing, home-cooked meals prepared with care so every resident eats well, every day.",
    icon: I("M3 11h18M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M6 11v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6"),
  },
  {
    no: "02",
    title: "VIP Private & Semi-Private Rooms",
    body: "Comfortable private and semi-private rooms, with utilities included — your own space to call home.",
    icon: I("M3 21V8l9-5 9 5v13M9 21v-6h6v6M3 21h18"),
    featured: true,
  },
  {
    no: "03",
    title: "Furnished Rooms",
    body: "Move in with ease. Spacious bedrooms and inviting common areas, fully furnished from day one.",
    icon: I("M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M3 11h18v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6ZM6 18v2M18 18v2"),
  },
  {
    no: "04",
    title: "Medication Assistance",
    body: "Our personal care team helps with medication management, keeping health and routines on track.",
    icon: I("M10.5 20.5 4 14a4.95 4.95 0 0 1 7-7l6.5 6.5a4.95 4.95 0 0 1-7 7ZM8 8l8 8"),
  },
  {
    no: "05",
    title: "TV, WiFi & Laundry",
    body: "Stay connected with TV and high-speed WiFi, and keep things fresh in our convenient laundry rooms.",
    icon: I("M3 5h18v11H3zM8 20h8M12 16v4M7 9h.01M10 9h4"),
  },
  {
    no: "06",
    title: "Grants Available",
    body: "Explore grant opportunities for extra support. SSI, SSDI, private pay, and vouchers all welcome.",
    icon: I("M12 3v18M7 7h7a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h8"),
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-orange-600">Our Services</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-blue-900 sm:text-5xl">
                Everything you need to feel{" "}
                <span className="italic text-gild font-semibold">right at home</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/our-services" className="btn-ghost px-6 py-3 text-blue-900">
              View all services
            </Link>
          </Reveal>
        </div>

        <Stagger
          amount={0.08}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <StaggerItem key={s.no}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                  s.featured ? "glass-dark text-cloud" : "glass"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                      s.featured
                        ? "bg-orange-400/20 text-orange-200"
                        : "bg-blue-700/10 text-blue-700"
                    }`}
                  >
                    {s.icon}
                  </span>
                  <span
                    className={`font-display text-3xl font-light ${
                      s.featured ? "text-orange-200/50" : "text-blue-900/15"
                    }`}
                  >
                    {s.no}
                  </span>
                </div>
                <h3
                  className={`mt-6 font-display text-xl font-semibold leading-snug ${
                    s.featured ? "text-cloud" : "text-blue-900"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2.5 text-[0.95rem] leading-relaxed ${
                    s.featured ? "text-cloud/75" : "text-ink-soft"
                  }`}
                >
                  {s.body}
                </p>
                <span
                  className={`pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full blur-2xl transition-opacity duration-500 ${
                    s.featured
                      ? "bg-orange-400/20"
                      : "bg-orange-400/0 group-hover:bg-orange-400/20"
                  }`}
                />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
