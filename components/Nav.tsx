"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAV } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`nav-solid flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-3 pl-1">
          <span className="relative block h-10 w-10">
            <Image src="/logo.jpg" alt="Ashton Royal Living" fill className="object-contain" sizes="40px" />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[1.05rem] font-semibold tracking-tight text-blue-900">
              Ashton Royal
            </span>
            <span className="eyebrow text-[0.6rem] text-orange-600">Living</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? "bg-blue-900/[0.07] text-blue-900"
                    : "text-ink-soft hover:bg-blue-900/[0.06] hover:text-blue-800"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/appointment" className="btn-orange hidden px-5 py-2.5 text-sm sm:inline-flex">
            Appointment
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded bg-blue-900 transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-4 rounded bg-blue-900 transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="nav-solid absolute top-[5.2rem] w-[calc(100%-2rem)] max-w-6xl space-y-1 rounded-2xl p-3 lg:hidden"
          >
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block rounded-2xl px-4 py-3 font-medium transition-colors ${
                    isActive(l.href)
                      ? "bg-blue-900/[0.07] text-blue-900"
                      : "text-ink-soft hover:bg-blue-900/[0.06] hover:text-blue-800"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/appointment"
                className="btn-orange mt-1 block px-4 py-3 text-center"
              >
                Book an Appointment
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
