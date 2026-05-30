"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div className="relative">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-white/40 px-4 py-1.5 text-orange-600 backdrop-blur dark:bg-white/[0.06]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Empowering Lives, Fostering Community
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-5xl font-light leading-[1.02] tracking-tight text-blue-900 sm:text-6xl lg:text-7xl"
          >
            Welcome to{" "}
            <span className="text-gild font-semibold italic">Ashton Royal</span>{" "}
            Living
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            More than a housing community — we&rsquo;re a family. Safe, affordable
            communal living for veterans, seniors, sober living, and independent
            adults, supported by a personal care team with{" "}
            <strong className="font-semibold text-blue-800">
              25+ years
            </strong>{" "}
            of experience.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/appointment" className="btn-orange px-7 py-3.5 text-base">
              Book an Appointment
            </Link>
            <Link href="/our-services" className="btn-ghost px-7 py-3.5 text-base text-blue-900">
              Explore Our Services
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="tel:+18323055595"
              className="font-display text-2xl font-semibold tracking-tight text-blue-900"
            >
              1 (832) 305-5595
            </a>
            <span className="hairline w-16" />
            <span className="text-sm text-ink-soft">No credit check. All welcome.</span>
          </motion.div>
        </div>

        {/* Right — glass portrait composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/60 shadow-[0_40px_90px_-40px_rgba(8,26,61,0.6)]">
            <Image
              src={IMAGES.caregiverSenior}
              alt="A caregiver sharing a warm moment with a resident at Ashton Royal Living"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 28rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/55 to-blue-900/10" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,rgba(255,156,77,0.28),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between p-8 text-cloud">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-orange-200">A Place to Belong</span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-orange-200/40 font-display text-lg text-orange-200">
                  AR
                </span>
              </div>
              <div>
                <p className="font-display text-3xl font-light leading-snug">
                  &ldquo;Warmth and support greet you at every turn.&rdquo;
                </p>
                <p className="mt-4 text-sm text-cloud/70">
                  Drug &amp; alcohol-free homes near bus stops and community
                  centers.
                </p>
              </div>
            </div>
          </div>

          {/* Floating glass stat chips */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="float-soft glass absolute -left-6 top-12 rounded-2xl px-5 py-3"
          >
            <p className="font-display text-2xl font-semibold text-blue-900">10K+</p>
            <p className="text-xs text-ink-soft">Happy Residents</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="float-soft glass absolute -right-5 bottom-14 rounded-2xl px-5 py-3"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="font-display text-2xl font-semibold text-blue-900">25+</p>
            <p className="text-xs text-ink-soft">Years of Care</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
